import { useState } from 'react';
import CreateClass from '../../../../components/MannagementComponents/CreateClass/CreateClass';
import Dashboard from '../../../../components/MannagementComponents/Dashboard/Dashboard';

const ManagementDashboard = () => {
  const [displayCreateClass, setDisplayCreateClass] = useState(false);
  console.log(displayCreateClass);
  return (
    <>
      {displayCreateClass == true ? (
        <CreateClass />
      ) : (
        <>
          <Dashboard setDisplayCreateClass={setDisplayCreateClass} />
        </>
      )}
    </>
  );
};

export default ManagementDashboard;
