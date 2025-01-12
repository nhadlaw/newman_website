import Image from 'next/image';
import { sectionTextStyle } from '../../constants/stylingConstants';
import ServiceContactLinks from './ServiceContactLinks';



const AboutService = ({subheading, discordLink, seeMoreLink}) => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="items-center"  style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
                    <div className={sectionTextStyle}>
                        <p >{subheading}</p>
                        <ServiceContactLinks discordLink={discordLink} seeMoreLink={seeMoreLink}/>
                    </div>
                    <Image
                    src={'/ServiceIcon.svg'}
                    width={500}
                    height={500}
                    alt={"Service Icon"}
                    className="rounded-lg pt-16 lg:pl-16"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutService;