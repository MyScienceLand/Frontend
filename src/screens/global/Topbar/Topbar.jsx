import { BsFullscreenExit } from 'react-icons/bs';

import { IoMenuOutline } from 'react-icons/io5';

import { RxEnterFullScreen } from 'react-icons/rx';
import { VscBellDot } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import ThemeToggleButton from '../../../components/ThemeToggleButton/ThemeToggleButton';
import UserProfile from '../../../components/UserProfile/UserProfile';
import AddPreferences from '../../../components/common/buttons/AddPreferences/AddPreferences';
import './Topbar.scss';

const Topbar = ({ handleDrawerOpen, open, isFullScreen, toggleFullScreen }) => {
  const location = useLocation();
  const route = location.pathname.split('/')[1];

  const token = localStorage.getItem('token');
  return (
    <div
      display="flex"
      className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 shadow-bottom bg-white px-4  sm:gap-x-6 sm:px-6 lg:px-12"
    >
      <div className="flex flex-1  gap-x-4 self-stretch lg:gap-x-6">
        {!open && (
          <button aria-label="open drawer" onClick={() => handleDrawerOpen()}>
            <IoMenuOutline color="#000" />
          </button>
        )}
        <div display="flex " className="flex items-center gap-x-4 lg:gap-x-6">
          {route === 'student-dashboard' ? <AddPreferences /> : null}
          <ThemeToggleButton />
          {/* Todo: test this after removing the MUI */}
          <button onClick={toggleFullScreen}>
            {isFullScreen ? (
              <BsFullscreenExit color="#000" />
            ) : (
              <RxEnterFullScreen color="#000" />
            )}
          </button>
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <VscBellDot className="h-6 w-6" aria-hidden="true" color="#000" />
          </button>
          {/* <Link to={'/primarily-quiz'}>Open quiz</Link> */}
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
