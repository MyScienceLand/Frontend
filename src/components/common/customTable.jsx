const people = [
  {
    subject: "Chemistry",
    duration: "2 Months",
    label: "40%",
  },
  {
    subject: "Chemistry",
    duration: "1 Months",
    label: "70%",
  },
  {
    subject: "Chemistry",
    duration: "4 Months",
    label: "20%",
  },
  {
    subject: "Chemistry",
    duration: "4 Months",
    label: "60%",
  },
  {
    subject: "Chemistry",
    duration: "4 Months",
    label: "30%",
  },
];

export default function CustomTable() {
  return (
    <div className="max-w-full mt-6">
      <div className="bg-[#F8F8F8] px-4 rounded py-2">
        <h1 className="text-[18px] px-4 text-secondary font-medium">
          Your Progress
        </h1>
      </div>
      <div className="#fefefe">
        <div className="">
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                  <table className="w-full">
                    <thead className="bg-[#D1D6FF]">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-6 pr-6 text-center w-[200px] text-sm font-semibold text-gray-900"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3.5 text-center w-[340px] text-sm font-semibold text-gray-900"
                        >
                          Progress
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3.5 text-center w-[200px] text-sm font-semibold text-gray-900"
                        >
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#696969] divide-opacity-40 bg-white">
                      {people.map((person, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-secondary">
                            {person.subject}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                            <label>{person.label}</label>
                            <div className="">
                              <div className="flex max-w-[470px] flex-col gap-7">
                                <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                                  <div className="absolute left-0 h-1.5 w-10/12 rounded-full bg-secondary"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-secondary">
                            {person.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
