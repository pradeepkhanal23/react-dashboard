import {
  Box,
  Button,
  IconButton,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Title from "../../components/Title";
import LineChart from "../../components/LineChart";
import GeoChart from "../../components/GeoChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mediumScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const customShadow =
    " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;";

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display={mediumScreen ? "flex" : "block"}
        flexDirection={mediumScreen ? "row" : "column"}
        justifyContent={mediumScreen ? "space-between" : "start"}
        alignItems={mediumScreen ? "center" : "start"}
        m="10px 0"
      >
        <Title title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}

      {/* First Grid Layout */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* First Row */}
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="10rem"
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
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="10rem"
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
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="10rem"
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
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="10rem"
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
        </Grid>
      </Grid>

      {/* Second Grid Container */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Box
            backgroundColor={colors.primary[400]}
            sx={{
              boxShadow: customShadow,
            }}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                  pt={2}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h5"
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
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                backgroundColor={colors.primary[400]}
                p="30px"
                sx={{
                  boxShadow: customShadow,
                }}
                margin="20px 0px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ marginBottom: "15px" }}
                >
                  Geography Based Traffic
                </Typography>
                <Box height="200px">
                  <GeoChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                backgroundColor={colors.primary[400]}
                p="30px"
                sx={{
                  boxShadow: customShadow,
                }}
                margin="20px 0px"
                height="18.5rem"
              >
                <Typography variant="h5" fontWeight="600">
                  Campaign
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
                >
                  <ProgressCircle size="125" />
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{ mt: "10px" }}
                  >
                    $48,352 revenue generated
                  </Typography>
                  <Typography>
                    Includes extra misc expenditures and costs
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                backgroundColor={colors.primary[400]}
                p="30px"
                sx={{
                  boxShadow: customShadow,
                }}
                // margin="20px 0px"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  sx={{ padding: "30px 30px 0 30px" }}
                >
                  Sales Quantity
                </Typography>
                <Box height="250px" mt="-20px">
                  <BarChart isDashboard={true} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            backgroundColor={colors.primary[400]}
            overflow="auto"
            sx={{
              boxShadow: customShadow,
            }}
            mt={3}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
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
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}s
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
