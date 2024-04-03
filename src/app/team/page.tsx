import type { NextPage } from "next";
import Head from "next/head";
import TeamMember from "@/components/TeamSection"; // Adjust the import path based on your directory structure

const Team: NextPage = () => {
  // You would fetch these details from an API or have them in some state management
  const teamMembers = [
    {
      name: "Manit Parikh",
      role: "Founder and CEO",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/manitparikh/",
    },
    {
      name: "Manit Ghogar",
      role: "CMO",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/manitghogar/",
    },
    {
      name: "Elton Tay",
      role: "VP Product",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/eltontay/",
    },
    {
      name: "Patricia Auer",
      role: "CIO",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/patricia-auer-91b7518/",
    },
    {
      name: "Eric Lin",
      role: "MD - Digital RW",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/ericliutmt/",
    },
    {
      name: "Prashant Gupta",
      role: "CTO",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/pmgupta911/",
    },
    {
      name: "Siddarth Sahi",
      role: "CBO",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/sidsahi/",
    },
    {
      name: "Lavine Hemiani",
      role: "MD - Learn to Earn",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/lavine-hemlani-17932826/",
    },
    {
      name: "Manish Jha ",
      role: "MD - Digital Social",
      imageUrl: "/path-to-image.jpg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/mjha86/",
    },
  ];

  return (
    <div className="pt-16 md:px-8 ">
      <Head>
        <title>Our Team</title>
      </Head>

      <main className="bg-black text-white p-10">
        <section>
          <h2 className="text-4xl font-bold mb-10">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
