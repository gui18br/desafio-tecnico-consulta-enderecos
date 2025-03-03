import Endereco from "../endereco/Endereco";

interface EnderecoResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface EnderecosSalvosProps {
  enderecosSalvos: EnderecoResponse[];
}

function EnderecosSalvos(props: EnderecosSalvosProps) {
  return (
    <div className="flex flex-col gap-2 border-t-1 pt-10 sm:pt-0 sm:border-t-0 sm:border-l-1 sm:pl-10 ">
      <h3 className="font-bold">Enderecos Salvos</h3>
      <div className="flex flex-col gap-2 h-96 overflow-y-scroll">
        {props.enderecosSalvos.map((endereco) => {
          return (
            <ul className="pr-2">
              <Endereco
                bairro={endereco.bairro}
                cep={endereco.cep}
                complemento={endereco.complemento}
                localidade={endereco.localidade}
                logradouro={endereco.logradouro}
                uf={endereco.uf}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default EnderecosSalvos;
