

import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderBot from "./HeaderBot/HeaderBot";
import {useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation()

    console.log(location)

    return (
        <header className='header'>


            {
                location.pathname === '/' ? <HeaderTop/> : ''
            }

            <div className="container">
                <HeaderCenter/>
                <HeaderBot/>
            </div>

        </header>
    );
};

export default Header;