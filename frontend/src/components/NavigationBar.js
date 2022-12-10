import { Link } from 'react-router-dom';
import {
    MdOutlineSpaceDashboard,
    MdOutlineExtension,
    MdOutlineDocumentScanner,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {

    const navigate = useNavigate();
    
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await Axios.get('/api/auth/logout', { withCredentials: true });
            await localStorage.removeItem('vendor');
            navigate('/login')
        } catch (err) {
            alert(err.response.data)
        }
    };
    
    return (
        <div className="bg-gray-100 text-black w-64 space-y-6 px-5 py-5">
            <Link to='/' className="flex items-center space-x-2 px-3.5">
                <img src="../puzzohLogo.png" alt='logo' className="w-10 h-10" />
                <p className="text-xl font-bold text-primary">Puzzoh Portal</p>
            </Link>

            <nav>
                <Link to='/' className="block py-3 px-4 rounded hover:bg-orange-100 flex">
                    <MdOutlineSpaceDashboard className="text-2xl text-gray-600 mr-5" />
                    <h1 className="font-semibold">Dashboard</h1>
                </Link>
                <Link to='/vouchers' className="block py-3 px-4 rounded hover:bg-orange-100 flex">
                    <MdOutlineExtension className="text-2xl text-gray-600 mr-5" />
                    <h1 className="font-semibold">Vouchers</h1>
                </Link>
                <Link to='/documents' className="block py-3 px-4 rounded hover:bg-orange-100 flex">
                    <MdOutlineDocumentScanner className="text-2xl text-gray-600 mr-5" />
                    <h1 className="font-semibold">Documents</h1>
                </Link>
                <Link to='/settings' className="block py-3 px-4 rounded hover:bg-orange-100 flex">
                    <MdOutlineSettings className="text-2xl text-gray-600 mr-5" />
                    <h1 className="font-semibold">Settings</h1>
                </Link>
                <div className="my-10 mr-3 border border-2 block py-3 px-4 rounded-md hover:bg-orange-100 flex" onClick={handleLogout}>
                    <MdOutlineLogout className="text-2xl text-gray-600 mr-5" />
                    <h1 className="font-semibold">Logout</h1>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;
