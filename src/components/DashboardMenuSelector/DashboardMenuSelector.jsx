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

const DashboardMenuSelector = ({
  selectedSubject,
  setSelectedSubject,
  selectedTopic,
  setSelectedTopic,
}) => {
  const [anchorElSubjects, setAnchorElSubjects] = useState(null);
  const [anchorElTopic, setAnchorElTopic] = useState(null);

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
          <MenuItem onClick={() => handleSelectSubject('Biology')}>
            Biology
          </MenuItem>
          <MenuItem onClick={() => handleSelectSubject('Physics')}>
            Physics
          </MenuItem>
          <MenuItem onClick={() => handleSelectSubject('Chemistry')}>
            Chemistry
          </MenuItem>
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
          <MenuItem onClick={() => handleSelectTopic('Account settings')}>
            Account settings
          </MenuItem>
          <MenuItem onClick={() => handleSelectTopic('Support')}>
            Support
          </MenuItem>
          <MenuItem onClick={() => handleSelectTopic('License')}>
            License
          </MenuItem>
          <MenuItem onClick={() => handleSelectTopic('Sign out')}>
            Sign out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default DashboardMenuSelector;
