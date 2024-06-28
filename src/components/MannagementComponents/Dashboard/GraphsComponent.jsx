import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch.js';
import { setClassesData } from '../../../redux/slices/classesSlice.js.js';
import { API_ROUTES } from '../../../routes/apiRoutes.js';
import BarChart from '../common/graphs/BarChart/BarChart';

const GraphsComponent = () => {
  const { data: yearOneGraphData } = useFetch(API_ROUTES.YEAR_ONE_GRAPH);
  const { data: yearTwoGraphData } = useFetch(API_ROUTES.YEAR_TWO_GRAPH);
  const { data: yearTenGraphData } = useFetch(API_ROUTES.YEAR_TEN_GRAPH);
  const { data: yearElevenGraphData } = useFetch(API_ROUTES.YEAR_ELEVEN_GRAPH);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelViewClasses = (id) => {
    dispatch(setClassesData({ viewClassId: id }));
    navigate('/management-dashboard/classes');
  };
  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr] gap-6">
        <div>
          <BarChart
            series={yearOneGraphData?.data.series || []}
            colors={yearOneGraphData?.data.colors || ''}
            heading={yearOneGraphData?.data.heading || ''}
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handelViewClasses('i21')}
              className="px-6 py-2 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary "
            >
              View More
            </button>
          </div>
        </div>
        <div>
          <BarChart
            series={yearTwoGraphData?.data.series || []}
            colors={yearTwoGraphData?.data.colors || ''}
            heading={yearTwoGraphData?.data.heading || ''}
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handelViewClasses('i21')}
              className="px-6 py-2 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary "
            >
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-6">
        <div>
          <BarChart
            series={yearTenGraphData?.data.series || []}
            colors={yearTenGraphData?.data.colors || ''}
            heading={yearTenGraphData?.data.heading || ''}
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handelViewClasses('i21')}
              className="px-6 py-2 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary "
            >
              View More
            </button>
          </div>
        </div>
        <div>
          <BarChart
            series={yearElevenGraphData?.data.series || []}
            colors={yearElevenGraphData?.data.colors || ''}
            heading={yearElevenGraphData?.data.heading || ''}
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handelViewClasses('i21')}
              className="px-6 py-2 bg-primary text-white border hover:border border-primary hover:bg-transparent hover:text-primary "
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphsComponent;
