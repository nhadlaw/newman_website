import Image from 'next/image';
const BUTTON_FONT_SIZE = '27px'

const CircularButton = ({ imageSrc, textInButton, bottomText, innerBgColor, outerBgColor }) => {
  return (
    <div className={`flex relative items-center justify-center w-56 h-56 border rounded-full ${outerBgColor} shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-white`}>
      <div className={`flex relative items-center justify-center w-48 h-48 border-4 rounded-full ${innerBgColor} bg-opacity-100 overflow-hidden`}>
        {/* Circle container */}

        {/* Image in the center */}
        <Image
          src={imageSrc}
          alt="Button Image"
          width={300}
          height={300}
          className="z-0 opacity-80 overflow-hidden"
        />
        <div className='flex flex-col absolute text-center'>
          <p 
            style={{fontSize: BUTTON_FONT_SIZE, whiteSpace: 'nowrap'}}
            className="text-white font-bold z-10 drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)]">
            {textInButton}
          </p>
          <p 
            style={{fontSize: BUTTON_FONT_SIZE, whiteSpace: 'nowrap'}}
            className="text-white font-bold z-10 drop-shadow-[0_8.2px_1.2px_rgba(0,0,0,0.8)]">
            {bottomText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularButton;





