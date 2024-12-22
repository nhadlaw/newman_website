"use client"
import Image from "next/image";
import {useIsVisible } from '../src/app/hooks/useIsVisible';


const Saint2 = () => {
    const { isVisible: isVisibleHeading, elementRef: elementRefHeading } = useIsVisible({
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (

    <div 
    ref={elementRefHeading}
        className={`transition-transform ease-in duration-100 ${
          isVisibleHeading ? 'translate-x-0' : 'translate-x-96'
        }`}
    style={{width: "100%", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"} }>
        
        <span style={{fontSize: "40px", width: "65%", fontWeight: "100", textAlign: "center", margin: "auto", paddingTop: "20px"}}>"We need something which the world cannot give, and this it is which the Gospel has supplied." <br/>- St. John Henry Newman</span>
        <Image
            src="/PhillipNeri.png"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-lg lg:pr-16"
        />
    </div>
    )
}

export default Saint2