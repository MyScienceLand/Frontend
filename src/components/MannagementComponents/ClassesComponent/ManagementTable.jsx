import { setColorAndBackgroundColors } from '../../../utils/helper/HelperFunctions';

const ManagementTable = ({ data }) => {
  return (
    <>
      <div className="rounded-lg shadow-sm bg-white   pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark  xl:pb-1">
        <div className="bg-[#F8F8F8]  px-4 rounded py-2">
          <h1 className="text-[18px] px-4 py-2 text-secondary font-medium">
            {data?.className}
          </h1>
        </div>
        <h4 className="mb-6 text-secondary text-[16px] px-4 mt-4 font-medium">
          Teacher: {data?.teacherName}
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 bg-[#F0E8FF] rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Topic
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Topic Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Percentage
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Performance
              </h5>
            </div>
          </div>

          {data &&
            data?.data.map((topic, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-4 ${
                  key === data.length - 1 ? '' : ''
                }`}
                key={key}
              >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <div className="flex items-start justify-center p-2.5 xl:p-5">
                    <p className="text-black ">{key + 1}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black ">{topic.topicName}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black ">{topic.percentage}%</p>
                </div>

                <div className="hidden items-center justify-center  p-2.5 sm:flex xl:p-5">
                  <p
                    className={`px-6 py-1 rounded-sm ${setColorAndBackgroundColors(
                      topic.percentage
                    )}`}
                  >
                    {topic.performance}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManagementTable;
