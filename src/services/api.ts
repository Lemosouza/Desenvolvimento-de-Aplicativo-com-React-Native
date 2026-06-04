// base da nossa api
const API_URL = 'https://api-ocorrencia.muapps.com.br';

// slug de identificação aluno
export const SLUG_ALUNO = 'Amanda_Lemos';

// tipos de dados que irao ser enviados, tipo de dado
export type CriarOcorrenciaPayload = {
    titulo: string;
    descricao: string;
    local: string;
    slug: string;
};

// funcao para buscar  as nossas ocorrencias
export async function ListaOcorrenciasPorSlug(slug: string) {
    const resposta = await fetch(`${API_URL}/ocorrencias?slug=${slug}`);
    console.log(resposta);
    if(!resposta.ok){
        throw new Error('Erro ao buscar ocorrencias');
    }
    return await resposta.json();
}

export async function CriarOcorrencia(dados: CriarOcorrenciaPayload) {
    console.log("dados que estão vindo", dados);
  const resposta = await fetch(`${API_URL}/ocorrencias`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if(!resposta.ok){
    throw new Error('Erro ao criar ocorrencia');
  }
  return await resposta.json();
}