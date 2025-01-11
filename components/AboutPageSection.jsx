import { aboutHeadingStyling, subheadingStyling } from '../constants/stylingConstants';


const AboutPageSection = ({heading, sectionComponents, bgColor}) => {
    return (
        <div className={`${bgColor} py-32`}>
            <p className={`${aboutHeadingStyling}`}>{heading}</p>
            <div className='flex flex-col gap-24 items-center'>
                {sectionComponents.map(function(item, index){
                    return (
                        <div key={index}>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutPageSection