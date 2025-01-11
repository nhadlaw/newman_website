"use client"
import Image from "next/image";
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const Saint2 = ({image, quote, saint, imgSize}) => {
    const { isVisible: isVisibleHeading, elementRef: elementRefHeading } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (

    <div 
    ref={elementRefHeading}
    className={`mt-16 transition-opacity ease-in duration-[700ms] ${
        isVisibleHeading ? 'opacity-100' : 'opacity-0'
      }`}
    style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
        
        <span style={{fontSize: "2.5rem", width: "65%", fontWeight: "100", textAlign: "center", margin: "auto", paddingTop: "20px"}}>&quot;{quote}&quot; <br/>- {saint}</span>
        <Image
            src={image}
            width={imgSize}
            height={imgSize}
            alt="Picture of the author"
            className="rounded-lg lg:pr-16"
        />
    </div>
    )
}

export default Saint2