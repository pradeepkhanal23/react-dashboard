import { Box } from "@mui/material";
import Title from "../../components/Title";
import GeoChart from "../../components/GeoChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Title title="Geo Chart" subtitle="Simple Geo Chart" />
      <Box height="75vh">
        <GeoChart />
      </Box>
    </Box>
  );
};
export default Geo;
