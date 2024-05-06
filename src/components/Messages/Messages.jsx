import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import View from "../Modals/View/View";
import Notes from "../Notes/Notes";
export default function Messages() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div onClick={() => setOpen(false)}>
      <div className="fixed top-0 right-0 h-full w-[300px] flex flex-col bg-[#ffff] z-50 p-4 pt-4">
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            display: "flex",
            alignItems: "start",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="NOTES" value="1" />
                <Tab label="ALERTS" value="2" />
                <Tab label="CHAT" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Notes />
            </TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"></TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
