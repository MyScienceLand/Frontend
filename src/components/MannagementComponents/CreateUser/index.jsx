import { useState } from 'react';
import AssignClassToStudent from '../AssignClassToStudent/AssignClassToStudent';
import CreateUser from './CreateUser';

const MainCreateUser = () => {
  const [displayAssignClass, setDisplayAssignClass] = useState(false);
  return (
    <div>
      {displayAssignClass ? (
        <AssignClassToStudent />
      ) : (
        <CreateUser setDisplayAssignClass={setDisplayAssignClass} />
      )}
    </div>
  );
};

export default MainCreateUser;
