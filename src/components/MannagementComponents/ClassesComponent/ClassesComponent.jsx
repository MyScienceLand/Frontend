import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import { setClassesData } from '../../../redux/slices/classesSlice.js';
import { API_ROUTES } from '../../../routes/apiRoutes';
import ManagementTable from './ManagementTable';

const ClassesComponent = ({ setDisplayUserScore }) => {
  const classData = useSelector((state) => state.classes);
  const { data: classPercentageData } = useFetch(
    API_ROUTES.CLASS_PERCENTAGE_AND_REVIEW(classData?.id)
  );
  const dispatch = useDispatch();

  const handelViewTopics = (id) => {
    dispatch(setClassesData({ viewTopicsId: id }));
    setDisplayUserScore(true);
  };
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-6">
      {classPercentageData?.data.map((data, index) => (
        <div key={index}>
          <ManagementTable heading={`Class ${index + 1}`} data={data} />
          <div className="flex justify-center items-center">
            <button
              onClick={() => handelViewTopics(data.id)}
              className="px-8 py-2 bg-primary rounded-sm mt-4 text-white border hover:border border-primary hover:bg-transparent hover:text-primary"
            >
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassesComponent;
