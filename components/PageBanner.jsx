import Navbar from "./Navbar";

const PageBanner = ({pageName, pageImg, pageDesc}) => {
    return (
        <div>
            <Navbar/>
            <div
                className="relative h-[100vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${pageImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div
                    className="text-center items-center flex flex-col"
                >
                    <h1 style={{fontSize: '5.0rem'}} className="relative z-10 font-bold pt-16">{pageName}</h1>
                    <p 
                    style={{width: "70%"}}
                    className="font-light text-xl text-white z-10 relative">{pageDesc}</p>
                </div>
            </div>
        </div>
    )};

export default PageBanner;