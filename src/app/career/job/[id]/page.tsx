"use client";
import { useState } from "react";
import { IoShareSocial } from "react-icons/io5";

import ApplyJobModal from "@/components/ApplyJobModal";
import WrapperContent from "@/components/WrapperContent";

const JobDeTail = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrapperContent>
      {isOpen && <ApplyJobModal isOpen={isOpen} toggleOpen={setIsOpen} />}
      <div className="pt-24 lg:pt-32">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl">Head of Sales</h1>
          <div className="flex gap-x-4 my-4 text-white/75">
            <p>Full Time</p>
            <p>Bankok</p>
          </div>
          <div className="bg-[#131313] rounded-sm p-8 lg:grid grid-cols-3 gap-x-10">
            <div className="col-span-2 md:border-r border-solid border-white/10 lg:pr-6">
              <div>
                <p className="text-2xl">Job Overview</p>
                <p className="text-sm lg:text-base mt-4 leading-7 text-white/75">
                  We are looking for a creative individual to join our team as a
                  3D artist. The responsibilities of the 3D artist include
                  creating still and moving images using computers, creating 3D
                  models of products, and managing multiple projects while
                  adhering to deadlines. To be a successful 3D artist, you
                  should be detail-oriented, flexible, and a good team player.
                  Ultimately, a top-notch 3D artist is creative and artistic
                  with a strong working knowledge of color, texture, and light
                  as well as industry-standard software.
                </p>
              </div>
              <div className="mt-10">
                <p className="text-2xl">Responsibilities</p>
                <ul className="text-sm lg:text-base mt-4 leading-7 text-white/75 list-disc">
                  <li className="my-4 ml-8">
                    Using 3D modeling, texture, mapping, and other techniques to
                    create graphics, visual effects, and animations.
                  </li>
                  <li className="my-4 ml-8">
                    Understanding the project requirements and conceptualizing
                    creative ideas.
                  </li>
                  <li className="my-4 ml-8">
                    CStrong working knowledge of industry-standard software,
                    including 3ds Max, Blender, SketchUp, and Maya.
                  </li>
                  <li className="my-4 ml-8">
                    Excellent creativity and artistic skills.
                  </li>
                  <li className="my-4 ml-8">
                    An eye for composition, realism, texture, color, and
                    lighting.
                  </li>
                  <li className="my-4 ml-8">
                    Good communication and teamwork skills.
                  </li>
                  <li className="my-4 ml-8">
                    Excellent time management skills.
                  </li>
                  <li className="my-4 ml-8">
                    Willingness to remain up-to-date on the latest creative
                    software and hardware.
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <p className="text-2xl">Requirements:</p>
                <ul className="text-sm lg:text-base mt-4 leading-7 text-white/75 list-disc">
                  <li className="my-4 ml-8">
                    3D artists in medical illustration must have a working
                    knowledge of biology.
                  </li>
                  <li className="my-4 ml-8">
                    A strong portfolio of previous work and completed projects.
                  </li>
                  <li className="my-4 ml-8">
                    Creating storyboards to visualize scenes and create a
                    realistic environment for our Products.
                  </li>
                  <li className="my-4 ml-8">
                    Receiving feedback from directors, animators, designers, and
                    editing your creations based on the comments received.
                  </li>
                  <li className="my-4 ml-8">
                    Reviewing 3D arts and recommending improvements.
                  </li>
                  <li className="my-4 ml-8">
                    Creating 3D sculpts and assets to meet artistic standards.
                  </li>
                  <li className="my-4 ml-8">
                    Troubleshooting any problems that arise during work on a
                    project.
                  </li>
                  <li className="my-4 ml-8">
                    Meeting with clients, Designers, and Directors to discuss
                    and review projects and deadlines
                  </li>
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
