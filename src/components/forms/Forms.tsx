import { Dispatch, SetStateAction, useState } from "react";
import { searchCEP } from "../../services/api";
import Buttons from "../buttons/Buttons";
import InputLabel from "../inputLabel/InputLabel";
import Title from "../title/Title";
import InformationContainer from "../informationContainer/InformationContainer";

interface FormValues {
  cep: string;
}

interface EnderecoResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface EnderecosSalvos {
  enderecos: EnderecoResponse[];
  setEnderecosSalvos: Dispatch<SetStateAction<EnderecoResponse[]>>;
}

function Forms(props: EnderecosSalvos) {
  const [formValues, setFormValues] = useState<FormValues>({
    cep: "",
  });

  const [endereco, setEndereco] = useState<EnderecoResponse>({
    bairro: "",
    cep: "",
    complemento: "",
    localidade: "",
    logradouro: "",
    uf: "",
  });

  const [enderecosPesquisados, setEnderecosPesquisados] = useState<
    EnderecoResponse[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCEPRegisterExists = (cep: string) => {
    return enderecosPesquisados.find((enderecoAtual: EnderecoResponse) => {
      return enderecoAtual.cep == cep;
    });
  };

  const handleSearchCEP = async () => {
    let cep = (document.getElementById("cep") as HTMLInputElement).value;
    try {
      const cepExists = handleCEPRegisterExists(cep);
      if (cepExists == undefined) {
        const result = await searchCEP(cep);
        setEndereco(result);
        setEnderecosPesquisados([...enderecosPesquisados, result]);
      } else {
        setEndereco(cepExists);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveEndereco = () => {
    if (endereco.cep != "") {
      props.setEnderecosSalvos([...props.enderecos, endereco]);
      let enderecosToSave = JSON.parse(
        localStorage.getItem("enderecosSalvos") || "[]"
      );

      enderecosToSave.push(endereco);

      localStorage.setItem("enderecosSalvos", JSON.stringify(enderecosToSave));
    }
  };

  return (
    <div className="flex flex-col justify-center text-center w-100% ">
      <Title />
      <div>
        <InputLabel
          id="cep"
          name="cep"
          value={formValues.cep}
          onChange={handleInputChange}
          onBlur={handleSearchCEP}
        />
        <Buttons
          onClickSearchButton={handleSearchCEP}
          onClickSaveButton={handleSaveEndereco}
        />
      </div>
      <div className="flex flex-col text-left gap-1 mt-7">
        <InformationContainer label="UF">{endereco.uf}</InformationContainer>
        <InformationContainer label="Cidade">
          {endereco.localidade}
        </InformationContainer>
        <InformationContainer label="Bairro">
          {endereco.bairro}
        </InformationContainer>
        <InformationContainer label="Logradouro">
          {endereco.logradouro}
        </InformationContainer>
        <InformationContainer label="Complemento">
          {endereco.complemento}
        </InformationContainer>
      </div>
    </div>
  );
}

export default Forms;
