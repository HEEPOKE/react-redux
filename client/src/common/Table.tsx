import { Table } from "react-bootstrap";
import TableInterface from "../interface/TableInterface";

export default function TableCommon({
  variant,
  className,
  columns,
  row,
}: TableInterface) {
  return (
    <Table
      striped
      bordered
      hover
      responsive
      variant={variant}
      className={className}
    >
      <thead>
        <tr className="text-center">
          {columns.map((item, i) => (
            <th key={i}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </Table>
  );
}
