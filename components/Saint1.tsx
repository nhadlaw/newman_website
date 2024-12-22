"use client"
import Image from "next/image";
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const Saint1 = () => {
    const { isVisible: isVisibleHeading, elementRef: elementRefHeading } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
    });

    return (

    <div 
    ref={elementRefHeading}
        className={`transition-transform ease-in duration-1000 ${
          isVisibleHeading ? 'translate-x-[96]' : '-translate-x-96'
        }`}
    style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: "70px"} }>
        <Image
        src="/JohnHenryNewman.png"
        width={300}
        height={300}
        alt="Picture of the author"
        className="rounded-lg pt-16 lg:pl-16"
        />
        <span style={{fontSize: "40px", width: "65%", fontWeight: "100", textAlign: "center", margin: "auto", paddingTop: "20px"}}>"We need something which the world cannot give, and this it is which the Gospel has supplied." <br/>- St. John Henry Newman</span>
    </div>
    )
}

export default Saint1