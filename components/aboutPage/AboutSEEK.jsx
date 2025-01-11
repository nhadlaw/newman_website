

import Image from 'next/image';
const tempText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
import React from "react";
import { eventsPageSubHeadingStyle, eventsPageSubHeadingTextStyle } from '../../constants/stylingConstants';

const AboutSEEK = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center'>
                <h1 className={eventsPageSubHeadingStyle}>{"SEEK Conference"}</h1>
                <p className={eventsPageSubHeadingTextStyle}>{"The next SEEK conference will happen on Jan 1-5 2026. "}</p>
                <a
                    href={""}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "300px" }}
                    className="text-center mt-4 text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-indigo-700 hover:shadow-lg transition-all duration-300"
                >
                    Sign Up for SEEK 2026
                </a>
            </div>
            <div className="items-center"  style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
                    <div className='flex flex-col w-[70%] lg:w-[45%] mt-8'>
                        <p className={'text-4xl font-bold mt-4 text-left text-white'}>What is SEEK?</p>
                        <p className={'text-2xl font-light mt-4 text-left text-white'}>{tempText}</p>
                    </div>
                    <Image
                    src={'/AboutSEEK.png'}
                    width={400}
                    height={400}
                    alt={"About John Henry Newman"}
                    className="rounded-lg pt-16 lg:pl-16"
                    />
                </div>
        </div>
    )
}

export default AboutSEEK