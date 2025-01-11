"use client"
import Image from "next/image";
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const Saint1 = ({image, quote,saint, imgSize}) => {
    const { isVisible: isVisibleHeading, elementRef: elementRefHeading } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
    });

    return (

    <div 
    ref={elementRefHeading}
        className={`transition-opacity ease-in duration-[700ms] ${
          isVisibleHeading ? 'opacity-100' : 'opacity-0'
        }`}
    style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: "10px"} }>
        <Image
        src={image}
        width={imgSize}
        height={imgSize}
        alt={saint}
        className="rounded-lg pt-16 lg:pl-16"
        />
        <span style={{fontSize: '2.5rem', width: "65%", fontWeight: "100", textAlign: "center", margin: "auto", paddingTop: "20px"}}>&quot; {quote}&quot; <br/>-{saint}</span>
    </div>
    )
}

export default Saint1