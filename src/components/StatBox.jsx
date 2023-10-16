import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

// eslint-disable-next-line react/prop-types
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h5" fontWeight="bold" color="green">
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="2px"
        color="#504099"
      >
        <Typography>{subtitle}</Typography>
        <Typography fontStyle="italic">{increase}</Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
