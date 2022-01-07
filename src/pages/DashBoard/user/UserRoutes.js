import React, { useState } from "react";
import DataCardDiv from "../../../components/DashboardComponents/DataCard/DataCardDiv";
import SuperAdminCharts from "../../../components/DashboardComponents/DashboardChartDivs/SuperAdminCharts";
import InstitutionDetails from "../../../components/InstitutionComponents/InstitutionDetails/InstitutionDetails";
import JobDetails from "../../../components/RecruitmentComponents/JobDetails";
import Application from "../../../components/RecruitmentComponents/ApplicationForm";
import JobDetailsTop from "../../../components/RecruitmentComponents/JobDetailsTop";
import Projects from "../../../components/ProjectComponents/Projects";
import ProjectDetails from "../../../components/ProjectComponents/ProjectDetails/ProjectDetails";
import TaskDetails from "../../../components/ProjectComponents/TaskDetails/TaskDetails";
import Profile from "../../../components/ProfileComponent/Profile";
import Jobs from "../../../components/RecruitmentComponents/Jobs";

export const UserRoutes = [
  "/dashboard",
  "/institution-info",
  "/recruitment",
  "/consultant-info",
  "/job-details",
  "/projects",
  "/project-info",
  "/task-info",
  "/profile",
];
export const Data = () => {
  return (
    <>
      <DataCardDiv />
      <SuperAdminCharts />
    </>
  );
};

export const InstituionInfo = ({ user }) => {
  return (
    <>
      <InstitutionDetails />
    </>
  );
};

export const Project = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <>
      <Projects handleClick={handleClick} />
    </>
  );
};

export const Recruitment = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <>
      <Jobs/>
    </>
  );
};

export const ProjectInfo = () => {
  return (
    <>
      <ProjectDetails />
    </>
  );
};
export const TaskInfo = () => {
  return (
    <>
      <TaskDetails />
    </>
  );
};

export const JobInfo = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <>
      <JobDetailsTop />
      {show && <Application handleClick={handleClick} />}
      <JobDetails handleClick={handleClick} />
    </>
  );
};

export const ProfileInfo = ({ user }) => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};
