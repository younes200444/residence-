import { Outlet } from "react-router-dom";
import "./layout.css";

import logo from './componenet/img/logo.png';

const Layout = () => {
    return (
        <>
            <header className="navbar">
                <img style={{
                    width: '50px'
                }} src={logo} alt={'logo'}/>

                <nav className="menu">
                    <a href="/">NOTRE ASSOCIATION</a>
                    <a href="/">NOTRE ACCOMPAGNEMENT</a>
                    <a href="/">NOS LOGEMENTS</a>
                </nav>
            </header>

            <Outlet />
        </>
    );
};

export default Layout;