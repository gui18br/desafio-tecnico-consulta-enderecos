interface EnderecoProps {
  localidade: string;
  cep: string;
  bairro: string;
  logradouro: string;
  complemento: string;
  uf: string;
}

function Endereco(props: EnderecoProps) {
  return (
    <div className="flex gap-3 border-2 border-green-900 p-2 rounded-md bg-[#242424] text-white">
      <div>
        <p>{props.localidade ?? ""}</p>
        <p>{props.cep ?? ""}</p>
        <p>{props.bairro ?? ""}</p>
        <p>{props.logradouro ?? ""}</p>
        <p>{props.complemento ?? ""}</p>
      </div>
      <p> - </p>
      <p>{props.uf ?? ""}</p>
    </div>
  );
}

export default Endereco;
