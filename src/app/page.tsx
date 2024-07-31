import LandingPage1 from "./components/LandingPage-1/inspiracaoM";
import { landingPageDadosFake } from "./dataFAke/data";

const DadosFake = landingPageDadosFake;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-between">
      <LandingPage1
        banners={DadosFake.banners}
        dadosUnidade={DadosFake.dadosUnidade}
        diferenciais={DadosFake.diferenciais}
        empresa={DadosFake.empresa}
        unidade={DadosFake.unidade}
        video={DadosFake.video}
      />
    </main>
  );
}
