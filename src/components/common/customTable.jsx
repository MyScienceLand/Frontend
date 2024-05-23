const people = [
  {
    subject: "Chemistry",
    duration: "2 Months",
  },
  {
    subject: "Chemistry",
    duration: "1 Months",
  },
  {
    subject: "Chemistry",
    duration: "4 Months",
  },
  {
    subject: "Chemistry",
    duration: "4 Months",
  },
  {
    subject: "Chemistry",
    duration: "4 Months",
  },
];

export default function CustomTable() {
  return (
    <div className="#fefefe mt-6 ">
      <div className="px-4 sm:px-6 lg:px-8 rounded-md">
        <div className="bg-[#F8F8F8] px-8 rounded py-2">
          <h1 className="text-[18px] font-medium">Your Progress</h1>
        </div>
        <div className=" flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className=" bg-[#D1D6FF]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Progress
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.subject}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="">
                            <div className="flex max-w-[470px] flex-col gap-7">
                              <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                                <div className="absolute left-0 h-2 w-10/12 rounded-full bg-secondary"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.duration}
                        </td>
                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td> */}
                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
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
  );
}
