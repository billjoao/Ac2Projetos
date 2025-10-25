export default function ProjectList({ projects }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">Projetos Cadastrados</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Setor</th>
            <th className="p-2 border">Descrição</th>
            <th className="p-2 border">Data Início</th>
            <th className="p-2 border">Data Fim</th>
            <th className="p-2 border">Funcionário</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-2 border">{p.setor}</td>
              <td className="p-2 border">{p.descricao}</td>
              <td className="p-2 border">{p.dataInicio}</td>
              <td className="p-2 border">{p.dataFim}</td>
              <td className="p-2 border">{p.funcionario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
