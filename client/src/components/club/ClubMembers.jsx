import { Avatar } from "antd";
import React from "react";

function ClubMembers({ members }) {
  return (
    <section className="p-6 bg-white rounded-2xl shadow-xl my-6 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Club Members
      </h2>
      <ul className="flex gap-7">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <Avatar
              src={
                member.avatar ||
                "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-175803.jpg?t=st=1731344488~exp=1731348088~hmac=d941fe7eba36da6cd96be60cbab6cd14875f54edcf9bda56dd33ef39fce081db&w=740"
              }
              size={50}
              className="border-2 border-blue-500"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClubMembers;
