import { LandingPage } from "../types/types";

export const landingPageDadosFake: LandingPage = {
  empresa: {
    id: "1",
    name: "Colégio Adventista",
    // Outros campos opcionais
  },
  unidade: {
    id: "1",
    name: "Unidade Central",
    father_id: "1",
    // Outros campos opcionais
  },
  banners: [
    { url: "https://abc.advbrasil.com.br/img/bg-header-3.png" },
    { url: "https://abc.advbrasil.com.br/img/bg-header-1.png" },
    { url: "https://abc.advbrasil.com.br/img/bg-header-2.png" },
  ],
  diferenciais:
    "Em nossa jornada de excelência educacional, priorizamos entender como cada aluno aprende em cada fase do desenvolvimento. Com mais de 150 anos de experiência no mundo, adquirimos a expertise para ensinar por meio de uma abordagem inovadora e revolucionária: a metodologia Cognitivo-Linguística. Essa metodologia promove atividades significativas que impulsionam o conhecimento de forma personalizada e efetiva. Mais de 2 milhões de alunos ao redor do mundo já ingressaram em sua jornada transformadora na rede de Educação Adventista.",
  video: {
    titulo: "Conheça o Colégio Adventista",
    descricao: "Um vídeo sobre o colégio e suas instalações.",
    videoUrl: "https://abc.advbrasil.com.br/video.mp4",
  },
  dadosUnidade: {
    fotos: [
      "https://lh3.googleusercontent.com/p/AF1QipOgQwZEAH3dENdxbiexn3OdDRKPhOqLOFUDEs7Z=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOKLfxgeshU-jYLNw91sv9vAcgiiDGYtQcjwN-O=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipOG9TC3P0VPXtsBAQR5ghHgo5q823wZ7q8YBTmc=s680-w680-h510",
    ],
    descricao: "Unidade moderna com infraestrutura completa.",
    endereco: "Rua Exemplo, 123, Cidade, Estado",
    telefone: "(11) 1234-5678",
  },
};
