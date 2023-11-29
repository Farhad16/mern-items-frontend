import TableActions from "./TableActions";
import dayjs from "dayjs";

export const columnData = [
  {
    id: "_id",
    Header: "ID",
    accessor: "_id",
    Cell: ({ value }: any) => {
      return <div className="flex items-center text-left gap-3">{value}</div>;
    },
    width: 350,
  },
  {
    id: "name",
    Header: "Name",
    accessor: "name",
    Cell: ({ value }: any) => {
      return <div className="flex items-center text-left gap-3">{value}</div>;
    },
    width: 250,
  },
  {
    id: "created_by",
    Header: "Created By",
    accessor: "created_by",
    Cell: ({ value }: any) => {
      return <span className="">{value}</span>;
    },
    width: 200,
  },
  {
    id: "created_at",
    Header: "Created At",
    accessor: "created_at",
    Cell: ({ value }: any) => {
      const formattedDate = dayjs(value).format("ddd, D MMM YYYY [at] h:mm A");
      return <span className="">{formattedDate}</span>;
    },
    width: 200,
  },
  {
    id: "action",
    Header: "Action",
    Cell: ({ row }: any) => {
      return (
        <div className="flex items-start justify-center">
          <TableActions row={row} />
        </div>
      );
    },
    width: 100,
  },
];
