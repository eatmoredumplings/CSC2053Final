import { useState, useContext } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";


function Login() {

  const { setVendor } = useContext(AuthContext);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await Axios.post("/api/auth/login", inputs, { withCredentials: true });
        await setVendor(response.data);
        window.location.href = '/'
    } catch (err) {
        alert(err.response.data);
    }
}



  return (
    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="login-screen p-10 grid h-screen w-1/2">
        <div className="flex flex-col justify-center bg-white text-black px-16">
          <p className="text-center text-accent text-5xl mb-7 font-extrabold">Puzzoh Portal</p>
          <p className="text-3xl"> Welcome vendors.</p>
          <p className="text-gray-500 text-lg mb-7">Please log in to the portal to manage your vouchers.</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
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
              <button className="mt-8 border-none bg-accent rounded-full text-white text-lg h-14 w-100 hover:bg-gray-500">SIGN IN</button>
              <div className="text-center mt-4">
                Don't have an account? {""}
                <a href="/register" className="text-blue-500 hover:font-bold">
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
