import TableActions from "./TableActions";

export const data = [
  {
    id: 1,
    name: "John Doe",
    created_by: "john.doe@example.com",
    created_at: "2023-06-15",
  },
  {
    id: 2,
    name: "Jane Doe",
    created_by: "jane.doe@example.com",
    status: "inactive",
    created_at: "2023-06-14",
  },
  {
    id: 3,
    name: "Alice Johnson",
    created_by: "alice.johnson@example.com",
    created_at: "2023-06-12",
  },
  {
    id: 4,
    name: "Bob Smith",
    created_by: "bob.smith@example.com",
    created_at: "2023-06-10",
  },
  {
    id: 5,
    name: "Eva Martinez",
    created_by: "eva.martinez@example.com",
    created_at: "2023-06-09",
  },
  {
    id: 6,
    name: "Michael Brown",
    created_by: "michael.brown@example.com",
    created_at: "2023-06-07",
  },
  {
    id: 7,
    name: "Sophie White",
    created_by: "sophie.white@example.com",
    created_at: "2023-06-05",
  },
  {
    id: 8,
    name: "David Lee",
    created_by: "david.lee@example.com",
    created_at: "2023-06-03",
  },
  {
    id: 9,
    name: "Emily Davis",
    created_by: "emily.davis@example.com",
    created_at: "2023-06-01",
  },
  {
    id: 10,
    name: "Richard Taylor",
    created_by: "richard.taylor@example.com",
    created_at: "2023-05-30",
  },
  {
    id: 11,
    name: "Olivia Hernandez",
    created_by: "olivia.hernandez@example.com",
    created_at: "2023-05-28",
  },
  {
    id: 12,
    name: "Daniel Wilson",
    created_by: "daniel.wilson@example.com",
    created_at: "2023-05-26",
  },
];

export const columnData = [
  {
    id: "id",
    Header: "ID",
    accessor: "id",
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
      return <span className="">{value}</span>;
    },
    width: 200,
  },
  {
    id: "action",
    Header: "Action",
    Cell: ({ row }: any) => {
      return (
        <div className="text-center">
          <TableActions row={row} />
        </div>
      );
    },
    width: 100,
  },
];
