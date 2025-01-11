
import Image from 'next/image';
const tempText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
import { sectionTextStyle } from '../../constants/stylingConstants';
const AboutNewman = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="items-center"  style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
                    <Image
                    src={'AboutJohnHenryNewman.svg'}
                    width={500}
                    height={500}
                    alt={"About John Henry Newman"}
                    className="rounded-lg pt-16 lg:pl-16"
                    />
                    <p className={sectionTextStyle}>{tempText}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutNewman;