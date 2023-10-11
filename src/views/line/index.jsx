import { Box } from "@mui/material";
import Title from "../../components/Title";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Title title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;
