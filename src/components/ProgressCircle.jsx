/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "80" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(white 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #614BC3  ${angle}deg 360deg),
           #EE9322`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
export default ProgressCircle;
