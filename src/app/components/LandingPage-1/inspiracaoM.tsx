"use client";
import React from "react";
import FormSection from "../form/form";
import { FaFacebookF, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import {
  Banner,
  DadosUnidade,
  Empresa,
  Unidade,
  Video,
} from "@/app/types/types";
import Image from "next/image";
import LogoBranca from "@/app/assets/landingPageImages/LOGO_EDUCAÇÃO ADV_HORIZONTAL.png";
import Carousel from "../carrousel/carousel";
import Link from "next/link";
import ImageDif from "@/app/assets/landingPageImages/image.png";
interface LandingPageProps {
  empresa: Empresa;
  unidade: Unidade;
  banners: Banner[];
  diferenciais: string;
  video: Video;
  dadosUnidade: DadosUnidade | DadosUnidade[];
}

const LandingPage1: React.FC<LandingPageProps> = ({
  empresa,
  unidade,
  banners,
  diferenciais,
  video,
  dadosUnidade,
}) => {
  const bannerUrls = banners.map((banner) => banner.url);

  return (
    <div className="flex flex-col w-full">
      <header className="bg-white p-0">
        <div className="container flex  items-center  justify-start pl-4">
          <Image src={LogoBranca} height={100} width={150} alt="Logo" />
        </div>
      </header>

      {/* FORMULARIO */}
      <section>
        <div
          className="w-full flex justify-center items-center py-12 px-4 md:justify-end md:py-24 md:px-24"
          style={{
            backgroundImage: `url('https://abc.advbrasil.com.br/img/bg_footer.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <FormSection />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="flex flex-col gap-10 px-4 bg-yellow-50 justify-center items-center w-full min-h-[50vh] lg:flex-row md:px-40 md:min-h-[80vh] py-10 md:py-40">
        <Image
          src={ImageDif}
          alt="Presente em 165 países image"
          className="border-4 border-sky-950 rounded-lg mb-4 md:mb-0"
          height={500}
          width={500}
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold text-yellow-500">
            Descubra a força de uma educação global
          </h2>
          <p className="text-sm md:text-lg pt-8">{diferenciais}</p>
        </div>
      </section>

      {/* CARROSEL */}
      <section className="relative w-full h-[50vh] md:h-[75vh]">
        <Carousel urls={bannerUrls} />
      </section>

      {/* VIDEO */}
      <section className="flex flex-col w-full min-h-[50vh] md:min-h-[75vh] py-10 md:py-28 items-center justify-center bg-sky-950">
        <div className="container w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {video.titulo}
          </h2>
          <p className="text-md md:text-lg text-gray-50 mb-6 max-w-2xl">
            {video.descricao}
          </p>
          <div
            className="w-[100%] h-0 relative"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-[100%] rounded-lg shadow-lg"
              src={video.videoUrl}
              title={video.titulo}
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* UNIDADE */}
      <section className="flex p-2 flex-col w-full min-h-[50vh] md:min-h-[75vh] py-10 md:py-40 items-center justify-center bg-yellow-50">
        <div className="container w-full h-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold">{empresa.name}</h2>
          <h2 className="text-xl md:text-2xl">{unidade.name}</h2>
          <div className="mt-8 w-full h-full gap-4 md:gap-8">
            {Array.isArray(dadosUnidade) ? (
              dadosUnidade.map((unidade, index) => (
                <div
                  key={index}
                  className="flex w-full h-full flex-col md:flex-row items-start"
                >
                  <div className="w-full md:w-1/2">
                    <Carousel urls={unidade.fotos} />
                  </div>
                  <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0 text-left">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {unidade.descricao}
                    </h3>
                    <p className="mt-2 md:mt-4">{unidade.endereco}</p>
                    <p className="mt-1 md:mt-2">{unidade.telefone}</p>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">
                        Siga-nos nas redes
                      </h3>
                      <div className="flex space-x-4 justify-center md:justify-start">
                        <Link
                          href="#"
                          className="p-2 bg-sky-950 rounded-full text-white"
                        >
                          <FaFacebookF className="w-8 h-8" />
                        </Link>
                        <Link
                          href="#"
                          className="p-2 bg-sky-950 rounded-full text-white"
                        >
                          <FaInstagram className="w-8 h-8" />
                        </Link>
                        <Link
                          href="#"
                          className="p-2 bg-sky-950 rounded-full text-white"
                        >
                          <FaYoutube className="w-8 h-8" />
                        </Link>
                        <Link
                          href="#"
                          className="p-2 bg-sky-950 rounded-full text-white"
                        >
                          <FaGlobe className="w-8 h-8" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full h-full flex-col md:flex-row items-start">
                <div className="w-full h-80 md:w-1/2">
                  <Carousel urls={dadosUnidade.fotos} />
                </div>
                <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0 text-left">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {dadosUnidade.descricao}
                  </h3>
                  <p className="mt-2 md:mt-4">{dadosUnidade.endereco}</p>
                  <p className="mt-1 md:mt-2">{dadosUnidade.telefone}</p>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Siga-nos nas redes
                    </h3>
                    <div className="flex space-x-4 justify-center md:justify-start">
                      <Link
                        href="#"
                        className="p-2 bg-sky-950 rounded-full text-white"
                      >
                        <FaFacebookF className="w-8 h-8" />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 bg-sky-950 rounded-full text-white"
                      >
                        <FaInstagram className="w-8 h-8" />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 bg-sky-950 rounded-full text-white"
                      >
                        <FaYoutube className="w-8 h-8" />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 bg-sky-950 rounded-full text-white"
                      >
                        <FaGlobe className="w-8 h-8" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-sky-950 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
            Desenvolvido por{" "}
            <Link
              className="text-yellow-500"
              href={"https://agenciavela.com.br/"}
            >
              Agência Vela
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage1;
