import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import {
  Data,
  Consultants,
  InstituionInfo,
  ConsultantInfo,
  Recruitment,
  JobInfo,
  EditPost,
  Project,
  ProjectInfo,
  TaskInfo,
  ProfileInfo,
} from "./InstitutionRoutes";

const InstitutionDashboard = ({ user }) => {
  return (
    <Router>
      <DashboardLayout user={user}>
        <Route exact path={"/dashboard"}>
          <Data />
        </Route>

        <Route path={"/institution-info"}>
          <InstituionInfo />
        </Route>
        <Route path={"/consultants"}>
          <Consultants />
        </Route>
        <Route path={"/recruitment"}>
          <Recruitment />
        </Route>
        <Route path={"/consultant-info"}>
          <ConsultantInfo />
        </Route>
        <Route path={"/job-details"}>
          <JobInfo />
        </Route>
        <Route path={"/edit-job"}>
          <EditPost />
        </Route>
        <Route path={"/projects"}>
          <Project />
        </Route>
        <Route path={"/project-info"}>
          <ProjectInfo />
        </Route>
        <Route path={"/task-info"}>
          <TaskInfo />
        </Route>
        <Route path={"/profile"}>
          <ProfileInfo user={user} />
        </Route>
      </DashboardLayout>
    </Router>
  );
};

export default InstitutionDashboard;
