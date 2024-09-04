// TicketDetailsPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

interface Ticket {
  id: string;
  ticketNumber: string;
  layoutId: string;
  email: string | null;
  phone: string | null;
  subject: string;
  status: string;
  statusType: string;
  createdTime: string;
  category: string;
  language: string;
  subCategory: string | null;
  priority: string;
  channel: string;
  dueDate: string;
  responseDueDate: string | null;
  commentCount: string;
  sentiment: string | null;
  threadCount: string;
  closedTime: string | null;
  onholdTime: string | null;
  accountId: string | null;
  departmentId: string;
  contactId: string;
  productId: string | null;
  assigneeId: string;
  teamId: string | null;
  channelCode: string | null;
  isSpam: boolean;
  lastThread: string | null;
  customerResponseTime: string;
  isArchived: boolean;
  source: {
    extId: string | null;
    appName: string | null;
    appPhotoURL: string | null;
    permalink: string | null;
    type: string;
  };
  webUrl: string;
}

const sampleTicket: Ticket = {
  id: "1022951000000636031",
  ticketNumber: "108",
  layoutId: "1022951000000335866",
  email: null,
  phone: null,
  subject: "Sample",
  status: "Open",
  statusType: "Open",
  createdTime: "2024-09-03T03:13:26.000Z",
  category: "general",
  language: "English",
  subCategory: null,
  priority: "High",
  channel: "Email",
  dueDate: "2024-09-03T09:13:26.000Z",
  responseDueDate: null,
  commentCount: "0",
  sentiment: null,
  threadCount: "1",
  closedTime: null,
  onholdTime: null,
  accountId: null,
  departmentId: "1022951000000329427",
  contactId: "1022951000000636001",
  productId: null,
  assigneeId: "1022951000000355001",
  teamId: null,
  channelCode: null,
  isSpam: false,
  lastThread: null,
  customerResponseTime: "2024-09-03T03:13:26.000Z",
  isArchived: false,
  source: {
    extId: null,
    appName: null,
    appPhotoURL: null,
    permalink: null,
    type: "SYSTEM",
  },
  webUrl: "https://desk.zoho.com/support/thebinaryholdings/ShowHomePage.do#Cases/dv/1022951000000636031",
};

const TicketDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real application, you would fetch the ticket details using the id
  const ticket = sampleTicket; // Replace with fetched data

  return (
    <div className="container mx-auto pt-24 px-8 lg:px-32">
      <h1 className="text-3xl font-bold mb-4">Ticket Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{ticket.subject}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><strong>ID:</strong> {ticket.id}</p>
            <p><strong>Ticket Number:</strong> {ticket.ticketNumber}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Category:</strong> {ticket.category}</p>
            <p><strong>Channel:</strong> {ticket.channel}</p>
          </div>
          <div>
            <p><strong>Created Time:</strong> {new Date(ticket.createdTime).toLocaleString()}</p>
            <p><strong>Due Date:</strong> {new Date(ticket.dueDate).toLocaleString()}</p>
            <p><strong>Department ID:</strong> {ticket.departmentId}</p>
            <p><strong>Assignee ID:</strong> {ticket.assigneeId}</p>
            <p><strong>Contact ID:</strong> {ticket.contactId}</p>
            <p><strong>Web URL:</strong> <a href={ticket.webUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Ticket</a></p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Responses</h3>
          <ul className="list-disc pl-5">
            {ticket.lastThread ? (
              <li>{ticket.lastThread}</li>
            ) : (
              <li>No responses yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsPage;