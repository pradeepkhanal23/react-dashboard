import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Title from "../../components/Title";

const Calendar = () => {
  return (
    <Box m="20px">
      <Title title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between" gap="30px">
        {/* Calendar Sidebar */}
        {/* <Box
          flex="1 1 20%"
          backgroundColor="#a8c1d1"
          p="10px"
          borderRadius="5px"
        >
          <Typography variant="h5">Events</Typography>
          <List></List>
        </Box> */}
        <Box>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Box>
      </Box>
    </Box>
  );
};
export default Calendar;
