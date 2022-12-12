import Axios from 'axios';
import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Settings() {

  const { vendor, setVendor } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    vendorName: "",
    email: "",
    password: "",
    vendorAddress: "",
    vendorDescription: "",
    representativeName: "",
    contactNumber: "",
    vendorLink: "",
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
    <div className='w-1/2'>
      <h1 className="text-4xl mb-12">Account Settings</h1>
      <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleEdit}>
        <label htmlFor="vendorName">
          Change vendor name:
        </label>
        <input
          type="text"
          id="vendorName"
          name="vendorName"
          value={inputs.vendorName}
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
          value={inputs.email}
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
          value={inputs.password}
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="vendorAddress">
          Change address:
        </label>
        <input
          type="text"
          id="vendorAddress"
          name="vendorAddress"
          value={inputs.vendorAddress}
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="vendorDescription">
          Change venue description:
        </label>
        <input
          type="text"
          id="vendorDescription"
          name="vendorDescription"
          value={inputs.vendorDescription}
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="representativeName">
          Change representative name:
        </label>
        <input
          type="text"
          id="representativeName"
          name="representativeName"
          value={inputs.representativeName}
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="contactNumber">
          Change contact number:
        </label>
        <input
          type="number"
          id="contactNumber"
          name="contactNumber"
          value={inputs.contactNumber}
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />

        <label htmlFor="vendorLink">
          Change business website:
        </label>
        <input
          type="text"
          id="vendorLink"
          name="vendorLink"
          value={inputs.vendorLink}
          className="input input-bordered w-full bg-white border border-black"
          onChange={handleChange}
        />
        <button className='border border-black rounded bg-accent text-white'>Save Changes</button>
        
      </form>
    </div>
  );
}

export default Settings;