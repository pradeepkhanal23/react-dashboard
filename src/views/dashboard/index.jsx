import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import ProgressCircle from "../../components/ProgressCircle";
import Title from "../../components/Title";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../../theme";

const customShadow =
  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "16px",
              fontWeight: "bold",
              padding: "5px 10px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="153px"
        // gridTemplateRows="repeat(4, 154px)"
        gap="20px"
      >
        {/* ROW 1 */}

        {/* Email box */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "10px 5px",
            boxShadow: customShadow,
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Sales Obtained */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "10px 5px",
            boxShadow: customShadow,
          }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* New Clients */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "10px 5px",
            boxShadow: customShadow,
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Traffic Received */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "10px 5px",
            boxShadow: customShadow,
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        {/* Revenue Generated */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          boxShadow={customShadow}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box mb={4}>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Line Chart */}
          <Box height="250px" m="-20px 0 0 0">
            <LineChart />
          </Box>
        </Box>

        {/* Recent Transaction */}

        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          gridRow="span 2"
          overflow="auto"
          boxShadow={customShadow}
          padding="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="15px"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
          >
            <Typography
              variant="h6"
              fontWeight="600"
              textTransform="uppercase"
              color={colors.grey[100]}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  color={colors.greenAccent[500]}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[700]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="10px 30px"
          backgroundColor={colors.primary[400]}
          boxShadow={customShadow}
          mt={5}
        >
          <Typography variant="h6" fontWeight="600" textTransform="uppercase">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="20px"
          >
            <ProgressCircle size="100" />
            <Typography
              variant="h5"
              sx={{ mt: "20px" }}
              color={colors.greenAccent[500]}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="10px 30px"
          backgroundColor={colors.primary[400]}
          boxShadow={customShadow}
          mt={5}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            textTransform="uppercase"
            mb={4}
          >
            Sales Quantity
          </Typography>
          <Box height="200px" mt="-20px">
            <BarChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="10px 30px"
          backgroundColor={colors.primary[400]}
          boxShadow={customShadow}
          mt={5}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            textTransform="uppercase"
            mb={2}
          >
            Geography Based Traffic
          </Typography>
          <Box height="210px">
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
