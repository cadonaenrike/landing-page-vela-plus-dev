import React from "react";

const FormComponent: React.FC = () => {
  return (
    <div className="bg-white  text-sky-950  p-8 rounded-lg shadow-lg ">
      <h2 className="text-lg md:text-xl font-bold mb-4">
        Futuro de excelência para seu filho?
      </h2>
      <p className="mb-6 text-base">
        Preencha o formulário e aguarde nosso retorno
      </p>
      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="nome" className="block mb-2 text-base">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className="w-full p-2 border border-gray-300 rounded text-black text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="telefone" className="block mb-2 text-base">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            className="w-full p-2 border border-gray-300 rounded text-black text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-base">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded text-black text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="nomeAluno" className="block mb-2 text-base">
            Nome do Aluno
          </label>
          <input
            type="text"
            id="nomeAluno"
            className="w-full p-2 border border-gray-300 rounded text-black text-base"
            required
          />
        </div>
        <div>
          <label htmlFor="unidade" className="block mb-2 text-base">
            Selecione a unidade
          </label>
          <select
            id="unidade"
            className="w-full p-2 border border-gray-300 rounded text-black text-base"
            required
          >
            <option value="">Selecione a unidade</option>
            <option value="Unidade 1">Unidade 1</option>
            <option value="Unidade 2">Unidade 2</option>
            <option value="Unidade 3">Unidade 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="anoLetivo" className="block mb-2 text-base">
            Ano letivo pretendido?
          </label>
          <select
            id="anoLetivo"
            className="w-full p-2 border border-gray-300 rounded text-black text-base"
            required
          >
            <option value="">Selecione o ano letivo</option>
            <option value="1º ano">1º ano</option>
            <option value="2º ano">2º ano</option>
            <option value="3º ano">3º ano</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 text-base"
        >
          Enviar dados
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
