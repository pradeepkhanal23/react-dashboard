/* eslint-disable react/prop-types */
import { Typography, Box } from "@mui/material";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <Box mb="30px">
        <Typography variant="h4" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
          {title}
        </Typography>
        <Typography variant="h6">{subtitle}</Typography>
      </Box>
    </>
  );
};
export default Title;
