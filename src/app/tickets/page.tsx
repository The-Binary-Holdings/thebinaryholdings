// SupportTicketsPage.tsx
import React from "react";

interface SupportTicket {
  id: number;
  email: string;
  subject: string;
  description: string;
  status: string;
}

const mockTickets: SupportTicket[] = [
  {
    id: 1,
    email: "user1@example.com",
    subject: "Issue with login",
    description: "Unable to login to my account.",
    status: "Open",
  },
  {
    id: 2,
    email: "user2@example.com",
    subject: "Payment issue",
    description: "Payment not going through.",
    status: "Closed",
  },
  {
    id: 3,
    email: "user3@example.com",
    subject: "Bug report",
    description: "Found a bug in the application.",
    status: "In Progress",
  },
];

const SupportTicketsPage: React.FC = () => {
  return (
    <div className="container mx-auto pt-24 px-8 lg:px-32">
      <h1 className="sticky top-0 py-10 border-b border-white/10 bg-black inline-block text-center z-20 col-span-4 w-full text-green text-lg lg:text-3xl font-semibold">
        Support Tickets
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTickets.map((ticket, index) => (
              <tr
                key={ticket.id}
                className={index % 2 === 0 ? "bg-gray-400" : "bg-gray-500"}
              >
                <td className="py-3 px-4 border-b">{ticket.id}</td>
                <td className="py-3 px-4 border-b">{ticket.email}</td>
                <td className="py-3 px-4 border-b">{ticket.subject}</td>
                <td className="py-3 px-4 border-b">{ticket.description}</td>
                <td className="py-3 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      ticket.status === "Open"
                        ? "bg-green-200 text-green-800"
                        : ticket.status === "Closed"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTicketsPage;