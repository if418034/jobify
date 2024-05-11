import Wrapper from "../assets/wrappers/BigSidebar";
import {useDashboardContext} from "../pages/DashboardLayout";
import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";


const BigSidebar = () => {
    const {showSidebar} = useDashboardContext();
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className="content">
                    <header>
                        <Logo/>
                    </header>
                    <NavLinks isBigSidebar/>
                </div>
            </div>
        </Wrapper>
    );
};

export default BigSidebar;
