import React from 'react';
import CreateClass from '../../../../components/MannagementComponents/CreateClass/CreateClass';

const ManagementDashboard = () => {
  return (
    <div>
      <div className="flex justify-end gap-2 items-center">
        <button className="px-6 py-2 bg-[var(--secondary-color)] text-white border hover:border border-primary hover:bg-transparent hover:text-primary rounded-md">
          Create Class
        </button>
        <button className="px-6 py-2 bg-primary text-[var(--secondary-color)] border hover:border border-[var(--secondary-color)] hover:bg-transparent hover:text-primary rounded-md">
          Create User
        </button>
      </div>
      <CreateClass />
    </div>
  );
};

export default ManagementDashboard;
