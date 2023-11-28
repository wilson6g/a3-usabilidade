import { PropTypes } from "prop-types";

ManagementTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

export function ManagementTable(props) {
  console.log(props);
  return (
    <table className="w-100 color-black align-self-center">
      <thead className="color-black">
        <tr>
          {props.columns.map((column, index) => (
            <th key={index} className="bg-primary color-white text-center w-25">
              {column.name}
            </th>
          ))}
          <th className="bg-primary color-white text-center w-20">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item, rowIndex) => (
          <tr key={rowIndex}>
            <td className="text-center">{item.nome}</td>
            <td className="text-justify">{item.descricao}</td>
            <td className="text-justify">{item.plataforma_nome}</td>
            <td className="text-center">
              <a
                className="color-primary"
                href={`./edit-game-${item.id}`}
              >
                Editar
              </a>
              <a className="color-primary" href="#">
                Excluir
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
