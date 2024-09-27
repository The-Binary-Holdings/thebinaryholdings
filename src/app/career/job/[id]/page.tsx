"use client";
import { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { useParams } from "next/navigation";

import ApplyJobModal from "@/components/ApplyJobModal";
import WrapperContent from "@/components/WrapperContent";
import { careersDAO, Job } from "@/common/DAO/careers.dao";

const JobDeTail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [job, setJob] = useState<Job>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    careersDAO.getById(params.id).then((data: Job) => {
      setJob(data);
    });
  }, [params.id]);

  return (
    <WrapperContent>
      {(isOpen && job) && <ApplyJobModal isOpen={isOpen} toggleOpen={setIsOpen} job={job} />}
      <div className="pt-24 lg:pt-32">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl">{job?.title}</h1>
          <div className="flex gap-x-4 my-4 text-white/75">
            <p>{job?.type}</p>
            <p>{job?.location}</p>
          </div>
          <div className="bg-[#131313] rounded-sm p-8 lg:grid grid-cols-3 gap-x-10">
            <div className="col-span-2 md:border-r border-solid border-white/10 lg:pr-6">
              <div>
                <p className="text-2xl">Job Overview</p>
                <p className="text-sm lg:text-base mt-4 leading-7 text-white/75">
                  {job?.desc}
                </p>
              </div>
              <div className="mt-10">
                <p className="text-2xl">Responsibilities</p>
                <ul className="text-sm lg:text-base mt-4 leading-7 text-white/75 list-disc">
                  {job?.responsibilities.map((resp, index) => (
                    <li key={index} className="my-4 ml-8">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <p className="text-2xl">Requirements:</p>
                <ul className="text-sm lg:text-base mt-4 leading-7 text-white/75 list-disc">
                  {job?.requirements.map((resp, index) => (
                    <li key={index} className="my-4 ml-8">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex gap-x-4 items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex-1 inline-block bg-white text-black px-12 h-12 rounded-md font-semibold"
                >
                  APPLY NOW
                </button>
                <div className="flex justify-center items-center h-12 w-12 rounded-lg border-2 border-solid border-white">
                  <IoShareSocial className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};

export default JobDeTail;
