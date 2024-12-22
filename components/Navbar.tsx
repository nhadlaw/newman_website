"use client"
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-[rgba(114,28,64,0.95)] z-20">
            <div className="flex justify-between items-center h-full w-full px-8 2xl:px-16">
                <Link href="/">
                    <Image
                        src={"/Logo.png"}
                        alt={"Logo"}
                        width="90"
                        height="70"
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div style={{fontWeight: "200"}} className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/">
                            <li className="ml-10 hover:border-b text-xl text-white">Home</li>
                        </Link>
                        <Link href="/lit_and_prayer">
                            <li className="ml-10 hover:border-b text-xl text-white">Liturgy and Prayer</li>
                        </Link>
                        <Link href="/events">
                            <li className="ml-10 hover:border-b text-xl text-white">Events</li>
                        </Link>
                        <Link href="/retreats">
                            <li className="ml-10 hover:border-b text-xl text-white">Retreats</li>
                        </Link>
                        <Link href="/officers_and_ministers">
                            <li className="ml-10 hover:border-b text-xl text-white">Officers and Ministers</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} className="text-white"/>
                </div>
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-cmu-maroon p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
            >
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25} className="text-white"/>
                </div>
                
            </div>
            <div className="flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-white ml-10 hover:border-b text-xl"
                            >
                                Home
                            </li>
                        </Link>
                        <Link href="/lit_and_prayer">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-white ml-10 hover:border-b text-xl"
                            >
                                Liturgy and Prayer
                            </li>
                        </Link>
                        <Link href="/events">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-white ml-10 hover:border-b text-xl"
                            >
                                Events
                            </li>
                        </Link>
                        <Link href="/retreats">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-white ml-10 hover:border-b text-xl"
                            >
                                Retreats
                            </li>
                        </Link>
                        <Link href="/officers_and_ministers">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer text-white ml-10 hover:border-b text-xl"
                            >
                                Officers and Ministers
                            </li>
                        </Link>
                    </ul>
                </div> 
            </div>
        </nav>
    )
}

export default Navbar;