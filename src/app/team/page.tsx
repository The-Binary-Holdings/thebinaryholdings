import type { NextPage } from "next";
import Head from "next/head";
import TeamMember from "@/components/TeamSection"; // Adjust the import path based on your directory structure
import { partnerMembers, teamMembers } from "@/common/constants/teamPage";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const Team: NextPage = () => {
  return (
    <div className={inter.className}>
      <div className="pt-16 md:px-8">
        <main className="bg-team-1 bg-no-repeat bg-cover bg-center relative text-white p-10">
          <section className="flex flex-col items-center">
            <h2 className="text-6xl mb-10 uppercase font-thin italic">
              Our <b className="font-semibold not-italic">TEAM</b>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-24 w-full mt-10">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <div className="pt-16 md:px-8">
        <main className="bg-team-2 bg-no-repeat bg-cover bg-bottom relative text-white p-10">
          <section className="flex flex-col items-center">
            <h2 className="text-6xl mb-10 uppercase font-thin italic">
              Our <b className="font-semibold not-italic">advisors</b>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-24 w-full mt-10">
              {partnerMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Team;
