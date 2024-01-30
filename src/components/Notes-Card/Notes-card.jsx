import React from "react";

const NotesCard = ({ data }) => {
  return (
    <div className="mt-4">
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5 md:px-5 px-0">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.picture.large}  
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {`${person.name.title} ${person.name.first} ${person.name.last}`} {/* Combine title, first, and last name */}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesCard;
