export interface Empresa {
  id: string;
  name: string;
  [key: string]: any;
}

export interface Unidade {
  id: string;
  name: string;
  father_id: string;
  [key: string]: any;
}

export interface Banner {
  url: string;
}

export interface Video {
  titulo: string;
  descricao: string;
  videoUrl: string;
}

export interface DadosUnidade {
  fotos: string[];
  descricao: string;
  endereco: string;
  telefone: string;
}

export interface LandingPage {
  empresa: Empresa;
  unidade: Unidade;
  banners: Banner[];
  diferenciais: string;
  video: Video;
  dadosUnidade: DadosUnidade | DadosUnidade[];
}
