import Accordion from "../../components/Accordion/Accordion";
import React from "react";

const datas = [
    {
        title: "How do I pay",
        paragraph:
            "You cab pay with a card or via banking og you’re in Bangladesh. We will review your subscripstion autometicaly at the end of evey billing cycle.",
    },
    {
        title: "How to apply",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.",
    },
    {
        title: "Purchasing process",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.",
    },
    {
        title: "Usage guides",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.",
    },
    {
        title: "Usage guides",
        paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.",
    },
];
const TermsConditions = () => {
    return (
        <div>
            <div className='accordion_wrapper py-16 container mx-auto mt-16   flex flex-col !justify-center !items-center'>
                <ul className='accordion-list space-y-7'>
                    {datas.map((data) => (
                        <li className=' ' key={data?.title}>
                            <Accordion data={data} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TermsConditions;
