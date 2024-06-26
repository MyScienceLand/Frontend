import React, { useState } from 'react';

const SearchDropdown = ({ data, setStudents, students }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (teacherId) => {
    setStudents((prevSelected) =>
      prevSelected.includes(teacherId)
        ? prevSelected.filter((id) => id !== teacherId)
        : [...prevSelected, teacherId]
    );
  };

  const filteredData = data?.filter((teacher) => {
    return (teacher.firstName || teacher.email)
      .toLowerCase()
      .includes(searchTerm?.toLowerCase());
  });

  return (
    <div className="relative">
      <button
        className="w-full px-4 text-start text-white bg-primary py-3 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown Search
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
          <input
            type="text"
            className="w-full px-4 py-2 border-b border-gray-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul className="max-h-60 overflow-y-auto">
            {filteredData &&
              filteredData?.map((teacher) => (
                <li
                  key={teacher._id}
                  className="flex items-center p-2 hover:bg-gray-100"
                >
                  <span className="ml-4">
                    {teacher.name || teacher.firstName || teacher.email}
                  </span>
                  <input
                    type="checkbox"
                    className="ml-auto"
                    checked={students.includes(teacher._id)}
                    onChange={() => handleCheckboxChange(teacher._id)}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
