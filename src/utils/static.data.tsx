export const data = [
  {
    id: 1,
    name: "John",
    created_by: "dfkhsdj@.gmail.com",
    created_at: "6/08/22",
  },
  {
    id: 1,
    name: "Doe",
    created_by: "ere@.gmail.com",
    status: "inactive",
    created_at: "2/02/22",
  },
  {
    id: 1,
    name: "Marry",
    created_by: "marry@.gmail.com",
    created_at: "24/02/22",
  },
  {
    id: 1,
    name: "Leo",
    created_by: "leo@.gmail.com",
    created_at: "24/02/22",
  },
  {
    id: 1,
    name: "John",
    created_by: "dfkhsdj@.gmail.com",
    created_at: "6/08/22",
  },
  {
    id: 1,
    name: "Doe",
    created_by: "ere@.gmail.com",
    created_at: "2/02/22",
  },
  {
    id: 1,
    name: "Marry",
    created_by: "marry@.gmail.com",
    created_at: "24/02/22",
  },
  {
    id: 1,
    name: "Leo",
    created_by: "leo@.gmail.com",
    created_at: "24/02/22",
  },
  {
    id: 1,
    name: "John",
    created_by: "dfkhsdj@.gmail.com",
    created_at: "6/08/22",
  },
  {
    id: 1,
    name: "Doe",
    created_by: "ere@.gmail.com",
    created_at: "2/02/22",
  },
  {
    id: 1,
    name: "Marry",
    created_by: "marry@.gmail.com",
    created_at: "24/02/22",
  },
  {
    id: 1,
    name: "Leo",
    created_by: "leo@.gmail.com",
    created_at: "24/02/22",
  },
  {
    id: 1,
    name: "John",
    created_by: "dfkhsdj@.gmail.com",
    created_at: "6/08/22",
  },
  {
    id: 1,
    name: "Doe",
    created_by: "ere@.gmail.com",
    created_at: "2/02/22",
  },
  {
    id: 1,
    name: "Marry",
    created_by: "marry@.gmail.com",
    created_at: "24/02/22",
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
      return <span className="">{}</span>;
    },
    width: 100,
  },
];
