"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import ApplyJobModal from "../ApplyJobModal";
import WrapperContent from "../WrapperContent";
import { careersDAO, Job } from "@/common/DAO/careers.dao";
import { forIn, isEmpty } from "lodash";
import { CircularProgress } from "@nextui-org/react";

const CareerJobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [careers, setCareers] = useState<any>({});
  const [depts, setDepts] = useState<Array<string>>([]);
  const [showJobs, setShowJobs] = useState<boolean>(false);
  const [job, setJob] = useState<Job>();
  const getAllJobs = () => {
    careersDAO.getAll().then((data) => {
      setShowJobs(false);
      setCareers(data);
      setDepts(Object.keys(data));
    });
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  useEffect(() => {
    if (!isEmpty(careers) && depts?.length) {
      setShowJobs(true);
    }
  }, [careers, depts]);

  return (
    <WrapperContent>
      {isOpen && job && (
        <ApplyJobModal isOpen={isOpen} toggleOpen={setIsOpen} job={job} />
      )}
      {showJobs ? (
        depts.map((dept) => (
          <>
            <div key={dept}>
              <p className="text-white/75 mt-10">{dept}</p>
            </div>
            {careers[dept].map((job: any) => (
              <div
                key={job?.id}
                className="grid gap-4 grid-cols-6 bg-[#131313] py-4 px-6 my-4"
              >
                <p className="flex items-center col-span-6 md:col-span-3 lg:col-span-2 text-xl text-white ">
                  {job?.title}
                </p>
                <p className="col-span-3 md:col-span-1 text-white/75 flex items-center">
                  {job.type}
                </p>
                <p className="col-span-3 md:col-span-1 text-white/75 flex items-center">
                  {job.location}
                </p>
                <Link
                  href={`/careers/job/${job.id}`}
                  className="col-span-3 lg:col-span-1 text-right flex items-center underline text-white"
                >
                  View Details
                </Link>
                <button
                  onClick={() => {
                    setJob(job);
                    setIsOpen(true);
                  }}
                  className="col-span-3 lg:col-span-1 flex items-center justify-center p-4 bg-white text-[#080729] hover:opacity-90 rounded-md font-semibold"
                >
                  APPLY NOW
                </button>
              </div>
            ))}
          </>
        ))
      ) : (
        <CircularProgress className="mx-auto" color="default"/>
      )}
    </WrapperContent>
  );
};

export default CareerJobs;
