import { useState } from "react";
import Buttons from "../buttons/Buttons";
import InputLabel from "../inputLabel/InputLabel";
import Title from "../title/Title";
import { searchCEP } from "../../services/api";
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

function Forms() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSearchCEP = async () => {
    try {
      const cep = (document.getElementById("cep") as HTMLInputElement).value;
      const result = await searchCEP(cep);
      setEndereco(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center text-center w-100%">
      <Title />
      <div>
        <InputLabel
          id="cep"
          name="cep"
          value={formValues.cep}
          onChange={handleInputChange}
        />
        <Buttons onClickSearchButton={handleSearchCEP} />
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
