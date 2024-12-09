"use client"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Drawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* Button to open the drawer */}
            <button
                className="p-2 bg-blue-500 text-white rounded"
                onClick={toggleDrawer}
            >
                <div className="flex items-center">

                    <GiHamburgerMenu />
                    {/* <span className="px-2">
                        Resources
                    </span> */}
                </div>
            </button>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full z-30 bg-gray-200 text-white transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } w-64 shadow-lg`}
            >
                <button
                    className="absolute top-4 right-4 p-2 bg-red-500 rounded"
                    onClick={toggleDrawer}
                >
                    <IoClose/>
                </button>
                <nav className="p-4 text-black">
                    <ul>
                        <li className=" text-2xl my-2">
                            <a href="/" className="hover:underline">
                                The List
                            </a>
                        </li>
                        <li className=" text-2xl my-2">
                            <a href="https://tally.so/r/wAWvqe" className="hover:underline">
                                Join the List
                            </a>
                        </li>
                        <li className=" text-2xl my-2">
                            <a href="/newsletter" className="hover:underline">
                                Newsletter
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50"
                    onClick={toggleDrawer}
                ></div>
            )}
        </div>
    );
}
