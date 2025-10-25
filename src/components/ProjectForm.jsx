import { useState } from "react";
import { createProject } from "../services/api";

export default function ProjectForm({ onProjectCreated }) {
  const [form, setForm] = useState({
    setor: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    funcionario: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(form);
    onProjectCreated();
    setForm({
      setor: "",
      descricao: "",
      dataInicio: "",
      dataFim: "",
      funcionario: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-semibold mb-4">Novo Projeto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="setor"
          placeholder="Nome do Setor"
          value={form.setor}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
        <input
          name="funcionario"
          placeholder="Nome do Funcionário"
          value={form.funcionario}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
        <input
          name="descricao"
          placeholder="Descrição do Projeto"
          value={form.descricao}
          onChange={handleChange}
          className="border rounded p-2 col-span-2"
          required
        />
        <input
          type="date"
          name="dataInicio"
          value={form.dataInicio}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
        <input
          type="date"
          name="dataFim"
          value={form.dataFim}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Salvar Projeto
      </button>
    </form>
  );
}
