"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Drawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <div className="absolute top-0 left-0 z-50">
            {/* Button to open the drawer */}
            <button
                className="p-2 bg-slate-50 m-2 text-slate-700 rounded shadow-md hover:bg-slate-100 transition"
                onClick={toggleDrawer}
            >
                <div className="flex items-center">
                    <GiHamburgerMenu size={20} />
                </div>
            </button>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full z-30 bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } w-64 shadow-xl`}
            >
                <button
                    className="absolute top-4 right-4 p-2 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition"
                    onClick={toggleDrawer}
                >
                    <IoClose size={20} />
                </button>
                <nav className="p-6">
                    <ul>
                        {[
                            { href: "/", label: "Home" },
                            { href: "/discover", label: "Discover" },
                            { href: "/fund", label: "Fund/Support" },
                            { href: "/hire", label: "Hire Talent" },
                            { href: "/apply", label: "Join the List" },
                            { href: "/newsletter", label: "Newsletter" },
                        ].map((item, index) => (
                            <li key={index} className="my-4">
                                <Link
                                    href={item.href}
                                    className="text-lg font-semibold hover:underline hover:text-slate-300 transition"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={toggleDrawer}
                ></div>
            )}
        </div>
    );
}
