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
        className="w-full rounded-xl text-black font-normal"
      >
        <thead>
          {headerGroups.map((headerGroup: any, groupIndex: number) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="table-row"
              key={groupIndex}
            >
              {headerGroup.headers.map((column: any, colIndex: number) => (
                <th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps({
                      onClick: (e: React.MouseEvent) => {
                        // If it's the last column, prevent sorting
                        if (colIndex === headerGroup.headers.length - 1) {
                          e.stopPropagation();
                        }
                      },
                    })
                  )}
                  className="table-header text-left p-3 pl-4"
                  key={colIndex}
                >
                  <div className="flex justify-between items-center">
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
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table-body">
          {rows.map((row: any, rowIndex: number) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="table-row text-left"
                key={rowIndex}
              >
                {row.cells.map((cell: any, cellIndex: number) => (
                  <td
                    {...cell.getCellProps()}
                    className="table-cell p-3 pl-4 border-t border-[#304465]"
                    key={cellIndex}
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
