"use client"
import Image from "next/image";
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const Saint1 = ({image, quote,saint}) => {
    const { isVisible: isVisibleHeading, elementRef: elementRefHeading } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
    });

    return (

    <div 
    ref={elementRefHeading}
        className={`transition-opacity ease-in duration-1000 ${
          isVisibleHeading ? 'opacity-100' : 'opacity-0'
        }`}
    style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: "10px"} }>
        <Image
        src={image}
        width={400}
        height={400}
        alt="Picture of the author"
        className="rounded-lg pt-16 lg:pl-16"
        />
        <span style={{fontSize: "40px", width: "65%", fontWeight: "100", textAlign: "center", margin: "auto", paddingTop: "20px"}}>&quot; {quote}&quot; <br/>-{saint}</span>
    </div>
    )
}

export default Saint1