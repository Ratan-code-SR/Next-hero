import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const navItem = [
        {
            title:"Home",
            path:"/home"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Services",
            path:"/services"
        },
        {
            title:"Blog",
            path:"/blog"
        },
        {
            title:"Contact",
            path:"/contact"
        },
    ]
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {navItem.map((item) => (
                                <li key={item.path}>
                                    <Link className="hover:text-primary" href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                    <Link href={"/"}>
                    <Image alt="logo" src={"/assets/logo.svg"} height={60} width={100}/>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItem.map((item) => (
                                <li key={item.path}>
                                    <Link className="hover:text-primary" href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;