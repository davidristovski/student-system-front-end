import '../styles/tableStyles.css';

const Table = ({ rows, columns, onRemoveRow }) => {
  return (
    <table className="table-container">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.columnKey}>{column.columnName}</th>
          ))}
          {onRemoveRow ? <th>Delete</th> : <></>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.uuid}>
            {columns.map((column) => (
              <td key={`${row.uuid}-${column.columnKey}`}>
                {row[column.columnKey]}
              </td>
            ))}
            {onRemoveRow ? (
            <td className="centered-td">
              <span
                className="delete-icon"
                onClick={() => onRemoveRow(row.uuid)}
              >
                &#10060;
              </span>
            </td>
            ) : (
              <></>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;