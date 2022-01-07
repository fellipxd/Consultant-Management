import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Jobs from "./Jobs";
import CandidatesTable from "./CandidatesTable";
import InterviewTable from "./InterviewTable";

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

export default function Recruitments({ handleClick }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-flexContainer": {
              overflowX: "auto",
            },
          }}
        >
          <Tab label="Openings" {...a11yProps(0)} />
          <Tab label="Candidates" {...a11yProps(1)} />
          <Tab label="Interview" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Jobs handleClick={handleClick} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CandidatesTable/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InterviewTable/>
      </TabPanel>
    </Box>
  );
}
