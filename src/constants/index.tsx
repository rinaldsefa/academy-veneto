import { Course, Province } from "@/types/course";

export const courses: Course[] = [
  {
    order: 4,
    id: "moda",
    title: "moda",
    icon: "/assets/courses/14.png",
    href: "/corsi/moda",
    label: "Sistema Moda",
    bulletIcon: "/assets/courses/bullet/moda.png",
    degrees: [
      {
        img: "/assets/courses/degrees/cosmo.png",
        href: "https://www.itscosmo.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Padova",
                list: [
                  "E-COMMERCE FASHION MANAGER - Padova",
                  "FASHION SHOES COORDINATOR - Capriccio di Vigonza (PD)",
                  "DIGITAL MARKETING E SOCIAL COMMUNICATION - Padova",
                  "FASHION COORDINATOR KNIT SPECIALIST - Padova",
                  "FASHION COORDINATOR - Padova",
                  "VIDEOMAKER FOR TV, WEB AND CINEMA - Padova",
                  "PATTERN MAKER AND PROTOTYPING - Padova",
                  "STORE MANAGER - Padova",
                  "FASHION DESIGNER - Padova",
                  "OMNICHANNEL EXPERIENCE MANAGER - Padova",
                ],
              },
              {
                province: "Vicenza",
                list: [
                  "GREEN LEATHER MANAGER - Arzignano (VI)",
                  "FASHION JEWELLERY COORDINATOR - Vicenza",
                  "FASHION SUSTAINABILITY MANAGER - Valdagno (VI)",
                  "SPORTSWEAR PRODUCT MANAGER - Bassano del Grappa (VI)",
                  "DIGITAL JEWELLERY DESIGN - Vicenza",
                ],
              },
              {
                province: "Verona",
                list: ["FASHION PRODUCT MANAGER - Verona"],
              },
              {
                province: "Treviso",
                list: ["SPORT SYSTEM SPECIALIST - Montebelluna (TV)"],
              },
              {
                province: "Belluno",
                list: ["EYEWEAR PRODUCT MANAGER - Longarone (BL)"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 10,
    id: "turismo",
    title: "turismo",
    icon: "/assets/courses/15.png",
    href: "/corsi/turismo",
    label: "Turismo",
    bulletIcon: "/assets/courses/bullet/turismo.png",
    degrees: [
      {
        img: "/assets/courses/degrees/turismo.png",
        href: "https://www.itsturismo.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Padova",
                list: ["SPA&Wellness Hospitality Marketing - Abano Terme (PD)"],
              },
              {
                province: "Venezia",
                list: [
                  "Hospitality Marketing & Communication - Jesolo (VE)",
                  "Tourism Innovation & Digital 4.0 - Jesolo (VE)",
                  "ART&CULTURE A.I. MARKETING&COMMUNICATION - Venezia",
                ],
              },
              {
                province: "Treviso",
                list: ["Food&Wine Marketing & Communication - Villorba (TV)"],
              },
              {
                province: "Verona",
                list: [
                  "Food&Wine Marketing & Communication - Verona - Valeggio sul Mincio (VR)",
                  "Hospitality Marketing & Communication - Bardolino (VR)",
                ],
              },
              {
                province: "Belluno",
                list: ["Dolomiti Tourism Marketing & Communication - Belluno"],
              },
              {
                province: "Vicenza",
                list: [
                  "Tourism Destination Marketing & Communication - Asiago (VI)",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsorange",
  },
  {
    order: 3,
    id: "agroalimentare",
    title: "agroalimentare",
    icon: "/assets/courses/16.png",
    href: "/corsi/agroalimentare",
    label: "Sistema agroalimentare",
    bulletIcon: "/assets/courses/bullet/agroalimentare.png",
    degrees: [
      {
        img: "/assets/courses/degrees/its-alimentare.png",
        href: "https://itsagroalimentareveneto.it/",
        bulletPoints: [
          {
            label: "ITS Academy Agroalimentare Veneto",
            provinces: [
              {
                province: "Padova",
                list: [
                  "Agribusiness Manager per le produzioni biologiche - Padova",
                  "Agribusiness manager per la transizione ecologica - Padova",
                ],
              },
              {
                province: "Treviso",
                list: [
                  "Agribusiness Manager per il marketing territoriale e Unesco - Conegliano (TV)",
                  "Agribusiness Manager per la sicurezza e la trasformazione degli alimenti - Vittorio Veneto (TV)",
                ],
              },
              {
                province: "Verona",
                list: [
                  "Agrifood & Supply Chain Manager - Verona",
                  "Agribusiness manager per le produzioni biologiche - Buttapietra (VR)",
                ],
              },
              {
                province: "Vicenza",
                list: [
                  "Agribusiness Manager per le produzioni locali - Bassano del Grappa (VI)",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 1,
    id: "mobilita-sostenibile",
    title: "mobilità sostenibile",
    icon: "/assets/courses/17.png",
    href: "/corsi/mobilita-sostenibile",
    label: "mobilità sostenibile",
    bulletIcon: "/assets/courses/bullet/mobilità.png",
    degrees: [
      {
        img: "/assets/courses/degrees/fip.png",
        href: "https://www.itsmarcopolo.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Treviso",
                list: ["Logistics Manager - Treviso"],
              },
              {
                province: "Rovigo",
                list: ["Logistics Manager - Rovigo"],
              },
              {
                province: "Venezia",
                list: [
                  "Logistics Manager in ambito portuale e aeroportuale - Mestre (VE)",
                  "Macchinista e preparatore treni - Venezia",
                  "Art moving and set up manager - Venezia",
                  "Manager dell'economia circolare e logistica del rifiuto - Venezia",
                  "Ufficiale di Macchina e coperta - Venezia",
                ],
              },
            ],
          },
        ],
      },
      {
        img: "/assets/courses/degrees/last.png",
        href: "https://itslogistica.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Padova",
                list: ["International logistics management - Padova"],
              },
              {
                province: "Vicenza",
                list: ["International logistics management - Vicenza"],
              },
              {
                province: "Verona",
                list: [
                  "International logistics management - Verona",
                  "International logistics management  (LIDL)",
                  "Esperto dei veicoli endotermici, ibridi ed elettrici",
                  "Automotive Service and Sales management - Verona",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsazure",
  },
  {
    order: 2,
    id: "efficienza-energetica",
    title: "Energia e ambiente",
    label: "tecnologia, innovazione, sostenibilità",
    icon: "/assets/courses/18.png",
    href: "/corsi/efficienza-energetica",
    bulletIcon: "/assets/courses/bullet/efficienza-energetica.png",
    degrees: [
      {
        img: "/assets/courses/degrees/its-red.png",
        href: "https://itsred.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Padova",
                list: [
                  "BUILDING MANAGER (Tecnico superiore per l'efficienza energetica nell'edilizia sostenibile) - Padova",
                  "ENERGY MANAGER 4.0 (Tecnico superiore per l'efficienza energetica degli impianti) - Padova",
                  "GREEN MANAGER (Tecnico superiore per la sostenibilità energetica nell'economia circolare) - Padova",
                  "ENERGY SPECIALIST - Padova",
                ],
              },
              {
                province: "Verona",
                list: [
                  "BUILDING MANAGER, (Tecnico superiore per l'efficienza energetica nell'edilizia sostenibile) - Verona",
                  "ENERGY MANAGER 4.0 (Tecnico superiore per l'efficienza energetica degli impianti) - Verona",
                ],
              },
              {
                province: "Treviso",
                list: [
                  "CONSTRUCTION MANAGER (Tecnico superiore per l'efficienza energetica nell'edilizia sostenibile) - Treviso",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsgreen",
  },
  {
    order: 7,
    id: "design-e-arredo",
    title: "design e arredo",
    icon: "/assets/courses/19.png",
    href: "/corsi/design-e-arredo",
    label: "Sistema Casa",
    bulletIcon: "/assets/courses/bullet/design-e-arredo.png",
    degrees: [
      {
        img: "/assets/courses/degrees/its-red.png",
        href: "https://itsred.it/",
        bulletPoints: [
          {
            label: "ITS Red Academy",
            provinces: [
              {
                province: "Padova",
                list: ["DESIGN MANAGER Sistema Casa - Padova"],
              },
              {
                province: "Treviso",
                list: ["DESIGN MANAGER Sistema Casa - Treviso"],
              },
              {
                province: "Vicenza",
                list: [
                  "MARKETING MANAGER Sistema casa e Ambiente costruito - Vicenza",
                ],
              },
              {
                province: "Verona",
                list: ["DESIGN MANAGER Sistema casa - Verona"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 5,
    id: "meccanica-e-meccatronica",
    title: "meccanica e meccatronica",
    icon: "/assets/courses/20.png",
    href: "/corsi/meccanica-e-meccatronica",
    label: "Meccanica - Meccatronica - Informatica Industriale",
    bulletIcon: "/assets/courses/bullet/meccanica.png",
    degrees: [
      {
        img: "/assets/courses/degrees/its-tech.png",
        href: "https://www.itsmeccatronico.it/",
        bulletPoints: [
          {
            label: "ITS Academy Meccatronico Veneto",
            provinces: [
              {
                province: "Vicenza",
                list: [
                  "Automazione e Sistemi meccatronici - Vicenza, Bassano (VI), Schio (VI), Vicenza Ovest",
                  "Innovazione di processi e prodotti meccanici - Vicenza",
                  "Informatica nell’Industria 4.0 - Vicenza, Thiene (VI)",
                  "Design delle tecnologie dei materiali - Bassano del Grappa (VI)",
                ],
              },
              {
                province: "Belluno",
                list: ["Automazione e Sistemi meccatronici - Belluno"],
              },
              {
                province: "Treviso",
                list: [
                  "Automazione e Sistemi meccatronici - Conegliano (TV), Castelfranco Montebelluna (TV), Sinistra di Piave (TV), Treviso",
                  "Innovazione di processi e prodotti meccanici - Treviso",
                ],
              },
              {
                province: "Padova",
                list: [
                  "Automazione e Sistemi meccatronici - Padova, Este (PD)",
                  "Innovazione di processi e prodotti meccanici - Padova",
                ],
              },
              {
                province: "Verona",
                list: ["Automazione e Sistemi meccatronici - Verona"],
              },
              {
                province: "Rovigo",
                list: ["Innovazione di processi e prodotti meccanici - Rovigo"],
              },
              {
                province: "Venezia",
                list: [
                  "Automazione e sistemi meccatronici - Mestre (VE), Portogruaro (VE)",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 9,
    id: "servizi-alle-imprese",
    title: "servizi alle imprese",
    icon: "/assets/courses/21.png",
    href: "/corsi/servizi-alle-imprese",
    label: "Sistema Servizi alle Imprese",
    bulletIcon: "/assets/courses/bullet/servizi-alle-imprese.png",
    degrees: [
      {
        img: "/assets/courses/degrees/last.png",
        href: "https://itslogistica.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Vicenza",
                list: [
                  "Esperto nei processi di internazionalizzazione d’impresa - Thiene",
                ],
              },
              {
                province: "Verona",
                list: [
                  "Esperto nei processi di internazionalizzazione d’impresa - Verona",
                ],
              },
            ],
          },
        ],
      },
      {
        img: "/assets/courses/degrees/its-red.png",
        href: "https://itsred.it/",
        bulletPoints: [
          {
            label: "ITS Red Academy",
            provinces: [
              {
                province: "Treviso",
                list: ["Marketing Manager - Treviso"],
              },
              {
                province: "Padova",
                list: ["Public Administration Manager - Padova"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 8,
    id: "information-technologies",
    title: "information technologies",
    icon: "/assets/courses/22.png",
    href: "/corsi/information-technologies",
    label: "Tecnologie dell'informazione e Comunicazione",
    bulletIcon: "/assets/courses/bullet/information-technologies.png",
    degrees: [
      {
        img: "/assets/courses/degrees/last.png",
        href: "https://itslogistica.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Verona",
                list: [
                  "Digital transformation specialist - Web developer - Verona",
                  "Digital transformation specialist - System administration - Villafranca di Verona",
                ],
              },
            ],
          },
        ],
      },
      {
        img: "/assets/courses/degrees/its-digital.png",
        href: "https://itsdigitalacademy.com/",
        bulletPoints: [
          {
            label: "ITS Digital Academy Mario Volpato",
            provinces: [
              {
                province: "Padova",
                list: [
                  "Artificial Intelligence - Padova",
                  "Cloud Developer - Padova",
                  "A/R e V/R & Game Developer -  Padova (PD)",
                  "Digital Marketing and Innovation Specialist - Noventa Padovana",
                  "Crossmedia Communication Specialist - Cittadella (PD) e Venezia",
                ],
              },
              {
                province: "Treviso",
                list: [
                  "Cyber Security Specialist e Artificial Intelligence & Data Specialist - Treviso",
                ],
              },
              {
                province: "Venezia",
                list: [
                  "Crossmedia Communication Specialist - Venezia",
                  "Artificial Intelligence & Data Specialist - Venezia",
                ],
              },
              {
                province: "Verona",
                list: [
                  "Web Developer Full Stack - Verona",
                  "Crossmedia communication specialist - Verona",
                  "Media designer and CG animation specialist - Verona",
                ],
              },
              {
                province: "Vicenza",
                list: ["Web Developer Full Stack - Vicenza"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsgrey",
  },
  /*  {
    order: 6,
    id: "biotech",
    title: "Nuove tecnologie",
    icon: "/assets/courses/11.png",
    href: "/corsi/biotech",
    label: "Nuove tecnologie della vita",
    bulletIcon: "/assets/courses/bullet/biotech.png",
    degrees: [
      {
        img: "/assets/courses/degrees/its-tech.png",
        href: "https://www.itsmeccatronico.it/",
        bulletPoints: [
          {
            label: "Sistemi di produzione nel settore delle materie plastiche",
            provinces: [
              {
                province: "Padova",
                list: [
                  "Tecnico superiore di produzione nell'industria plastica",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itspurple",
  }, */
].sort((a, b) => a.order - b.order);

export const provinces: Province[] = [
  {
    id: "vicenza",
    label: "Vicenza",
    courses: [
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: [
          "Automazione e Sistemi meccatronici",
          "Innovazione di processi e prodotti meccanici",
          "Informatica nell’Industria 4.0",
          "Design delle tecnologie dei materiali",
        ],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Marketing Manager settore arredo"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: ["Web Developer Full Stack"],
      },

      {
        label: "Servizi alle imprese",
        href: "/corsi/servizi-alle-imprese",
        list: ["Esperto nei processi di internazionalizzazione d’impresa"],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: [
          "GREEN LEATHER MANAGER - Arzignano (VI)",
          "FASHION JEWELLERY COORDINATOR - Vicenza",
          "FASHION SUSTAINABILITY MANAGER - Valdagno (VI)",
          "SPORTSWEAR PRODUCT MANAGER - Bassano del Grappa (VI)",
          "DIGITAL JEWELLERY DESIGN - Vicenza",
        ],
      },
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Tourism Destination Marketing & Communication"],
      },
      {
        label: "Agroalimentare",
        href: "/corsi/agroalimentare",
        list: [
          "Agribusiness Manager per le produzioni locali - Bassano del Grappa (VI)",
        ],
      },
    ],
  },
  {
    id: "belluno",
    label: "Belluno",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Dolomiti Tourism Marketing & Communication"],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: ["Eyewear Product Manager"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Automazione e Sistemi meccatronici"],
      },
    ],
  },
  {
    id: "padova",
    label: "Padova",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Spa&Wellness Hospitality Marketing"],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: ["International Logistics Manager"],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Design Manager Sistema Casa"],
      },
      {
        label: "Tecnologia, innovazione, sostenibilità",
        href: "/corsi/efficienza-energetica",
        list: [
          "Tecnico Superiore Building Manager",
          "Energy Manager 4.0",
          "Green Manager Ambiente ed Energia",
          "Energy Specialist",
        ],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: [
          "E-COMMERCE FASHION MANAGER - Padova",
          "FASHION SHOES COORDINATOR - Capriccio di Vigonza (PD)",
          "DIGITAL MARKETING E SOCIAL COMMUNICATION - Padova",
          "FASHION COORDINATOR KNIT SPECIALIST - Padova",
          "FASHION COORDINATOR - Padova",
          "VIDEOMAKER FOR TV, WEB AND CINEMA - Padova",
          "PATTERN MAKER AND PROTOTYPING - Padova",
          "STORE MANAGER - Padova",
          "FASHION DESIGNER - Padova",
          "OMNICHANNEL EXPERIENCE MANAGER - Padova",
        ],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: [
          "Automazione e Sistemi meccatronici",
          "Innovazione di processi e prodotti meccanici",
        ],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Artificial Intelligence",
          "Cloud Developer",
          "A/R e V/R & Game Developer",
          "Crossmedia Communication Specialist",
          "Tecnico Superiore System Cyber Security",
        ],
      },
      {
        label: "Servizi alle imprese",
        href: "/corsi/servizi-alle-imprese",
        list: ["Public Administration Manager"],
      },
      {
        label: "Agroalimentare",
        href: "/corsi/agroalimentare",
        list: [
          "Agribusiness manager per la transizione ecologica",
          "Agribusiness manager per le produzioni biologiche",
        ],
      },
    ],
  },
  {
    id: "rovigo",
    label: "Rovigo",
    courses: [
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: ["Logistics Manager"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Innovazione di processi e prodotti meccanici"],
      },
    ],
  },
  {
    id: "treviso",
    label: "Treviso",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Food & Wine Tourism"],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: [
          "Logistics Manager",
          "Esperto dei veicoli endotermici, ibridi ed elettrici",
        ],
      },
      {
        label: "Agroalimentare",
        href: "/corsi/agroalimentare",
        list: [
          "Agrifood Manager per il marketing territoriale e Unesco",
          "Agribusiness Manager per la sicurezza e la trasformazione degli alimenti",
        ],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: ["Sport System Specialist"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: [
          "Automazione e Sistemi meccatronici",
          "Innovazione di processi e prodotti meccanici",
        ],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Design Manager Sistema Casa"],
      },
      {
        label: "Tecnologia, innovazione, sostenibilità",
        href: "/corsi/efficienza-energetica",
        list: ["Construction Manager"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Cyber Security Specialist e Artificial Intelligence & Data Specialist",
        ],
      },
      {
        label: "Servizi alle imprese",
        href: "/corsi/servizi-alle-imprese",
        list: ["Marketing Manager"],
      },
    ],
  },
  {
    id: "venezia",
    label: "Venezia",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: [
          "Tourism Innovation & Digital 4.0",
          "Hospitality Marketing & Communication",
          "ART&CULTURE A.I. MARKETING&COMMUNICATION",
        ],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: [
          "Macchinista e preparatore treni",
          "Art moving and set up manager",
          "Logistics Manager in ambito portuale e aeroportuale",
          "Manager dell'economia circolare e logistica del rifiuto",
          "Ufficiale di Macchina e coperta",
        ],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Automazione e Sistemi meccatronici"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Crossmedia communication specialist",
          "Artificial Intelligence & Data Specialist",
        ],
      },
    ],
  },
  {
    id: "verona",
    label: "Verona",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: [
          "Food&Wine Marketing & Communication",
          "Hospitality Marketing & Communication",
        ],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: [
          "Automotive Service and Sales management",
          "International Logistics Manager",
          "International logistics management (LIDL)",
          "Esperto dei veicoli endotermici, ibridi ed elettrici",
        ],
      },
      {
        label: "Tecnologia, innovazione, sostenibilità",
        href: "/corsi/efficienza-energetica",
        list: ["Building Manager", "Energy Manager 4.0"],
      },
      {
        label: "Agroalimentare",
        href: "/corsi/agroalimentare",
        list: [
          "Agribusiness manager per le produzioni biologiche",
          "Agrifood & Supply Chain Manager",
        ],
      },
      {
        label: "Servizi alle imprese",
        href: "/corsi/servizi-alle-imprese",
        list: ["Esperto nei processi di internazionalizzazione d’impresa"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Automazione e Sistemi meccatronici"],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Design Manager Sistema Casa"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Digital transformation specialist - System administration",
          "Web Developer Full Stack",
          "Digital transformation specialist - Web developer",
          "Crossmedia communication specialist",
          "Media designer and CG animation specialist",
        ],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: ["Fashion Product Manager"],
      },
    ],
  },
];

export const faqs = [
  {
    question: "Che cosa sono gli ITS?",
    answer:
      "Gli ITS (Istituti Tecnologici Superiori) sono Academy post-diploma che offrono una formazione altamente specializzata in ambito tecnologico. Fanno parte della Formazione Terziaria Professionalizzante, ovvero quella formazione che ti prepara direttamente per il mondo del lavoro. Sono riconosciuti dal Miur.",
  },
  {
    question: "Quali sono i settori tecnologici coperti dai corsi ITS?",
    answer: (
      <span>
        Le 8 Academy propongono percorsi per 5 delle 6 aree tecnologiche:
        <ul>
          <li>
            <a
              href="https://www.itsacademyveneto.it/corsi/efficienza-energetica"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              - Efficienza energetica
            </a>
          </li>
          <li>
            - Nuove tecnologie per il Made in Italy (articolata in cinque
            ambiti:
            <a
              href="https://www.itsacademyveneto.it/corsi/agroalimentare"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              Sistema agroalimentare
            </a>
            ,
            <a
              href="https://www.itsacademyveneto.it/corsi/design-e-arredo"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              Sistema casa
            </a>
            ,
            <a
              href="https://www.itsacademyveneto.it/corsi/meccanica-e-meccatronica"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              Sistema meccanica
            </a>
            ,
            <a
              href="https://www.itsacademyveneto.it/corsi/moda"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              Sistema moda
            </a>
            ,
            <a
              href="https://www.itsacademyveneto.it/corsi/servizi-alle-imprese"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              Servizi alle imprese
            </a>
            )
          </li>
          <li>
            <a
              href="https://www.itsacademyveneto.it/corsi/turismo"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              - Tecnologie innovative per i beni e le attività culturali/Turismo
            </a>
          </li>
          <li>
            <a
              href="https://www.itsacademyveneto.it/corsi/information-technologies"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              - Tecnologie dell informazione e della comunicazione
            </a>
          </li>
        </ul>
      </span>
    ),
  },
  {
    question: "Quali sono gli ITS presenti in Veneto?",
    answer: (
      <>
        <p>
          In Veneto, ci sono 8 Istituti Tecnologici Superiori (ITS) che offrono
          percorsi formativi post-diploma in vari ambiti di specializzazione.
          Ecco un elenco degli ITS presenti in Veneto e i loro ambiti di
          specializzazione:
        </p>
        <ul className="list-disc">
          <li>
            <a
              href="https://www.itslogistica.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Academy Last - Logistica e Trasporti
            </a>
          </li>
          <li>
            <a
              href="https://itsred.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Red Academy - Efficienza Energetica, Edilizia sostenibile
            </a>
          </li>
          <li>
            <a
              href="https://www.itsturismo.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Academy Turismo Veneto - Turismo e ospitalità
            </a>
          </li>
          <li>
            <a
              href="https://www.itsmeccatronico.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              - ITS Academy Meccatronico Veneto - Meccatronica, Automazione
              Industriale
            </a>
          </li>
          <li>
            <a
              href="https://itsagroalimentareveneto.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Academy Agroalimentare Veneto - Agroalimentare
            </a>
          </li>
          <li>
            <a
              href="https://itsdigitalacademy.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Digital Academy Mario Volpato - ICT e Tecnologie dell
              Informazione
            </a>
          </li>
          <li>
            <a
              href="https://www.itscosmo.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Academy Cosmo - Sistema Moda
            </a>
          </li>
          <li>
            <a
              href="https://www.itsmarcopolo.it/"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              ITS Academy Marco Polo - Mobilità Sostenibile, Logistica e
              Trasporti
            </a>
          </li>
        </ul>
        <p>
          Li trovi tutti sul nostro sito, con un collegamento diretto al sito
          specifico di ogni Academy per approfondire.
        </p>
      </>
    ),
  },
  {
    question: "Perché scegliere un ITS?",
    answer:
      "Frequentare un ITS aumenta le tue possibilità di trovare lavoro! Circa il 92% degli studenti trova un'occupazione dopo aver completato il percorso. Gli ITS collaborano con le aziende per creare corsi che rispondano alle esigenze del mercato del lavoro, unendo teoria e tanta pratica in laboratorio e in azienda. Inoltre, molti docenti sono professionisti del settore.",
  },
  {
    question: "Quali sono le prospettive di carriera per i diplomati ITS?",
    answer:
      "I diplomati ITS in Veneto possono aspettarsi di ottenere posizioni tecniche o tecnico-manageriali all'interno di varie aziende e settori. È importante ricordare che, inserendoti in una nuova realtà lavorativa, inizierai sempre da posizioni junior, con l'opportunità di crescere e avanzare nella tua carriera.",
  },
  {
    question: "Che tipo di aziende collaborano con gli ITS?",
    answer:
      "Sono aziende del territorio Veneto, tra le migliori in Italia. Ogni Academy ha il suo network di partner specifici con cui collabora per la definizione dei percorsi pedagogici, per la proposta dei tirocini e molto altro ancora.",
  },
  {
    question: "Quanto dura un corso ITS?",
    answer:
      "I corsi ITS durano due anni, con un totale di 1800/2000 ore di formazione. Almeno il 30% di queste ore è dedicato a tirocini, anche all'estero.",
  },
  {
    question: "Chi può iscriversi agli ITS?",
    answer:
      "Puoi iscriverti agli ITS se hai un diploma di scuola superiore di cinque anni o un diploma quadriennale di istruzione e formazione professionale, completato con un corso annuale IFTS.",
  },
  {
    question: "Come ci si iscrive agli ITS?",
    answer:
      "Ogni ITS ha una pagina di iscrizione online. Dopo aver compilato il modulo, sarai contattato per il test di ammissione. Se superi il test, dovrai pagare una quota annuale per finalizzare l'iscrizione.    ",
  },
  {
    question: "C'è un test di ammissione?",
    answer:
      "I corsi ITS sono a numero chiuso, un massimo di 25 persone a corso, quindi per accedere devi superare un test attitudinale e un colloquio.",
  },
  {
    question: "C’è un limite di età per iscriversi?",
    answer: "No, in Veneto non ci sono limiti di età per iscriversi agli ITS.",
  },
  {
    question: "Quando aprono le iscrizioni?",
    answer:
      "Le iscrizioni aprono in momenti diversi per ogni istituto. Contatta direttamente l'istituto che ti interessa per sapere le tempistiche precise.",
  },
  {
    question: "Bisogna essere disoccupati per partecipare?",
    answer:
      "Si tratta di una scelta personale: in ogni ITS vige l’ obbligo di frequenza dell'80%, le lezioni sono organizzate su tutta la settimana in orari che vanno dalle 8 alle 18. Tuttavia i calendari delle lezioni  e i periodi di stage sono organizzati in modo diverso per ogni istituto. È quindi  sempre bene confrontarsi con l’ufficio dell'Academy di interesse e fare delle valutazioni.",
  },
  {
    question: "Sto già lavorando, posso iscrivermi a un ITS?",
    answer:
      "Se stai già lavorando, considera che i corsi ITS richiedono l'80% di frequenza sia per le lezioni teoriche che per quelle pratiche e i tirocini in azienda",
  },
  {
    question: "Quale diploma serve per partecipare alle selezioni?",
    answer:
      "Serve un diploma di scuola superiore. In alternativa, un diploma quadriennale di formazione professionale e un anno di Istruzione e Formazione Tecnica Superiore.",
  },
  {
    question: "Quanto costa l’iscrizione?",
    answer:
      "In Veneto, la retta annuale varia tra i 500 e i 1000 euro, a seconda del corso e dell'istituto. Ci sono borse di studio e incentivi per ridurre i costi, inclusi supporti per studenti fuori sede. Nella quota sono inclusi materiali scolastici come libri, uso dei computer e materiali di laboratorio.",
  },
  {
    question: "Cosa succede se mi ritiro durante l’anno?",
    answer:
      "Le politiche di rimborso variano da istituto a istituto. Verifica con l'istituto scelto.",
  },
  {
    question: "In cosa consiste il test di selezione?",
    answer:
      "Il test misura le competenze logiche, matematiche, culturali, informatiche e linguistiche (inglese). Include anche una parte motivazionale per capire se sei adatto al percorso. Ogni istituto può avere variazioni specifiche sulle domande e le materie del test, chiedi all'istituto di riferimento come prepararti al meglio.",
  },
  {
    question: "Quando sono previste le prove di ammissione?",
    answer:
      "Controlla il sito dell'istituto che ti interessa per le date precise delle prove di ammissione e delle iscrizioni.",
  },
  {
    question: "Sono disponibili alloggi per gli studenti fuori sede?",
    answer:
      "Gli ITS offrono spesso supporto agli studenti fuori sede per trovare alloggi. Tuttavia, la disponibilità di alloggi specifici per gli studenti varia da un istituto all'altro. Alcuni ITS collaborano con strutture locali, come residenze universitarie, appartamenti condivisi o agenzie immobiliari, per aiutare gli studenti a trovare una sistemazione adeguata.",
  },
  {
    question:
      "Quali sono le esperienze degli studenti che hanno frequentato gli ITS?",
    answer:
      "Le trovi sui nostri profili social! Oltre a tante altre informazioni sulle Academy e i percorsi.",
  },
  {
    question:
      "Quali sono le opportunità di studio all'estero durante il percorso ITS?",
    answer: (
      <>
        <p>
          Gli ITS ti offrono un sacco di opportunità super interessanti! Ecco
          cosa puoi aspettarti:
        </p>
        <ul className="list-disc">
          <li>
            Programmi Erasmus+: Gli ITS partecipano al famoso programma
            Erasmus+, che ti permette di studiare o fare un tirocinio in un
            altro paese europeo. Immagina di migliorare le tue competenze
            linguistiche e professionali mentre vivi un&apos;esperienza
            indimenticabile!
          </li>
          <li>
            Tirocini Internazionali: Molti ITS collaborano con aziende e
            istituzioni all&apos;estero per offrirti tirocini in contesti
            internazionali. Questo significa che puoi arricchire il tuo
            curriculum con esperienze lavorative globali e prepararti al meglio
            per il tuo futuro professionale.
          </li>
          <li>
            Progetti e Scambi Internazionali: Alcuni ITS organizzano progetti e
            scambi con scuole e aziende di altri paesi. Partecipa a visite di
            studio, workshop e altre attività formative che ti permetteranno di
            conoscere nuove culture e metodi di lavoro.
          </li>
          <li>
            Partenariati con Aziende all’estero: Gli ITS collaborano con aziende
            per offrirti stage e opportunità di formazione all&apos;estero.
            Queste collaborazioni ti aiutano a sviluppare le competenze
            specifiche che i datori di lavoro cercano nel mercato globale.
          </li>
          <li>
            Supporto per la Mobilità Internazionale: Gli ITS non ti lasciano
            solo! Ti offrono supporto nella ricerca di opportunità, nella
            preparazione dei documenti e nella logistica. Così, potrai
            concentrarti solo sull&apos;esperienza che stai per vivere.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Come posso ottenere una borsa di studio per frequentare un ITS?",
    answer: (
      <>
        <p>
          Esistono diverse formule di borse di studio che possono essere erogate
          direttamente dagli ITS oppure tramite collaborazioni con enti pubblici
          e privati. Ecco alcune possibilità:
        </p>
        <ul className="list-disc">
          <li>
            Borse di Studio Regionali: La Regione Veneto spesso mette a
            disposizione borse di studio per gli studenti iscritti agli ITS, al
            fine di sostenere le spese di formazione, alloggio e trasporto.
          </li>
          <li>
            Borse di Studio del MIUR: Il Ministero dell&apos;Istruzione,
            dell&apos;Università e della Ricerca (MIUR) offre borse di studio
            per gli studenti degli ITS, finanziate attraverso fondi statali e
            regionali.
          </li>
          <li>
            Borse di Studio degli ITS: Alcuni ITS hanno proprie borse di studio
            finanziate direttamente dall&apos;istituto o attraverso partnership
            con aziende locali e associazioni di categoria. Queste borse possono
            coprire parte delle tasse di iscrizione, materiali didattici o altre
            spese correlate.
          </li>
          <li>
            Borse di Studio per il Merito: Esistono borse di studio basate sul
            merito accademico, che premiano gli studenti con i migliori
            risultati scolastici. Queste borse possono essere offerte dagli ITS
            o da enti esterni.
          </li>
          <li>
            Borse di Studio per la Mobilità Internazionale: Gli studenti che
            partecipano a programmi di mobilità internazionale, come Erasmus+,
            possono accedere a borse di studio specifiche per coprire le spese
            di viaggio e soggiorno all&apos;estero.
          </li>
        </ul>
        <p>
          La disponibilità delle borse di studio varia di anno in anno e a
          istituto a istituto, si consiglia sempre di rivolgersi
          allall&apos;ufficio amministrativo dell’istituto di interesse.
        </p>
      </>
    ),
  },
  {
    question:
      "Esistono dei ponti con l’università? Si possono tradurre gli anni di ITS in anni universitari?",
    answer: (
      <>
        <p>
          Esistono alcune possibilità di integrazione tra i percorsi ITS e
          lall&apos;università, ma la situazione può variare a seconda delle
          regioni e delle specifiche istituzioni coinvolte. In generale:
        </p>
        <ul className="list-disc">
          <li>
            Accordi Locali: Alcuni ITS hanno stipulato accordi con università
            locali per riconoscere parte del percorso di studi completato presso
            l’ITS. Questi accordi possono consentire ai diplomati ITS di
            accedere a corsi di laurea universitari con il riconoscimento di
            alcuni crediti formativi universitari (CFU), riducendo così il tempo
            necessario per conseguire una laurea.
          </li>
          <li>
            Convalida dei Crediti: In assenza di accordi formali, i diplomati
            ITS possono comunque fare richiesta di convalida dei crediti presso
            le università. La decisione di riconoscere o meno i crediti spetta
            alla singola università e dipende dallaffinità tra il percorso ITS
            seguito e il corso di laurea scelto.
          </li>
          <li>
            Traduzione degli Anni di ITS in Anni Universitari: La traduzione
            degli anni di studio ITS in anni universitari non è automatica e
            dipende principalmente dai seguenti fattori:
            <ul className="list-disc">
              <li>
                Affinità del Programma: Maggiore è la corrispondenza tra il
                programma di studi ITS e il corso di laurea universitario,
                maggiori sono le probabilità che i crediti vengano riconosciuti.
              </li>
              <li>
                Accordi Preesistenti: Gli ITS che hanno accordi con università
                specifiche possono facilitare il processo di riconoscimento dei
                crediti.
              </li>
              <li>
                Valutazione Individuale: Le università valutano caso per caso le
                richieste di riconoscimento crediti, esaminando i contenuti e le
                competenze acquisite durante il percorso ITS.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];
