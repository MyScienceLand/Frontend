import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import useFetch from '../../hooks/useFetch';
import { API_ROUTES } from '../../routes/apiRoutes';
import Button from '../common/buttons/Button/Button';

const DashboardMenuSelector = ({
  selectedSubject,
  setSelectedSubject,
  selectedTopic,
  setSelectedTopic,
}) => {
  const [anchorElSubjects, setAnchorElSubjects] = useState(null);
  const [anchorElTopic, setAnchorElTopic] = useState(null);
  const [subjectId, setSubjectId] = useState('');
  const { data } = useFetch(API_ROUTES.PREFERENCES);
  const { data: topics } = useFetch(
    API_ROUTES.TOPICS_FIND_BY_SUBJECT_ID(subjectId)
  );

  const handleClickSubjects = (event) => {
    setAnchorElSubjects(event.currentTarget);
  };

  const handleCloseSubjects = () => {
    setAnchorElSubjects(null);
  };

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject.subjects.name);
    setSubjectId(subject.subjectId);
    handleCloseSubjects();
  };

  const handleClickTopic = (event) => {
    setAnchorElTopic(event.currentTarget);
  };

  const handleCloseTopic = () => {
    setAnchorElTopic(null);
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    handleCloseTopic();
  };
  // useEffect(() => {
  //   if (topics?.data?.length < 1 && selectedSubject != '') {
  //     ToastNotification.error(`No topics found against ${selectedSubject}`);
  //   }
  // }, [topics]);
  return (
    <div className="flex gap-6 mb-6">
      {/* {JSON.stringify(data.data)} */}
      <div>
        <Button
          onClick={handleClickSubjects}
          icon={<IoIosArrowDown />}
          title={selectedSubject}
        ></Button>
        {/* <Menu
          id="subjects-menu"
          anchorEl={anchorElSubjects}
          keepMounted
          open={Boolean(anchorElSubjects)}
          onClose={handleCloseSubjects}
        >
          {data &&
            data.data.map((subject) => (
              <MenuItem
                key={subject.name}
                onClick={() => handleSelectSubject(subject)}
              >
                {subject.name}
              </MenuItem>
            ))}
        </Menu> */}
        <Menu
          id="subjects-menu"
          anchorEl={anchorElSubjects}
          keepMounted
          open={Boolean(anchorElSubjects)}
          onClose={handleCloseSubjects}
        >
          {data &&
            data.data.map((subject) => (
              <MenuItem
                key={subject.subjects.name}
                onClick={() => handleSelectSubject(subject)}
              >
                {subject.subjects.name}
              </MenuItem>
            ))}
        </Menu>
      </div>
      <div>
        <Button
          onClick={handleClickSubjects}
          icon={<IoIosArrowDown />}
          title={selectedTopic}
        ></Button>
        <Menu
          id="topic-menu"
          anchorEl={anchorElTopic}
          keepMounted
          open={Boolean(anchorElTopic)}
          onClose={handleCloseTopic}
        >
          {topics &&
            topics?.data?.map((topic, index) => (
              <MenuItem
                key={index}
                onClick={() => handleSelectTopic(topic.name)}
              >
                {topic.name}1
              </MenuItem>
            ))}
        </Menu>
      </div>
    </div>
  );
};

export default DashboardMenuSelector;
