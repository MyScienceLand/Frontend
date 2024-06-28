import React, { useState } from 'react';
import ClassesComponent from '../../../../components/MannagementComponents/ClassesComponent/ClassesComponent';
import UserScoreTable from '../../../../components/MannagementComponents/UserScoreTable/UserScoreTable';

const Classes = () => {
  const [displayUserScore, setDisplayUserScore] = useState(false);
  return (
    <div>
      {displayUserScore ? (
        <UserScoreTable />
      ) : (
        <ClassesComponent setDisplayUserScore={setDisplayUserScore} />
      )}
    </div>
  );
};

export default Classes;
