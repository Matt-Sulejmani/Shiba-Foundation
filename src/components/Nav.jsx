import { Link } from 'react-router-dom';


function Nav(){

    const navLinkStyle = ({isActive}) => {
        return (isActive  ? "bg-primary p-1 rounded": "bg-primary p-1 rounded")
    }

    return (
    <nav className="w-full h-24 flex justify-between">
        <ul className="hidden md:block">
            <li className="nav_links"><Link to="/" className={navLinkStyle}>Home</Link></li>
            <li className="nav_links"><Link to="/forum" className={navLinkStyle}>Forum</Link></li>
            <li className="nav_links"><Link to="/showroom" className={navLinkStyle}>Showroom</Link></li>
            <li className="nav_links"><Link to="/research" className={navLinkStyle}>Research</Link></li>
        </ul>

        <ul className="hidden md:block">
            <li className="mx-4 flex">
                <img src=""/>
                <span className="cursor-default">Username</span>
            </li>
            <li className="mx-4" ><a href="/logout">Logout</a></li>
        </ul>
        <div onClick="" className="flex flex-col justify-between h-4 m-8 md:hidden
                        cursor-pointer">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
    </nav>);
}

export default Nav;