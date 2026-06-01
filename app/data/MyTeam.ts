import { StaticImageData } from "next/image";

interface teamProps {
    id: number;
    name: string;
    description: string;
    position: string;
    image: StaticImageData;
    location: string;

}

import teamImage1 from "@/public/images/team/b94da8b0c7884a55a40a56af635856be.jpg";
import teamImage2 from "@/public/images/team/1bd62f60f9ce82763172b9dccf580dae.png";
import teamImage3 from "@/public/images/team/519e168ba47fdd8eaae3ea3ed34d11ed.png";
import teamImage4 from "@/public/images/team/1bd62f60f9ce82763172b9dccf580dae.png";

export const MyTeam: teamProps[] = [
    {
        id: 1,
        name: "Victor Abalawe",
        description: "Technology leader driving product innovation and smooth technical operations.",
        position: "CEO",
        location: "Mzuzu, Luwinga",
        image: teamImage4,
    },
    {
        id: 2,
        name: "Favour Maneno",
        description: "Customer-first sales manager with expertise in building strong client relationships.",
        position: "Sales Manager",
        location: "Mzuzu, Luwinga",
        image: teamImage2,
    },
    {
        id: 3,
        name: "Samuel Mafunga",
        description: "Full-stack web developer focused on fast, responsive ecommerce experiences.",
        position: "Web Developer",
        location: "Lilongwe, Area 25",
        image: teamImage3,
    },
    {
        id: 4,
        name: "Cherby Chirwa",
        description: "Technology leader driving product innovation and smooth technical operations.",
        position: "CTO",
        location: "Mzuzu, Luwinga",
        image: teamImage4,
    },
    {
        id: 5,
        name: "Fortunate Banda",
        description: "Creative graphic lead who brings visual stories to life across digital and print media.",
        position: "Graphic Designer",
        location: "Mzuzu, City Centre",
        image: teamImage1,
    },

]