const BASE_URL = "http://localhost:8080/plantas";

export async function listarPlantas() {
  const resposta = await fetch(BASE_URL);
  if (!resposta.ok) throw new Error("Não foi possível carregar as plantas.");
  return resposta.json();
}

export async function criarPlanta(planta) {
  const resposta = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(planta),
  });
  const dados = await resposta.json();
  if (!resposta.ok) throw new Error(dados.erro || "Não foi possível cadastrar a planta.");
  return dados;
}

export async function atualizarPlanta(id, planta) {
  const resposta = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(planta),
  });
  const dados = await resposta.json();
  if (!resposta.ok) throw new Error(dados.erro || "Não foi possível atualizar a planta.");
  return dados;
}

export async function excluirPlanta(id) {
  const resposta = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!resposta.ok && resposta.status !== 204) throw new Error("Não foi possível excluir a planta.");
}