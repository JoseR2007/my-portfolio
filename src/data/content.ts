interface CardProject {
  name: string
  desc: string
  src_img: string
  alias?: string
  link: string
}

export const presenation = {
  title: "Construyendo software con",
  title_enfasis: "atención al detalle",
  desc: "Desarrollador web Frontend con experiencia en Backend. Más de 3 años escribiendo codigo que no se rompe y que el equipo entiende."
} as const;

export const about = {
  title: "Sobre mi",
  pagraph1: "Me enamoré de la programación y el mundo del desarrollo cuando tan solo tenia 15 años y desde entonces no he parado de aprender y mejorar.",
  pagraph2: "Mi objetivo es claro: Crear código que no se solo funcione; debe ser escalable, manejable e intuitivo.",
  tags: [
    { title: "3+", desc: "Años programando" },
    { title: "Actualmente", desc: "Estudiante de Ingenieria en Ciencias de la Computación" }
  ]
} as const;

export const projects_sect = {
  title: "Proyectos seleccionados",
  desc: "¡Puedes ver su codigo y más informacion en Github!"
}

export const projects: CardProject[] = [
  {
    name: "Node web scrapper",
    desc: "Un proyecto de terminal que permite extraer informacion basica de una pagina web.",
    src_img: "/images/scrapper_screenshot.png",
    link: "https://github.com/JoseR2007/node-web-scraper"
  }
]