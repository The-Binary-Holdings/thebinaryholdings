"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import ApplyJobModal from "../ApplyJobModal";
import WrapperContent from "../WrapperContent";

import { careersDAO, Job } from "@/common/DAO/careers.dao";

const CareerJobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState<{ [key: string]: Job[] }>({});
  const [listDept, setListDept] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await careersDAO.getAll();
      setJobs(data);
      setListDept(Object.keys(data));
    };

    fetchJobs();
  }, []);

  return (
    <WrapperContent>
      {isOpen && (
        <ApplyJobModal
          isOpen={isOpen}
          toggleOpen={setIsOpen}
          job={selectedJob}
        />
      )}
      {listDept.map((item: string) => (
        <div key={item}>
          <p className="text-white/75 mt-10">{item}</p>
          <div>
            {jobs[item].map((job) => (
              <div
                key={job.id}
                className="grid gap-4 grid-cols-6 bg-[#131313] py-4 px-6 my-4"
              >
                <p className="flex items-center col-span-6 md:col-span-3 lg:col-span-2 text-xl text-white/75">
                  {job.title}
                </p>
                <p className="col-span-3 md:col-span-1 text-white/75 flex items-center">
                  {job.type}
                </p>
                <p className="col-span-3 md:col-span-1 text-white/75 flex items-center">
                  {job.location}
                </p>
                <Link
                  href={`/career/job/${job.id}`}
                  className="col-span-3 lg:col-span-1 text-right flex items-center underline text-white"
                >
                  View Details
                </Link>
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setIsOpen(true);
                  }}
                  className="col-span-3 lg:col-span-1 flex items-center justify-center p-2 lg:p-4 bg-white text-[#080729] hover:opacity-90 rounded-md font-semibold"
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
