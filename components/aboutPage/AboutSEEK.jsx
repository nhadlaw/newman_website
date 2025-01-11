

import Image from 'next/image';
import React from "react";
import { aboutPageSubHeadingStyle, eventsPageSubHeadingTextStyle } from '../../constants/stylingConstants';

const AboutSEEK = ({subheading, signupLink, seekDesc, seekImg}) => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center'>
                <h1 className={aboutPageSubHeadingStyle}>{"SEEK Conference"}</h1>
                <p className={eventsPageSubHeadingTextStyle}>{subheading}</p>
                <a
                    href={signupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "300px" }}
                    className="text-center mt-4 text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-cmu-maroon hover:shadow-lg transition-all duration-300"
                >
                    {`Sign Up for SEEK ${(new Date()).getFullYear() + 1}!`}
                </a>
            </div>
            <div className="items-center"  style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
                    <div className='flex flex-col w-[70%] lg:w-[45%] mt-8'>
                        <p className={'text-4xl font-bold mt-4 text-left text-white'}>What is SEEK?</p>
                        <p className={'text-2xl font-light mt-4 text-left text-white'}>{seekDesc}</p>
                    </div>
                    <Image
                    src={seekImg}
                    width={400}
                    height={400}
                    alt={"About SEEK"}
                    className="rounded-lg pt-16 lg:pl-16"
                    />
                </div>
        </div>
    )
}

export default AboutSEEK