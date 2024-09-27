import type { NextPage } from "next";
import Head from "next/head";
import TeamMember from "@/components/TeamSection"; // Adjust the import path based on your directory structure

const Team: NextPage = () => {
  // You would fetch these details from an API or have them in some state management
  const teamMembers = [
    {
      name: "Manit Parikh",
      role: "Founder and CEO",
      imageUrl: "/team/manit_parikh.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/manitparikh/",
    },
    {
      name: "Manit Ghogar",
      role: "Cofounder and CMO",
      imageUrl: "/team/manit_ghogar.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/manitghogar/",
    },
    {
      name: "Siddharth Sahi",
      role: "Cofounder and CBO",
      imageUrl: "/team/siddharth_sahi.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/sidsahi/",
    },
    {
      name: "Elton Tay",
      role: "VP Product",
      imageUrl: "/team/elton_tay.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/eltontay/",
    },
    {
      name: "George Papas",
      role: "VP Technology",
      imageUrl: "/team/George.png", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/georgecpapas/",
    },
    {
      name: "Prashant Gupta",
      role: "CTO",
      imageUrl: "/team/prashant_gupta.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/pmgupta911/",
    },
    {
      name: "Manish Jha ",
      role: "MD - Digital Social",
      imageUrl: "/team/manish_jha.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/mjha86/",
    },
    {
      name: "Rajkumar Tiwari",
      role: "VP Shared Services",
      imageUrl: "/team/Rajkumar.jpg",
      linkedinUrl: "https://www.linkedin.com/in/raj-t-04489b1b/",
    },
    {
      name: "Sarah Intarapromma",
      role: "Chief Of Staff",
      imageUrl: "/team/sarah.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/sarah-intarapromma-544b3ba/",
    },
    {
      name: "Man Pham",
      role: "Business Development Director - SEA",
      imageUrl: "/team/man_pham.jpeg",
      linkedinUrl:
        "https://www.linkedin.com/in/Business Development Director - SEA",
    },
    {
      name: "Jean Paul Rosel",
      role: "Business Development Director - Philippines",
      imageUrl: "/team/JeanPaul.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/paulrosel/",
    },
    {
      name: "Durjoy Guha Neog",
      role: "Business Development Consultant",
      imageUrl: "/team/dujoy.png",
      linkedinUrl: "https://www.linkedin.com/in/paulrosel/",
    },
    {
      name: "Eric Liu",
      role: "MD - Digital RW",
      imageUrl: "/team/eric_liu.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/ericliutmt/",
    },
    {
      name: "Daniel Grove",
      role: "CEO - Move To Earn",
      imageUrl: "/team/daniel_grove.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/daniel-grove-81b3501a3/",
    },
  ];

  const partnerMembers = [
    {
      name: "David Ng",
      role: "Serial Entrepreneur & Investor",
      imageUrl: "/team/david_ng.jpeg", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/davidngmw/",
    },
    {
      name: "Mario Nawfal",
      role: "Founder & CEO , IBC",
      imageUrl: "/team/mario_nawfal.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/mario-nawfal/",
    },
    {
      name: "Nikita Sachdev",
      role: "CEO, Luna Media",
      imageUrl: "/team/nikita_sachdev.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/nikitasachdev/",
    },
    {
      name: "Nathnael Seat",
      role: "Investor at Ninepine Technologies",
      imageUrl: "/team/nathanael_seet.png", // Replace with actual path to image
      linkedinUrl: "https://www.linkedin.com/in/nathanael-seet-9726371aa",
    },
    {
      name: "Gilly Strauss",
      role: "Chairman, Strauss Capital",
      imageUrl: "/team/gilly_strauss.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/gilly-strauss-6ba149",
    },
    {
      name: "Bhawnish Malhotra",
      role: "Global Head of Solution, Nokia",
      imageUrl: "/team/bhawnish_agarwal.jpeg",
      linkedinUrl: "http://linkedin.com/in/bhawnish-bobby-malhotra-84a8212",
    },
    {
      name: "Dr. Joseph Thomas",
      role: "Director, Diebold Nixdorf",
      imageUrl: "/team/joseph_thomas.jpeg",
      linkedinUrl: "http://linkedin.com/in/drjosephthomas",
    },
    {
      name: "Subin Bhatia",
      role: "Sr. Advisor & Bain & Co.",
      imageUrl: "/team/subin_bhatia.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/subinbhatia",
    },
    {
      name: "Olivier Letant",
      role: "Partner & Kearney",
      imageUrl: "/team/oliver_letant.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/olivier-letant-wharton",
    },
    {
      name: "Joanne",
      role: "Advisor",
      imageUrl: "/team/joanne_wood.jpg",
      linkedinUrl: "https://www.linkedin.com/in/joanne-wood-a4a2486/",
    },
    {
      name: "Shishir Bharti",
      role: "Advisor",
      imageUrl: "/team/Shishir.png",
      linkedinUrl: "https://www.linkedin.com/in/shishirbharti/",
    },
    // {
    //   name: "Patricia Auer",
    //   role: "CIO",
    //   imageUrl: "/team/patricia_auer.jpeg",
    //   linkedinUrl: "https://www.linkedin.com/in/patricia-auer-91b7518/",
    // },
  ];

  return (
    <div>
      <div className="pt-16 md:px-8">
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
      <div className="pt-16 md:px-8">
        <main className="bg-black text-white p-10">
          <section>
            <h2 className="text-4xl font-bold mb-10">Our Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
