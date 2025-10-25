import { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    const data = await getProjects();
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Gerenciamento de Projetos</h1>
      <ProjectForm onProjectCreated={fetchProjects} />
      <ProjectList projects={projects} />
    </div>
  );
}
