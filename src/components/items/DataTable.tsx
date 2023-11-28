import React from "react";
import { useTable, useSortBy } from "react-table";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

interface TableProps {
  data: any[];
  columns: any[];
}

const DataTable: React.FC<TableProps> = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  return (
    <div className="w-full overflow-x-auto mt-6">
      <table
        {...getTableProps()}
        className="w-full bg-[#0f172a] rounded-xl text-white font-normal"
      >
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table-row ">
              {headerGroup.headers.map((column: any, colIndex: number) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="table-header text-left p-3 pl-4"
                >
                  <div
                    className={`${
                      colIndex === headerGroup.headers.length - 1
                        ? "flex items-center justify-center"
                        : "flex items-center justify-between"
                    }`}
                  >
                    <span>{column.render("Header")}</span>
                    {colIndex !== headerGroup.headers.length - 1 && (
                      <div className="block w-6">
                        <ArrowDropUpIcon
                          className={
                            !column.isSortedDesc ? "opacity-100" : "opacity-50"
                          }
                        />
                        <ArrowDropDownIcon
                          className={
                            column.isSortedDesc ? "opacity-100" : "opacity-50"
                          }
                        />
                      </div>
                    )}
                  </div>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table-body">
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-row text-left ">
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className="table-cell p-3 pl-4 border-t border-[#304465]"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
