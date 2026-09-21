export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment?: string;
  verified: boolean;
}

export interface ApparatusItem {
  id: string;
  name: string;
  highlight: string;
  description: string;
  benefits: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  aspect: 'portrait' | 'landscape' | 'square';
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const studioData = {
  name: "Twist Pilates",
  slug: "twist-pilates",
  city: "Campo Grande",
  state: "MS",
  neighborhood: "Carandá Bosque",
  rating: 5.0,
  reviewsCount: 5,
  phone: "(67) 99920-2600",
  phoneRaw: "5567999202600",
  whatsappUrl: "https://wa.me/5567999202600?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20no%20Twist%20Pilates.",
  whatsappShortUrl: "https://wa.me/message/IKIE4O573K5AB1",
  instagramHandle: "@twistpilates.ms",
  instagramUrl: "https://www.instagram.com/twistpilates.ms/",
  address: {
    street: "Rua Vitório Zeola",
    number: "810",
    complement: "Sala 03",
    neighborhood: "Carandá Bosque",
    city: "Campo Grande",
    state: "MS",
    cep: "79032-360",
    plusCode: "HC5H+M7 Carandá Bosque, Campo Grande - MS",
    full: "R. Vitório Zeola, nº 810 - Sl 03 - Carandá Bosque, Campo Grande - MS, 79032-360",
    mapsUrl: "https://www.google.com/maps/place/Twist+Pilates/@-20.4410292,-54.5714072,17z/data=!3m1!4b1!4m6!3m5!1s0x9486e9992d2b2397:0x6d04ddc1269a463e!8m2!3d-20.4410292!4d-54.5688323!16s%2Fg%2F11wmyb8tqd",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Twist+Pilates+Campo+Grande+MS"
  },
  motto: "Estúdio completo com aparelhos de qualidade",
  quote: {
    text: "Pilates desenvolve um corpo uniforme, corrige posturas erradas, restaura a vitalidade física, vigora a mente e eleva o espírito.",
    author: "Joseph H. Pilates"
  },
  apparatus: [
    {
      id: "reformer",
      name: "Reformer em Madeira Nobre",
      highlight: "Precisão & Fluidez",
      description: "Equipamento em madeira maciça com sistema de molas progressivas da conceituada fabricante Kauffer, permitindo desde mobilidade suave até fortalecimento avançado.",
      benefits: ["Alinhamento vertebral", "Fortalecimento do core", "Baixo impacto articular"]
    },
    {
      id: "cadillac",
      name: "Cadillac / Trapézio",
      highlight: "Descompressão & Força",
      description: "Estrutura vertical completa para trabalhos de suspensão, tração assistida e exercícios invertidos com total segurança e suporte.",
      benefits: ["Alongamento profundo", "Descompressão lombar", "Controle postural 3D"]
    },
    {
      id: "ladder-barrel",
      name: "Ladder Barrel",
      highlight: "Flexibilidade & Extensão",
      description: "Aparelho de alta performance anatômica, desenhado especificamente para extensão da coluna, flexibilidade de membros e estabilidade pélvica.",
      benefits: ["Abertura torácica", "Alívio de dores nas costas", "Consciência corporal"]
    },
    {
      id: "step-barrel",
      name: "Step Barrel & Chair",
      highlight: "Equilíbrio & Vitalidade",
      description: "Equipamentos focados no fortalecimento unilateral, estabilidade dos membros inferiores e trabalho dinâmico do abdômen.",
      benefits: ["Correção de assimetrias", "Estabilidade do quadril", "Resistência muscular"]
    }
  ] as ApparatusItem[],
  gallery: [
    {
      src: "./assets/studio/ladder_barrel_pike.jpg",
      alt: "Aluna em execução de extensão vertical no Ladder Barrel com a marca Twist Pilates na parede",
      caption: "Precisão postural no Ladder Barrel Kauffer",
      aspect: "portrait",
      tag: "Ladder Barrel"
    },
    {
      src: "./assets/studio/studio_wall_quote.jpg",
      alt: "Mural no estúdio Twist Pilates com citação histórica de Joseph Pilates e aparelhos ao fundo",
      caption: "Espaço pensado para o seu bem-estar",
      aspect: "landscape",
      tag: "O Estúdio"
    },
    {
      src: "./assets/studio/reformer_lunge.jpg",
      alt: "Exercício de flexibilidade no Reformer com reflexo da marca no espelho",
      caption: "Alongamento assistido no Reformer",
      aspect: "portrait",
      tag: "Reformer"
    },
    {
      src: "./assets/studio/cadillac_inversion.jpg",
      alt: "Exercício de suspensão invertida no Cadillac com suporte seguro",
      caption: "Descompressão vertebral no Cadillac",
      aspect: "portrait",
      tag: "Cadillac"
    },
    {
      src: "./assets/studio/reformer_full_extension.jpg",
      alt: "Extensão corporal completa no Reformer em madeira maciça",
      caption: "Controle e respiração no Reformer",
      aspect: "portrait",
      tag: "Reformer"
    },
    {
      src: "./assets/studio/studio_space_overview.jpg",
      alt: "Visão ampla do espaço de treino com espaldar sueco, fitballs e plantas",
      caption: "Iluminação natural e ambiente acolhedor",
      aspect: "portrait",
      tag: "Ambiente"
    }
  ] as GalleryImage[],
  reviews: [
    {
      id: "1",
      name: "Leonardo Merlin",
      rating: 5,
      date: "Há 6 meses",
      comment: "Estúdio impecável, com aparelhos de primeira linha e acompanhamento dedicado. A evolução nos treinos é nítida!",
      verified: true
    },
    {
      id: "2",
      name: "Vilma Nabhan",
      rating: 5,
      date: "Há 2 anos",
      comment: "Ambiente maravilhoso, acolhedor e com profissionais atenciosas. O pilates aqui transformou minha postura e saúde.",
      verified: true
    },
    {
      id: "3",
      name: "Andre Muriano",
      rating: 5,
      date: "Há 7 meses",
      comment: "Excelente espaço no Carandá Bosque. Aparelhos novos, ambiente super limpo e atendimento de alto nível.",
      verified: true
    },
    {
      id: "4",
      name: "Donizetti Pires da Silva",
      rating: 5,
      date: "Há 2 anos",
      comment: "Nota 10! Aulas muito bem orientadas com todo o cuidado com a coluna e articulações.",
      verified: true
    },
    {
      id: "5",
      name: "Antonio",
      rating: 5,
      date: "Há 2 anos",
      comment: "Muito satisfeito com as aulas e a qualidade das instalações. Recomendo a todos!",
      verified: true
    }
  ] as Review[],
  faqs: [
    {
      question: "Como funciona a aula experimental no Twist Pilates?",
      answer: "A aula experimental é a oportunidade de conhecer nosso espaço na Rua Vitório Zeola, vivenciar os aparelhos de madeira nobre e passar por uma avaliação inicial para alinharmos seus objetivos e necessidades físicas."
    },
    {
      question: "Nunca fiz Pilates antes. Posso começar direto nos aparelhos?",
      answer: "Com certeza! Os aparelhos de Pilates (como Reformer e Cadillac) foram criados justamente para dar assistência e guiar o corpo. As molas podem tanto facilitar o movimento quanto desafiar a força, sendo ideais para iniciantes e alunos avançados."
    },
    {
      question: "Qual roupa devo usar para as aulas?",
      answer: "Recomendamos roupas confortáveis que permitam boa mobilidade (como calça legging, bermuda ciclista e camiseta confortável) e meias antiderrapantes para maior aderência aos aparelhos."
    },
    {
      question: "Onde o estúdio fica localizado e possui facilidade de estacionamento?",
      answer: "Estamos localizados na Rua Vitório Zeola, nº 810, Sala 03, no coração do Carandá Bosque, em Campo Grande/MS. A região é de fácil acesso, tranquila e com facilidade para estacionar nas imediações."
    },
    {
      question: "Como agendo meu horário ou tiro dúvidas?",
      answer: "O canal mais rápido é o nosso WhatsApp oficial (67) 99920-2600. Basta nos enviar uma mensagem e passaremos todos os horários disponíveis que melhor se adaptem à sua rotina."
    }
  ] as FAQItem[]
};
