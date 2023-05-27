import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Notification, AddNotification } from './notification';

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      className="hover:text-orange-500"
      version="1"
      viewBox="0 0 297 296"
    >
      <path
        fill="#fff"
        d="M1200 2102c-19-10-43-34-52-53l-18-34v31c0 16-6 39-14 49-13 18-15 17-36-26-22-44-22-48-7-79 11-21 14-38 8-49-8-13-11-11-16 11-4 15-15 34-25 43-18 16-19 15-30-25-12-46-8-67 19-97 12-13 18-29 14-41-5-20-8-18-41 16-36 36-36 36-40 13-8-48 8-92 39-109 21-13 29-24 29-46 0-27-1-28-17-13-10 8-30 19-45 22-28 7-28 7-16-26 14-43 43-76 74-83 13-4 28-15 33-25 9-17 6-18-41-13l-51 5 22-32c27-38 50-51 90-51 20 0 34-7 41-20 10-19 8-20-34-20-25 0-47-4-51-10-3-5 12-21 33-35 31-20 50-26 86-24 33 2 52-2 63-14 16-16 15-17-23-17-22 0-49-6-59-14-18-13-16-15 23-35 48-24 77-26 113-7 22 11 30 11 50 0 17-9 19-13 8-14-9 0-28-10-43-21-35-27-22-42 38-43 33-1 50 5 68 21 16 15 28 19 38 13 11-7 8-10-13-15-26-7-58-35-40-35 6 0 25 8 44 17 44 22 91 20 135-6 22-13 34-16 32-9s-19 20-37 29c-18 10-26 19-19 21 7 3 28-6 47-19 29-20 43-23 76-17 67 11 69 21 8 53-36 18-36 19-15 30 18 10 27 9 44-4 30-21 64-19 115 6 42 20 43 22 24 35-11 8-36 15-56 16-32 1-34 3-20 18 12 13 27 16 63 12 41-4 52 0 80 23 18 15 30 31 26 36-3 5-26 9-51 9-45 0-46 0-28 20 11 12 31 20 50 20 22 0 40 9 63 33 18 18 32 37 32 41 0 5-20 6-45 4-25-3-45-3-45 1 1 14 17 28 48 41 24 9 40 26 55 56 11 24 17 47 13 51s-25-2-47-14l-39-21v21c0 13 14 33 35 50 32 25 35 33 35 78 0 50 0 50-22 35-12-9-28-26-34-38-12-22-13-22-20-4-4 10-2 26 4 35 29 39 34 61 28 106-8 53-23 55-46 7-17-36-36-43-25-9 16 54 17 70 0 108-10 21-22 39-26 39-5 0-14-18-20-40-11-37-13-39-23-18-20 38-116 89-116 61 0-24 49-79 77-88 46-15 46-20 2-20-58-1-68-18-24-45 25-15 47-21 71-18 28 3 38 0 46-15 9-17 8-19-8-12-29 13-94 18-94 8 0-5 15-23 33-41 23-22 43-32 64-32 19 0 33-6 37-16 11-29 6-37-12-21-10 9-33 20-50 23-32 7-32 6-22-22 15-38 49-74 71-74 23 0 29-11 22-38-5-21-6-21-35 8-33 33-58 39-53 13 2-10 6-30 10-45 3-15 17-38 31-51 20-19 24-30 19-47-7-21-9-19-25 17-27 60-47 62-56 7-5-38-3-51 15-75 18-25 20-32 9-52-12-22-12-22-18 8-4 17-12 41-20 54-12 24-13 24-26 6-21-29-28-82-14-116 11-26 11-31-6-44-18-13-19-11-22 18-7 86-19 96-52 41-17-27-21-45-18-79 5-38 3-44-20-54-22-10-24-10-17 6 13 29 18 93 7 93-22 0-82-80-82-110 0-35-28-46-85-36-32 6-35 10-35 42 0 28-8 44-35 71-28 28-39 33-48 24s-8-22 4-56c9-25 15-45 13-45s-14 5-28 11c-21 10-23 15-15 32 14 26 5 69-24 112l-24 35-11-25c-7-14-12-42-12-62 0-35-1-36-19-19-18 16-18 21-5 51 12 29 11 39-2 79-9 25-20 46-25 46-4 0-16-22-26-49-15-42-19-47-29-33-10 13-8 21 7 41 20 25 26 95 10 119-6 11-13 8-29-13-12-15-24-36-28-48-7-21-7-21-16 3-7 19-4 27 16 44 26 22 46 63 46 97 0 28-18 23-56-15l-34-34v30c0 23 6 31 30 39 28 10 70 63 70 88 0 15-26 14-60-4-28-15-30-14-30 5 0 16 7 20 36 20 26 0 43 8 65 29 16 16 29 34 29 40 0 14-40 14-75 1-23-9-26-8-21 6 3 8 6 17 6 19s17 1 38-1c28-4 47 1 77 20l40 25-30 11c-16 6-43 9-58 6-17-4-26-2-22 4 3 6 16 10 29 10 26 0 60 29 81 70 14 28 14 30-2 30-10 0-34-8-53-18zm37-778c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm516-1c-7-2-19-2-25 0-7 3-2 5 12 5s19-2 13-5z"
        transform="matrix(.1 0 0 -.1 0 296)"
      ></path>
      <path
        fill='#fff'
        d="M1450 1940c-19-10-68-26-107-35l-73-18 5-56c12-123 15-139 35-187 12-27 33-66 48-88 31-45 107-106 132-106 10 0 41 21 69 46 89 80 129 168 138 306l5 87-38 7c-41 7-85 22-144 47-32 14-38 13-70-3zm66-134c3-15 15-27 30-30 37-10 30-45-18-100-32-35-48-46-60-41-10 4-18 16-18 26 0 12-10 23-25 29-30 12-33 45-5 60 11 6 20 16 20 22 0 16 41 58 57 58 7 0 15-11 19-24z"
        transform="matrix(.1 0 0 -.1 0 296)"
      ></path>
      {/* <path
        fill='#fff'
        d="M1472 1795c4-4-4-22-18-38-26-31-26-31-6-40 11-5 23-19 26-31 5-20 7-19 35 14 27 33 28 36 11 44-11 5-20 18-22 29s-10 23-18 25c-8 3-12 1-8-3zM935 935v-95h53c28 0 52 3 52 8 0 4-18 6-40 4l-40-4v45c0 44 1 46 33 50l32 4-32 1c-31 2-33 5-33 36 0 34 1 35 43 39 38 3 37 4-13 5l-55 2v-95zM1080 1025c0-3 9-24 21-47 17-34 19-46 10-67-10-23-10-24 2-8 19 24 22 22 42-23 10-22 24-40 31-40 8 0 1 20-17 54l-30 55 21 40c11 23 18 41 15 41-2 0-13-17-24-37l-19-38-18 38c-15 32-34 49-34 32zM1238 935c-2-71 0-95 10-95 8 0 12 15 12 43 0 38 4 44 33 57 58 27 45 90-19 90h-33l-3-95zm73 63c10-18 8-24-11-40-33-26-40-23-40 22 0 33 3 40 20 40 10 0 25-10 31-22zM1378 935l-3-95h52c28 0 54 4 57 9s-15 6-39 3l-45-5v46c0 44 1 46 33 50l32 4-32 1c-31 2-33 5-33 36 0 34 1 35 43 39 41 3 40 4-10 5l-52 2-3-95zM1520 1026c0-3 6-11 13-18s35-48 61-90c26-43 52-78 57-78s8 44 7 98l-2 97-5-80-6-80-50 77c-27 43-56 78-62 78-7 0-13-2-13-4zM1716 1014c-30-29-18-51 47-83 39-20 48-55 16-71-16-9-28-9-45-1-13 6-24 7-24 2 0-19 60-23 86-6 41 27 30 65-28 93-54 25-64 56-25 72 16 6 17 9 5 9-9 1-24-6-32-15zM1778 1023c7-3 16-2 19 1 4 3-2 6-13 5-11 0-14-3-6-6zM1887 1010c-34-27-44-78-23-117 16-33 63-58 93-50 12 3 10 5-9 6-33 1-78 53-78 90 0 32 24 69 54 81 15 6 16 9 5 9-9 1-28-8-42-19zM1981 1015c52-28 61-103 19-145-11-11-16-20-12-20 5 0 19 12 33 26 35 37 33 98-4 130-16 13-36 24-45 24-12-1-9-5 9-15zM1075 850c-3-5-1-10 4-10 6 0 11 5 11 10 0 6-2 10-4 10-3 0-8-4-11-10zM1525 850c-3-5-1-10 4-10 6 0 11 5 11 10 0 6-2 10-4 10-3 0-8-4-11-10z"
        transform="matrix(.1 0 0 -.1 0 296)"
      ></path> */}
    </svg>
  );
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Link to="/home">
                <Logo />
              </Link>
            </div>
          </div>
          <div className="flex gap-x-4 justify-center items-center">
            <AddNotification />
            <Notification />
            <button
              onClick={handleLogout}
              className="hover:text-gray-300 bg-orange-500 hover:bg-transparent text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
