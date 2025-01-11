
"use client"
import {headerStyling, sectionMargin, aboutSubheadingStyling} from '../../constants/stylingConstants';
import {useIsVisible } from '../../src/app/hooks/useIsVisible';

const OurCommunityOptions = ({ items }) => {
    const { isVisible, elementRef } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
      });
    return (
        <div id="bibleStudySignUp" className={`transition-opacity ease-in duration-[700ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'}`} ref={elementRef}>
            <p className={aboutSubheadingStyling}>
            We offer Bible study groups for undergrad and grad women, as well as student-athletes at Carnegie Mellon. All are welcome—no religious background or skill level required! Contact anyone listed below or email us at newman@gmail.com to get connected.</p>
            {/* INFO COMPONENTS */}
            <div className="container mx-auto py-8 px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-cover bg-center h-96"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            {/* Full Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex flex-col">
                                <h2 className="text-4xl font-bold text-white">
                                    {item.title}
                                </h2>
                                <p className="text-xl font-light text-white text-center pb-4 px-2">
                                    {item.description}
                                </p>
                                <a
                                    href={""}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{width: '60%'}}
                                    className="text-center text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
                                    >
                                    <div>
                                    <p>
                                        {`Contact blank`}
                                    </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurCommunityOptions;
