import React, { useState } from "react";
import CreateClass from "../../../../components/MannagementComponents/CreateClass/CreateClass";
import MainCreateUser from "../../../../components/MannagementComponents/CreateUser/index";
import Dashboard from "../../../../components/MannagementComponents/Dashboard/Dashboard";

const ManagementDashboard = () => {
  const [displayCreateClass, setDisplayCreateClass] = useState(false);
  const [displayCreateUser, setDisplayCreateUser] = useState(false);

  return (
    <>
      {displayCreateClass ? (
        <CreateClass />
      ) : displayCreateUser ? (
        <MainCreateUser />
      ) : (
        <Dashboard
          setDisplayCreateclassName={setDisplayCreateClass}
          setDisplayCreateUser={setDisplayCreateUser}
        />
      )}
    </>
  );
};

export default ManagementDashboard;
