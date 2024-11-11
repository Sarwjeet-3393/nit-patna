import React from "react";
import Navbar from "@/components/navbar/Navbar";
import ClubInfo from "@/components/club/ClubInfo";
import ClubEvents from "@/components/club/ClubEvents";
import ClubMembers from "@/components/club/ClubMembers";

function page() {
  const club = {
    name: "HackSlash",
    description:
      "As an organization affiliated with Mozilla, HackSlash Student Developers Group shares the club's mission of promoting openness, innovation, and user empowerment on the web. HackSlash aims to foster a vibrant community of student developers to thrive in a rapidly evolving tech landscape through hands-on projects, workshops, and networking opportunities. It serves as a platform for students to learn, experiment, and make meaningful contributions to tech-savvy projects, particularly focusing on Machine Learning, Web and Application Development and existing relevant technological advancements. Through community engagement via workshops, webinars, and real-world relevant projects, students have had the opportunity to enhance their technical abilities and stay updated with the latest advancements across the vast technologies spanning in computer science.",
    events: [
      { name: "Hackathon 2024", date: "March 15, 2024" },
      { name: "AI Workshop", date: "April 10, 2024" },
    ],
    members: [
      { name: "Sarwjeet Kumar", role: "President" },
      { name: "Satyam Prakash", role: "Vice President" },
      { name: "Carol Lee", role: "Member" },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <ClubInfo name={club.name} description={club.description} />
          <ClubEvents events={club.events} />
          <ClubMembers members={club.members} />
        </div>
      </div>
    </>
  );
}

export default page;
