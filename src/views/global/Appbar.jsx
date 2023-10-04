import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Appbar = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#764abc"
        color="white"
        p={2}
      >
        {/* Search box */}
        <Box display="flex" borderRadius="3px" backgroundColor="white">
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              color: "black",
              borderRadius: "5px",
              paddingLeft: "5px",
            }}
            placeholder="Search..."
          />
          <IconButton type="button" sx={{ p: 1, color: "black " }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Icons */}
        <Box display="flex">
          <IconButton sx={{ p: 1, color: "white " }}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton sx={{ p: 1, color: "white " }}>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton sx={{ p: 1, color: "white " }}>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
export default Appbar;
