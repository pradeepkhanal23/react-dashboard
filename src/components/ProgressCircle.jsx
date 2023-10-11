/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "100" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(white 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #05959c   ${angle}deg 360deg),
           #7e6cca`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
export default ProgressCircle;
