import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import PersonalInfo from "./PersonalInfo";
// import ProjectsTable from "./ProjectTable/ProjectsTable";
// import TaskTable from "./TaskTable/TaskTable";
// import JobsTable from "./JobsTable/JobsTable";

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
      <Box sx={{ marginTop: "50px"}}>
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
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Edit" {...a11yProps(1)} />
          <Tab label="Attach Files" {...a11yProps(2)} />
          <Tab label="Notes" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     da
      </TabPanel>
      <TabPanel value={value} index={1}>
        d
      </TabPanel>
      <TabPanel value={value} index={2}>
       a
      </TabPanel>
      <TabPanel value={value} index={3}>
      a
      </TabPanel>
    </Box>
  );
}
