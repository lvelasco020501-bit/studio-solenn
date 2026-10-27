/* Contenido editable de Studio Solenn.
   Para cambiar precios, servicios u horario, edita solo este archivo. */
window.SOLENN = {
  whatsapp: "523339462753",
  instagram: "https://www.instagram.com/studiosolenn_/",
  mensaje: "Hola, me gustaría agendar una cita en Studio Solenn.",

  horario: [
    ["Lunes a viernes", "10:00 – 19:00"],
    ["Sábado", "10:00 – 17:00"],
    ["Domingo", "Cerrado"]
  ],

  // Carrusel del inicio. Para cambiar fotos: sube el archivo a assets/img/ y edita esta lista.
  carrusel: [
    ["estudio-sillones", "Dos sillones de terciopelo mostaza con tinas de pedicure y luz cálida bajo el escalón"],
    ["estudio-luz", "Estación de pedicure con banco de piel y tina de cerámica"],
    ["estudio-noche", "El estudio iluminado solo por la luz del escalón"],
    ["estudio-tina", "Tina de cerámica blanca bajo el banco de pedicure"]
  ],

  // Precios según "SERVICIOS STUDIO SOLENN 2026" (versión de 12 páginas, oct 2026).
  menu: [
    {
      id: "manicure",
      titulo: "Manicure",
      servicios: [
        ["Manicure en seco", "Manicura completa en seco, preparación de cutícula y limado.", "$320"],
        ["Manicure Spa", "Manicura completa, soak con sales, exfoliación, mascarilla, hidratación.", "$400"],
        ["Manicure Japonés", "Manicura en seco, pulido y tratamiento nutritivo para uñas naturales.", "$380"]
      ]
    },
    {
      id: "pedicure",
      titulo: "Pedicure",
      servicios: [
        ["Pedicure en seco", "Pedicura completa en seco, preparación de cutícula y limado.", "$400"],
        ["Pedicure Spa", "Pedicura completa, exfoliación, mascarilla, hidratación.", "$480"],
        ["Pedicure Gel", "Preparación de uña natural y esmaltado en gel sobre uña natural.", "$290"]
      ]
    },
    {
      id: "care-extensions",
      titulo: "Care & Extensions",
      servicios: [
        ["Gel", "Esmalte en gel sobre uña natural.", "$280"],
        ["Rubber", "Refuerzo flexible sobre uña natural.", "$380"],
        ["Baño de acrílico", "Refuerzo con acrílico sobre uña natural.", "$420"],
        ["Acrílico escultural", "Largo 1–3.", "$550"],
        ["Acrílico con tip", "Largo 1–3.", "$520"],
        ["Soft Gel", "Extensión completa con tip de soft gel.", "$500"],
        ["Largo extra", "Por nivel adicional de largo.", "+ $50"]
      ]
    },
    {
      id: "retoques",
      titulo: "Retoques & Retiros",
      servicios: [
        ["Retoque acrílico", "", "$480"],
        ["Retoque rubber", "", "$350"],
        ["Retoque gel", "", "$250"],
        ["Retiro acrílico", "", "$180"],
        ["Retiro rubber / soft gel", "", "$150"],
        ["Retiro gel", "", "$120"],
        ["Reparación acrílico", "Por uña.", "$80"],
        ["Reparación rubber", "Por uña.", "$55"],
        ["Reparación gel", "Por uña.", "$35"]
      ],
      nota: "No realizamos retoques en trabajos de otros salones. En ese caso es necesario retirar el producto y volver a aplicarlo."
    },
    {
      id: "nail-art",
      titulo: "Nail Art & Add-ons",
      servicios: [
        ["French", "", "$150"],
        ["Efecto", "", "$100"],
        ["Cat Eye", "", "$150"],
        ["Vitacare · Vitamina E", "", "$50"],
        ["Pedrería", "", "$3 c/u"],
        ["Diseños", "Por uña.", "Desde $15"]
      ]
    }
  ],

  sets: [
    ["Solenn Mani Ritual", "Manicure Spa + Gel + Tratamiento", "$650"],
    ["Solenn Pedi Ritual", "Pedicure Spa + Gel + Tratamiento", "$780"],
    ["Solenn Classic", "Manicure en seco + Rubber + Diseño sencillo", "$750"],
    ["Solenn Essential", "Manicure en seco + Soft Gel + Diseño sencillo o Efecto", "$860"],
    ["Solenn Reset", "Retiro + Manicure en seco + Gel", "$690"],
    ["Solenn Full Edit", "Manicure Spa + Gel + Pedicure Spa + Gel", "$1,280"],
    ["Solenn Her & Him", "For her: Manicure en seco + Gel · For him: Manicure japonés", "$870"]
  ],

  // Menú de bebidas (Wellness Tonics)
  bebidas: [
    ["Berry Fizz", "Bebida burbujeante de frutos rojos con notas de flor de jamaica y un toque de limón, enriquecida con colágeno y vitamina C.", "$80"],
    ["Vainilla Cloud", "Shaken cold brew con foam de colágeno y sabor a vainilla.", "$90"],
    ["Iced Latte", "", "$70"],
    ["Cold Brew", "", "$60"],
    ["Matcha Latte", "", "$80"]
  ],
  bebidasNotas: [
    "Agrega leche vegetal por $15 más (almendra o avena).",
    "Agua y té de cortesía."
  ]
};
