import axios from "axios";

const apiURL = "https://viacep.com.br/ws";

interface EnderecoResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const searchCEP = async (cep: string): Promise<EnderecoResponse> => {
  try {
    const response = await axios.get<EnderecoResponse>(`${apiURL}/${cep}/json`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching CEP data");
  }
};
