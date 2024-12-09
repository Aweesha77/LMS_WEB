import SideBar from './SideBar';
import Home from './Home';


const Layout = () => {
    return (
        <div>
            {/* Left Sidebar */}
            <SideBar />

            {/* Right Section */}
            <Home />
            
        </div>
    );
};

export default Layout;