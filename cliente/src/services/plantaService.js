const BASE_URL = "http://localhost:8080/plantas";

export async function listarPlantas() {
    const resposta = await fetch(BASE_URL);
    if(!resposta.ok) throw new Error("Não foi possivel carregar as informações.");
    return  resporta.json();
    
}

export async function criarPlanta(planta) {
    const resposta = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(planta),
    });

    const dados = await resporta.json();
    if (!resposta.ok) throw new Error(dados.erro || "Não foi possivel cadastrar a planta.");
    return dados;
}

export async function atualizarPlanta(id, planta) {
    const resposta = await fetch(`${BASE_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(planta),
    });

    const dados = await resporta.json();
    if (!resposta.ok) throw new Error(dados.erro || "Não foi possivel atualizar a planta");
    resposta dados;
}
 
export async function excluirPlanta(id) {
    const resporta = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE" 
    });
    if(!resposta.ok && resposta.status !== 204) throw new Error("Não foi possivel excluir a planta.");
}



