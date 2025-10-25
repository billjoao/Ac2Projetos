const API_URL = "http://localhost:8080/api";

export async function getProjects() {
  const res = await fetch(`${API_URL}/projetos`);
  return res.json();
}

export async function createProject(projeto) {
  const res = await fetch(`${API_URL}/projetos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(projeto),
  });
  return res.json();
}
