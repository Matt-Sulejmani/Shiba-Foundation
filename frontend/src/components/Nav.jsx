function Nav(){
    return (
    <nav className="w-full h-24 flex justify-between">
        <div className="top-0 left-0 w-1/3 h-full bg-slate-800 rounded-br-full">
        </div>
        <ul className="hidden md:block">
            <li className="nav_links"><a href="">Lifestyle</a></li>
            <li className="nav_links"><a href="">Research</a></li>
            <li className="nav_links"><a href="">Forum</a></li>
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