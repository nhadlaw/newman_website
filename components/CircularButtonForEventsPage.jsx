import Image from 'next/image';
const BUTTON_FONT_SIZE = '20px'

const CircularButton = ({ imageSrc, textInButton, bottomText, bgColor }) => {
  return (
    <div className={`flex relative items-center justify-center w-44 h-44 border rounded-full bg-black shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-white`}>
      <div className="flex relative items-center justify-center w-36 h-36 border-4 rounded-full bg-black bg-opacity-80">
        {/* Circle container */}

        {/* Image in the center */}
        <Image
          src={imageSrc}
          alt="Button Image"
          width={200}
          height={200}
          className="z-0 opacity-60 overflow-hidden"
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





