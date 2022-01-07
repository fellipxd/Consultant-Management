import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProjectsTable from "./ProjectTable/ProjectsTable";
import TaskTable from "./TaskTable/TaskTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InstitutionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ marginTop: "50px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-flexContainer": {
              overflowX: "auto",
            },
          }}
        >
          <Tab label="Personal Info" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Tasks" {...a11yProps(2)} />
          <Tab label="Jobs" {...a11yProps(3)} />
          <Tab label="Invoice" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PersonalInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectsTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TaskTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* <JobsTable /> */}
        <h1 className="text-center">COMING SOON!</h1>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1 className="text-center">COMING SOON!</h1>
      </TabPanel>
    </Box>
  );
}
