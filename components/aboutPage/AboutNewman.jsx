
import Image from 'next/image';
import { sectionTextStyle } from '../../constants/stylingConstants';
const AboutNewman = ({newmanImg, newmanTxt}) => {
    return (
        <div id="aboutNewman">
            <div className="flex flex-col items-center">
                <div className="items-center"  style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
                    <Image
                    src={newmanImg}
                    width={500}
                    height={500}
                    alt={"About John Henry Newman"}
                    className="rounded-lg pt-16 lg:pl-16"
                    />
                    <p className={sectionTextStyle}>{newmanTxt}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutNewman;