import React from 'react';
import Button from '../common/buttons/Button/Button';
import OutlinedButton from '../common/buttons/OutlinedButton/OutlinedButton';
import GraphsComponent from './GraphsComponent';

const Dashboard = ({ setDisplayCreateClass, setDisplayCreateUser }) => {
  return (
    <div>
      <div className="flex justify-end gap-2 items-center">
        <Button
          title={'Create Class'}
          onClick={() => setDisplayCreateClass(true)}
        />
        <OutlinedButton
          title={'Create User'}
          onClick={() => setDisplayCreateUser(true)}
        />
      </div>
      <GraphsComponent />
    </div>
  );
};

export default Dashboard;
