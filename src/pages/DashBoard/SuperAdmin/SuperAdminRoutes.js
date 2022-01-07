import React, { useState } from "react";
import DataCardDiv from "../../../components/DashboardComponents/DataCard/DataCardDiv";
import SuperAdminCharts from "../../../components/DashboardComponents/DashboardChartDivs/SuperAdminCharts";
import InstitutionTableTwo from "../../../components/InstitutionComponents/InstitutionTableTwo";
import ConsultantTable from "../../../components/ConsultantComponent/ConsultantTable";
import AddConsultant from "../../../components/ConsultantComponent/AddConsultant";
import AddInstitution from "../../../components/InstitutionComponents/AddNewInstitution";
import ConsultantDetails from "../../../components/ConsultantComponent/ConsultantDetails/ConsultantDetails"
import InstitutionDetails from "../../../components/InstitutionComponents/InstitutionDetails/InstitutionDetails";
import Recruitments from "../../../components/RecruitmentComponents/Recruitments";
import AddPosting from "../../../components/RecruitmentComponents/AddNewPosting";
import JobDetails from "../../../components/RecruitmentComponents/JobDetails";
import Application from "../../../components/RecruitmentComponents/ApplicationForm";
import JobDetailsTop from "../../../components/RecruitmentComponents/JobDetailsTop";
import EditJob from "../../../components/RecruitmentComponents/EditJob";
import Projects from "../../../components/ProjectComponents/Projects";
import AddProject from "../../../components/ProjectComponents/AddProjects";
import ProjectDetails from "../../../components/ProjectComponents/ProjectDetails/ProjectDetails";
import TaskDetails from "../../../components/ProjectComponents/TaskDetails/TaskDetails";
import Profile from "../../../components/ProfileComponent/Profile"



export const dashboardRoutes = [
  "/dashboard",
  "/institution-table",
  "/institution-info",
  "/consultants",
  "/recruitment",
  "/consultant-info",
  "/job-details",
  "/edit-job",
  "/projects",
  "/project-info",
  "/task-info",
  "/profile"
];
export const Data = () => {
    return (
      <>
        <DataCardDiv />
        <SuperAdminCharts />
      </>
    );
  };
  

 export const Institution = () => {
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
      setShow(!show);
    };
  
    return (
      <>
        {show && <AddInstitution handleClick={handleClick} />}
        <InstitutionTableTwo handleClick={handleClick} />
      </>
    );
  };
  export const InstituionInfo = () => {
    return(
        <>
        <InstitutionDetails />
        </>
    )
  }

  export const Consultants = () => {
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
      setShow(!show);
    };
    return (
        <>
          {show && <AddConsultant handleClick={handleClick} />}
          <ConsultantTable handleClick={handleClick} />
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
          {show && <AddProject handleClick={handleClick} />}
          <Projects handleClick={handleClick} />
        </>
      );
    };


    export const Recruitment = () => {
      const [show, setShow] = useState(false);
    const handleClick = (e) => {
      setShow(!show);
    };
      return(
          <>
          {show && <AddPosting handleClick={handleClick}/>}
          <Recruitments handleClick={handleClick} />
          </>
      )
    }
    
    
    export const ConsultantInfo = () => {
        return(
            <>
            <ConsultantDetails/>
            </>
        )
    }
    export const ProjectInfo = () => {
        return(
            <>
            <ProjectDetails/>
             </>
        )
    }
    export const TaskInfo = () => {
        return(
            <>
            <TaskDetails/>
             </>
        )
    }

    export const JobInfo = () => {
      const [show, setShow] = useState(false);
      const handleClick = (e) => {
        setShow(!show);
      };
      return(
          <>
          <JobDetailsTop/>
          {show && <Application handleClick={handleClick}/>}
          <JobDetails handleClick={handleClick}/>
          </>
      )
    }

    export const EditPost = ()=> {
      return(
        <EditJob/>
      )
    }


    export const ProfileInfo = ({user}) => {
      return(
          <>
          <Profile user={user}/>
          </>
      )
  }


  