import React from "react";
import Team from "./team/team";
const teams = [
    {
        id: "1",
        name: "Md. Sohan Talukder Akash",
        designation: "CEO & Chairman",
        image: "akash",
    },
    {
        id: "2",
        name: "Adifa Vuiya Kathy",
        designation: "CEO & Chairman",
        image: "kathy",
    },
    {
        id: "3",
        name: "Koli Mondal Mira",
        designation: "CEO & Chairman",
        image: "koli",
    },
];
const AboutUs = () => {
    return (
        <div>
            <div className='container mx-auto py-16 mt-16 !px-6 max-w-[1180px]'>
                <h1 className='text-center mb-7 text-2xl md:text-3xl lg:text-4xl font-bold'>
                    About Our Team
                </h1>
                <div className=' flex flex-wrap md:flex-nowrap gap-7 justify-center md:justify-between items-center'>
                    {teams.map((team) => (
                        <Team key={team.id} team={team} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
