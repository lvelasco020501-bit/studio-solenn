/* Contenido editable de Studio Solenn.
   Para cambiar precios, servicios u horario, edita solo este archivo. */
window.SOLENN = {
  whatsapp: "523339462753",
  mensaje: "Hola, me gustaría agendar una cita en Studio Solenn.",

  horario: [
    ["Lunes a viernes", "Con cita previa"],
    ["Sábado", "10:00 – 15:00"],
    ["Domingo", "Cerrado"]
  ],

  menu: [
    {
      id: "manicure-pedicure",
      titulo: "Manicure & Pedicure",
      servicios: [
        ["Manicure en seco", "Preparación de cutícula, limado y acabado natural.", "$320"],
        ["Manicure Spa", "Manicura completa, soak con sales, exfoliación, mascarilla, hidratación.", "$400"],
        ["Manicure Japonés", "Manicura en seco, pulido y tratamiento nutritivo para uñas naturales.", "$350"],
        ["Pedicure Express", "Preparación de uñas y cutícula, limado, acabado natural.", "$350"],
        ["Pedicure Spa", "Pedicura completa, exfoliación, mascarilla, hidratación.", "$450"],
        ["Pedicure Gel", "Preparación de uña natural y esmaltado en gel sobre uña natural.", "$390"]
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
      ]
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
    ["Solenn Ritual", "Manicure Spa + Gel + Tratamiento", "$660"],
    ["Solenn Classic", "Manicure Express + Rubber + Diseño", "$760"],
    ["Solenn Essential", "Manicure Express + Soft Gel + Diseño o Efecto", "$870"],
    ["Solenn Reset", "Retiro + Manicure Express + Gel", "$780"],
    ["Solenn Full Edit", "Manicure Spa + Gel + Pedicure Spa + Gel", "$1,280"]
  ]
};
