import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Title from "../../components/Title";

const Invoices = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color="#764abc">${params.row.cost}</Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box width="95%" m="5px auto">
      <Title title="Invoices" subtitle="List of Invoice balances" />
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "1px solid #e0e0e0",
            marginTop: "5px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#764abc ",
            color: "white",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "transparent",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "none ",
          },
          "& .MuiCheckbox-root": {
            color: "#764abc",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#764abc",
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};
export default Invoices;
