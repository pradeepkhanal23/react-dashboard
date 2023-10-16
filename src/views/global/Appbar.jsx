import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Appbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        color="white"
        p={2}
      >
        {/* Search box */}
        <Box
          display="flex"
          borderRadius="3px"
          backgroundColor={colors.primary[400]}
        >
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              borderRadius: "5px",
              paddingLeft: "5px",
            }}
            placeholder="Search..."
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Icons */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
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
