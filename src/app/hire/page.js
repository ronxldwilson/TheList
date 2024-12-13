"use client";

import { useState } from "react";
import Drawer from "@/components/Drawer";
import talentData from "../../../data/talentData";

export default function Hire() {
  const [filters, setFilters] = useState({
    role: "",
    experience: "",
    location: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = talentData.filter((talent) => {
    return (
      (filters.role === "" || talent.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (filters.experience === "" || talent.exprience.toLowerCase().includes(filters.experience.toLowerCase())) &&
      (filters.location === "" || talent.location.toLowerCase().includes(filters.location.toLowerCase()))
    );
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Filter Section */}
        <Drawer />
        
      <div className=" lg:w-1/4 w-full h-1/2 mt-20 ml-2 p-4 bg-gray-100 rounded-lg shadow-lg">


        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
            placeholder="e.g., Software Engineer"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Experience</label>
          <input
            type="text"
            name="experience"
            value={filters.experience}
            onChange={handleFilterChange}
            placeholder="e.g., >3 years"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="e.g., Bengaluru"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 w-full p-4">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Hire Talent</h1>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Role</th>
              <th className="border border-gray-300 p-2">Experience</th>
              <th className="border border-gray-300 p-2">Location</th>
              <th className="border border-gray-300 p-2">Proof of Work</th>
              <th className="border border-gray-300 p-2">Social Link</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((talent, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2">{talent.name}</td>
                <td className="border border-gray-300 p-2">{talent.role}</td>
                <td className="border border-gray-300 p-2">{talent.exprience}</td>
                <td className="border border-gray-300 p-2">{talent.location}</td>
                <td className="border border-gray-300 p-2">
                  <a
                    href={talent.proof_of_work_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Link
                  </a>
                </td>
                <td className="border border-gray-300 p-2">
                  <a
                    href={talent.social_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Link
                  </a>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
