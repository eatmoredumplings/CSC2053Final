import Axios from 'axios';
import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Settings() {

  const { vendor, setVendor } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    vendorName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.patch('api/')
    }
    catch {

    }
  };

  return (
    <div className='bg-gray-100 w-1/2'>
      <h1 className="text-4xl mb-12">Account Settings</h1>
      <form className="flex flex-col gap-4" autocomplete="off" onSubmit={handleEdit}>
        <label htmlFor="vendorName">
          Change vendor name:
        </label>
        <input
          type="text"
          id="vendorName"
          name="vendorName"
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="email">
          Change email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="password">
          Change password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <button className='border border-black rounded bg-accent text-white'>Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;
