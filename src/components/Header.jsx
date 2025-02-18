import { FcLike } from "react-icons/fc";
import { IoCart } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (index, href) => {
        setSelectedLink(index);

        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    }

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Breeds", href: "/breeds" },
        { label: "Shop", href: "/shop" },
        { label: "Gallery", href: "/gallery" }
    ];

    return (
        <>
            <div className="lg:max-w-[1600px] my-5 flex align-middle mx-auto justify-evenly flex-wrap flex-row items-center font-semibold">

                <div className="flex flex-row items-center flex-wrap space-x-10">
                    <a href="/" className="w-28 text-center"><h1 style={{color:'black',fontSize:'30px',fontWeight:'bold'}}>Petnic</h1></a>

                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={index.href}
                            className={`${selectedLink === index ? "text-blue-400 underline" : "hover:underline hover:text-blue-800"} && cursor-pointer`}
                            onClick={() => handleLinkClick(index)}
                        >
                            {link.label}
                        </a>
                    ))}

                </div>

                <div className="flex flex-row justify-center items-center flex-wrap space-x-5">
                    <div style={{borderColor:'black'}}  className="border-2 border-blue-400 rounded-full pl-5 pr-2 py-2 flex">
                        <input type="text" placeholder="Search....." className="outline-none text-sm" />
                        <button type="submit"><AiOutlineSearch className="rounded-full" style={{ color: "white", backgroundColor: "black", padding: "5px", fontSize: "30px" }} /></button>
                    </div>
                    {/* like sign */}
                    <div>
                        <a href="/"><FcLike style={{ fontSize: "20px" }} /></a>
                    </div>
                    {/* cart sign */}
                    <div style={{borderColor:'black'}} className="border-2 border-blue-400 rounded-lg font-bold flex space-x-2 py-3 px-5">
                        <button className="block"><IoCart style={{ color: "black", fontSize: "20px" }} /></button>
                        <p className="text-sm">2 Pets</p>
                    </div>
                    <div style={{borderColor:'black'}} className="border-2 border-blue-400 rounded-lg font-bold flex space-x-2 py-3 px-5">
                        <Link to={'/tologin'}><button className="block">Login </button></Link>
                    </div>
                </div>

            </div>
        </>
    )
}