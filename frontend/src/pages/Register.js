import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();
    
    const [inputs, setInputs] = useState({
        vendorName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post("/api/auth/signup", inputs, { withCredentials: true });
            alert(response.data);
            navigate('/login');
        } catch (err) {
            alert(err.response.data);
        }
    }

    return (
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="login-screen p-10 grid h-screen w-1/2">
                <div className="flex flex-col justify-center bg-white text-black px-16">
                    <p className="text-center text-accent text-5xl mb-7 font-extrabold">Puzzoh Portal</p>
                    <p className="text-3xl"> Welcome new vendors. </p>
                    <p className="text-gray-500 text-lg mb-7">Please register to access the portal.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="vendorName" className="text-sm">
                                Enter vendor name:
                            </label>
                            <input
                                type="text"
                                id="vendorName"
                                name="vendorName"
                                className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                                required
                                onChange={handleChange}
                            />

                            <label htmlFor="email" className="text-sm">
                                Enter email:
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                                required
                                onChange={handleChange}
                            />

                            <label htmlFor="password" className="text-sm">
                                Enter password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                                required
                                onChange={handleChange}
                            />
                            <button className="mt-8 border-none bg-accent rounded-full text-white text-lg h-14 w-100 hover:bg-gray-500">SIGN UP</button>
                            <div className="text-center mt-4">
                                Already have an account? {""}
                                <a href="/login" className="text-blue-500 hover:font-bold">
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;