import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Title from "../../components/title";

const Bar = () => {
  return (
    <Box m="20px">
      <Title title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};
export default Bar;
