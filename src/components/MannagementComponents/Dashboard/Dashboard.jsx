import React from 'react';
import Button from '../common/buttons/Button/Button';
import OutlinedButton from '../common/buttons/OutlinedButton/OutlinedButton';

const Dashboard = ({ setDisplayCreateClass }) => {
  return (
    <div className="flex justify-end gap-2 items-center">
      <Button
        title={'Create Class'}
        onClick={() => setDisplayCreateClass(true)}
      />
      <OutlinedButton title={'Create User'} />
    </div>
  );
};

export default Dashboard;
