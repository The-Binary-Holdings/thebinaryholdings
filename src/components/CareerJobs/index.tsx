"use client";
import React, { useState } from "react";
import Link from "next/link";

import ApplyJobModal from "../ApplyJobModal";
import WrapperContent from "../WrapperContent";

const JOBS = [
  {
    id: "825-394058-2349852",
    department: "Sales",
    jobs: [
      {
        id: "8370198237012987",
        name: "Head of Sales",
        time: "Full Time",
        location: "Bangkok",
      },
      {
        id: "7423740289732",
        name: "Sales Represenative",
        time: "Full Time",
        location: "Multiple Locations",
      },
    ],
  },
  {
    id: "825-321312-2349852",
    department: "Marketing",
    jobs: [
      {
        id: "312398237012987",
        name: "Digital Marketing Analyst",
        time: "Full Time",
        location: "Bangalore",
      },
      {
        id: "127309812738129",
        name: "Graphic Designer",
        time: "Remote",
        location: "Multiple Locations",
      },
    ],
  },
  {
    id: "825-321312-13212312",
    department: "Finance & Accounting",
    jobs: [
      {
        id: "8943678346236",
        name: "Bookkeeper",
        time: "Full Time",
        location: "Remote",
      },
      {
        id: "182708we79239",
        name: "Financial Analyst",
        time: "Remote",
        location: "Bangalore",
      },
    ],
  },
];

type JobType = (typeof JOBS)[number];

const CareerJobs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrapperContent>
      {isOpen && <ApplyJobModal isOpen={isOpen} toggleOpen={setIsOpen} />}
      {JOBS.map((item: JobType) => (
        <div key={item.id}>
          <p className="text-white/75 mt-10">{item.department}</p>
          <div>
            {item.jobs.map((job) => (
              <div
                key={job.id}
                className="grid gap-4 grid-cols-6 bg-[#131313] py-4 px-6 my-4"
              >
                <p className="flex items-center col-span-6 md:col-span-3 lg:col-span-2 text-xl">
                  {job.name}
                </p>
                <p className="col-span-3 md:col-span-1 text-white/75 flex items-center">
                  {job.time}
                </p>
                <p className="col-span-3 md:col-span-1 text-white/75 flex items-center">
                  {job.location}
                </p>
                <Link
                  href={`/career/job/${job.id}`}
                  className="col-span-3 lg:col-span-1 text-right flex items-center underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  className="col-span-3 lg:col-span-1 flex items-center justify-center p-4 bg-white text-[#080729] hover:opacity-90 rounded-md font-semibold"
                >
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </WrapperContent>
  );
};

export default CareerJobs;
