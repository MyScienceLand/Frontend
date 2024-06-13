import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const DashboardMenuSelector = ({
  selectedSubject,
  setSelectedSubject,
  selectedTopic,
  setSelectedTopic,
}) => {
  const [anchorElSubjects, setAnchorElSubjects] = useState(null);
  const [anchorElTopic, setAnchorElTopic] = useState(null);
  const [subjectId, setSubjectId] = useState('');
  const { data } = useFetch('/user-preferences');
  const { data: topics } = useFetch(`/topics/find-by-subject-id/${subjectId}`);

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
          aria-controls="subjects-menu"
          aria-haspopup="true"
          onClick={handleClickSubjects}
          endIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
          sx={{
            color: 'gray',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
            border: '1px solid var(--secondary-color)',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          {selectedSubject}
        </Button>
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
          aria-controls="topic-menu"
          aria-haspopup="true"
          onClick={handleClickTopic}
          endIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
          sx={{
            color: 'gray',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
            border: '1px solid var(--secondary-color)',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          {selectedTopic}
        </Button>
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
                {topic.name}
              </MenuItem>
            ))}
        </Menu>
      </div>
    </div>
  );
};

export default DashboardMenuSelector;
