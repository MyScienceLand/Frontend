// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import React from 'react';

// const DashboardMenuSelector = () => {
//   const [anchorElSubjects, setAnchorElSubjects] = React.useState(null);
//   const [anchorElTopic, setAnchorElTopic] = React.useState(null);

//   const handleClickSubjects = (event) => {
//     setAnchorElSubjects(event.currentTarget);
//   };

//   const handleCloseSubjects = () => {
//     setAnchorElSubjects(null);
//   };

//   const handleClickTopic = (event) => {
//     setAnchorElTopic(event.currentTarget);
//   };

//   const handleCloseTopic = () => {
//     setAnchorElTopic(null);
//   };

//   return (
//     <div className="flex gap-6 mb-6">
//       <div>
//         <Button
//           aria-controls="subjects-menu"
//           aria-haspopup="true"
//           onClick={handleClickSubjects}
//           endIcon={<KeyboardArrowDownIcon />}
//           variant="outlined"
//           className="inline-flex w-full justify-center gap-x-1.5  bg-white px-6 py-2 text-sm font-semibold text-gray-900 border-primary hover:bg-gray-50"
//         >
//           Subjects
//         </Button>
//         <Menu
//           id="subjects-menu"
//           anchorEl={anchorElSubjects}
//           keepMounted
//           open={Boolean(anchorElSubjects)}
//           onClose={handleCloseSubjects}
//         >
//           <MenuItem onClick={handleCloseSubjects}>Biology</MenuItem>
//           <MenuItem onClick={handleCloseSubjects}>Physics</MenuItem>
//           <MenuItem onClick={handleCloseSubjects}>Chemistry</MenuItem>
//         </Menu>
//       </div>
//       <div>
//         <Button
//           aria-controls="topic-menu"
//           aria-haspopup="true"
//           onClick={handleClickTopic}
//           endIcon={<KeyboardArrowDownIcon />}
//           variant="outlined"
//           className="inline-flex w-full justify-center gap-x-1.5  bg-white px-6 py-2 text-sm font-semibold text-gray-900 border-primary hover:bg-gray-50"
//         >
//           Topic
//         </Button>
//         <Menu
//           id="topic-menu"
//           anchorEl={anchorElTopic}
//           keepMounted
//           open={Boolean(anchorElTopic)}
//           onClose={handleCloseTopic}
//         >
//           <MenuItem onClick={handleCloseTopic}>Account settings</MenuItem>
//           <MenuItem onClick={handleCloseTopic}>Support</MenuItem>
//           <MenuItem onClick={handleCloseTopic}>License</MenuItem>
//           <MenuItem onClick={handleCloseTopic}>Sign out</MenuItem>
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default DashboardMenuSelector;

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
  const { data } = useFetch('/subject');
  const { data: topics } = useFetch('/topics');
  // console.log(data.data, '----------------------------------------');
  console.log(topics);
  const handleClickSubjects = (event) => {
    setAnchorElSubjects(event.currentTarget);
  };

  const handleCloseSubjects = () => {
    setAnchorElSubjects(null);
  };

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
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

  return (
    <div className="flex gap-6 mb-6">
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
                key={subject.name}
                onClick={() => handleSelectSubject(subject.name)}
              >
                {subject.name}
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
