"""Gradación uniforme para las fotos de Studio Solenn.
Iguala exposición, levanta negros (look mate), tono cálido y grano fino."""
import os, sys, numpy as np
from pathlib import Path
from PIL import Image, ImageFilter

SRC = Path(sys.argv[1]); OUT = Path(sys.argv[2]); OUT.mkdir(parents=True, exist_ok=True)
TARGET_MEAN = float(os.environ.get("TARGET_MEAN", 0.37))
rng = np.random.default_rng(7)

def grade(im):
    a = np.asarray(im.convert("RGB")).astype(np.float32) / 255
    lum = a @ np.array([0.2126, 0.7152, 0.0722])
    # 1. exposición: gamma para llevar la luminancia media al objetivo
    g = np.log(TARGET_MEAN) / np.log(np.clip(lum.mean(), 0.05, 0.95))
    a = a ** g
    # 2. balance de blancos neutro-cálido: igualar canales y luego calentar
    means = a.reshape(-1, 3).mean(0)
    a = a * (means.mean() / means) ** 0.6
    # 3. saturación ligeramente reducida
    lum = (a @ np.array([0.2126, 0.7152, 0.0722]))[..., None]
    a = lum + (a - lum) * 0.9
    # 4. curva suave en S con negros levantados y blancos contenidos
    a = np.clip(a, 0, 1)
    s = a * a * (3 - 2 * a)
    a = 0.45 * a + 0.55 * s
    a = 0.035 + a * (0.955 - 0.035)
    # 5. split tone: sombras hacia vino/café, luces hacia crema
    lum = (a @ np.array([0.2126, 0.7152, 0.0722]))[..., None]
    shadow = np.array([0.30, 0.16, 0.13]); high = np.array([1.0, 0.93, 0.80])
    wS = np.clip(1 - lum * 2.2, 0, 1) * 0.14
    wH = np.clip((lum - 0.55) * 2.2, 0, 1) * 0.10
    a = a * (1 - wS) + shadow * wS
    a = a * (1 - wH) + (a * high) * wH
    # calidez global
    a = a * np.array([1.035, 1.0, 0.93])
    # 6. grano fino monocromático
    noise = rng.normal(0, 0.012, a.shape[:2])[..., None]
    a = np.clip(a + noise, 0, 1)
    return Image.fromarray((a * 255).astype(np.uint8))

for p in sorted(SRC.glob("*.jpg")):
    im = Image.open(p)
    out = grade(im).filter(ImageFilter.UnsharpMask(radius=1.2, percent=40, threshold=2))
    out.save(OUT / f"{p.stem}.jpg", quality=86, optimize=True, progressive=True)
    out.save(OUT / f"{p.stem}.webp", quality=80, method=6)
    print(p.name, im.size)
