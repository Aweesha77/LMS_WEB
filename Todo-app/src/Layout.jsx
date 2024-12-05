// Layout.js
import SideBar from './SideBar';
import Home from './Home';


const Layout = () => {
    return (
        <div className="flex">
            {/* Left Sidebar */}
            <SideBar />

            {/* Right Section */}
            <Home />
            
        </div>
    );
};

export default Layout;