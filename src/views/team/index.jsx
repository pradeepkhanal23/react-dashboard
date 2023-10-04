import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Title from "../../components/Title";

const Team = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <>
            <Box
              width="60%"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={access === "admin" ? "#028a0f" : "#3cb043"}
              color="white"
              textTransform="uppercase"
              borderRadius="5px"
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography
                sx={{
                  ml: 1,
                }}
              >
                {access}
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];
  return (
    <Box width="95%" m="5px auto">
      <Title title="Team" subtitle="Managing the team members" />
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: ".5px solid black",
            marginTop: "5px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            border: "1px solid black",
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
            color: "none",
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
export default Team;
