import React from "react";

function ClubEvents({ events }) {
  return (
    <section className="p-4 bg-gray-100 rounded-lg shadow-lg my-4">
      <h2 className="text-xl font-semibold">Upcoming Events</h2>
      <ul className="list-disc pl-5 mt-2">
        {events.map((event, index) => (
          <li key={index} className="mb-2">
            <strong>{event.name}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClubEvents;
