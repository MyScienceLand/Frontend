import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useFetch from "../../hooks/useFetch";
import { API_ROUTES } from "../../routes/apiRoutes";
import SelectorStyle from "../common/selector-style";
const DashboardMenuSelector = ({
  selectedSubject,
  setSelectedSubject,
  selectedTopic,
  setSelectedTopic,
  otherPropsForSubjectsMenu = {},
  otherPropsForTopicsMenu = {},
}) => {
  const [subjectId, setSubjectId] = useState("");
  const { data } = useFetch(API_ROUTES.PREFERENCES);
  const { data: topics } = useFetch(
    API_ROUTES.TOPICS_FIND_BY_SUBJECT_ID(subjectId)
  );
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject.subjects.name);
    setSubjectId(subject.subjectId);
  };
  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };
  console.log(data);
  return (
    <div className="flex gap-6 mb-6">
      <div>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton
                as={SelectorStyle}
                icon={<IoIosArrowDown />}
                title={selectedSubject}
              />
              <MenuItems
                className="absolute mt-1 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                {...otherPropsForSubjectsMenu}
              >
                {data &&
                  data.data.map((subject) => (
                    <MenuItem key={subject.name}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => handleSelectSubject(subject)}
                        >
                          {subject.subjects.name}
                        </button>
                      )}
                    </MenuItem>
                  ))}
              </MenuItems>
            </>
          )}
        </Menu>
      </div>
      <div>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton
                as={SelectorStyle}
                icon={<IoIosArrowDown />}
                title={selectedTopic}
              />
              <MenuItems
                className="absolute mt-1 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                {...otherPropsForTopicsMenu}
              >
                {topics &&
                  topics?.data?.map((topic, index) => (
                    <MenuItem key={index}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => handleSelectTopic(topic.name)}
                        >
                          {topic.name}
                        </button>
                      )}
                    </MenuItem>
                  ))}
              </MenuItems>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};
export default DashboardMenuSelector;
