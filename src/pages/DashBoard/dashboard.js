import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router';
import InstitutionDashboard from './institution/InstitutionDashboard';
import { InstitutionRoutes } from './institution/InstitutionRoutes';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard';
import { dashboardRoutes } from './SuperAdmin/SuperAdminRoutes';
import UserDashboard from './user/UserDashboard';
import { UserRoutes } from './user/UserRoutes';

const Dashboard = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .get("me", config)
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
         
        });
    }, []);
    return (
        <div>
         {user.role === "SUPER" && (
         <Route exact path={dashboardRoutes}>
             <SuperAdminDashboard user={user}/>
             </Route>
      )}
         {user.role === "INSTITUTION_MANAGER" && (
         <Route exact path={InstitutionRoutes} >
             <InstitutionDashboard user={user}/>
             </Route>
      )}
         {user.role === "USER" && (
         <Route exact path={UserRoutes} >
             <UserDashboard user={user}/>
             </Route>
      )}
        </div>
    )
}

export default Dashboard
