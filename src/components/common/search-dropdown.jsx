import React, { useState } from "react";
import { student } from "../../assets";

const teachers = [
  { id: 1, name: "John Doe", image: student },
  { id: 1, name: "Sher jan", image: student },

  { id: 1, name: "John Doe", image: student },

  { id: 1, name: "John Doe", image: student },

  { id: 1, name: "John Doe", image: student },

  { id: 1, name: "John Doe", image: student },

  { id: 1, name: "John Doe", image: student },

  // Add more teachers as needed
];

const SearchDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (teacherId) => {
    setSelectedTeachers((prevSelected) =>
      prevSelected.includes(teacherId)
        ? prevSelected.filter((id) => id !== teacherId)
        : [...prevSelected, teacherId]
    );
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <button
        className="w-full px-4 text-start text-white bg-primary py-3 bg-gray-300 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown Search
      </button>
      {isOpen && (
        <div className=" w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
          <input
            type="text"
            className="w-full px-4 py-2 border-b border-gray-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul className="max-h-60 overflow-y-auto">
            {filteredTeachers.map((teacher) => (
              <li
                key={teacher.id}
                className="flex items-center p-2 hover:bg-gray-100"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-4">{teacher.name}</span>
                <input
                  type="checkbox"
                  className="ml-auto"
                  checked={selectedTeachers.includes(teacher.id)}
                  onChange={() => handleCheckboxChange(teacher.id)}
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
