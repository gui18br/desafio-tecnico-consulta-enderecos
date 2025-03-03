import { useEffect, useState } from "react";
import EnderecosSalvos from "../enderecosSalvos/EnderecosSalvos";
import Forms from "../forms/Forms";

interface EnderecoResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

function WhiteContainer() {
  const [enderecosSalvos, setEnderecosSalvos] = useState<EnderecoResponse[]>(
    []
  );

  useEffect(() => {
    const enederecosAramazenados = JSON.parse(
      localStorage.getItem("enderecosSalvos") ?? "[]"
    );
    setEnderecosSalvos(enederecosAramazenados);
  }, []);

  return (
    <div className="bg-white p-10 rounded-sm border-1 border-black sm:flex gap-10">
      <Forms
        enderecos={enderecosSalvos}
        setEnderecosSalvos={setEnderecosSalvos}
      />
      <EnderecosSalvos enderecosSalvos={enderecosSalvos} />
    </div>
  );
}

export default WhiteContainer;
