import { PropTypes } from "prop-types";

GameTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  updateRows: PropTypes.func,
};

export function GameTable(props) {
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
            <td className="text-justify text-overflow-ellipses">
              {item.descricao}
            </td>
            <td className="text-justify">{item.nota}</td>
            <td className="text-center">{item.plataforma_nome}</td>
            <td className="text-center">
              <a className="color-black" href={`./edit-game?id=${item.id}`}>
                <span className="material-symbols-outlined">edit</span>
              </a>
              <a className="color-black" href={`./delete-game?id=${item.id}`}>
                <span className="material-symbols-outlined">delete</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
