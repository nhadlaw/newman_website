
const BibleStudyDisplay = ({ items }) => {
    return (
        <div id="bibleStudySignUp">
            <p 
                className={`pt-40 text-center font-bold text-black text-5xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl`}
                style={{ paddingRight: "20px", paddingLeft: "20px" }}
            >
                Join a Bible Study
            </p>
            <p className="text-center text-2xl pr-24 pl-24 font-light mt-4">
            We offer Bible study groups for undergrad and grad women, as well as student-athletes at Carnegie Mellon. All are welcome—no religious background or skill level required! Contact anyone listed below or email us at newman@gmail.com to get connected.            </p>
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
                                    {item.study_name}
                                </h2>
                                <p className="text-xl font-light text-white text-center pb-4 px-2">
                                    {item.description}
                                </p>
                                <a
                                    href={`sms:${item.contact_phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{width: '60%'}}
                                    className="text-center text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
                                    >
                                    <div>
                                    <p>
                                        {`Contact ${item.contact_name}`}
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

export default BibleStudyDisplay;
