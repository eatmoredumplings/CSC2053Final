import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const NewVoucher = () => {

    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        category: 'Meal',
        priceBefore: 0,
        priceAfter: 0,
        maxRedeem: 0,
        expireDate: ''
    });

    const [date, setDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setInputs({ ...inputs, expireDate: moment(date).format('YYYY-MM-DD') });
            const response = await Axios.post('api/voucher', inputs, { withCredentials: true });
            alert(response.data); 
        } catch (err) {
            alert(err.response.data);
        }
    }

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm">
                        Voucher Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                        required
                        onChange={handleChange}
                    />

                    <label htmlFor="description" className="text-sm">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                        onChange={handleChange}
                    />

                    <label htmlFor="category" className="text-sm">
                        Category
                    </label>
                    <select
                        className="select w-full max-w-xs bg-white"
                        onChange={handleChange}
                    >
                        <option>Activity</option>
                        <option>Meal</option>
                    </select>

                    <div className="flex">
                        <label htmlFor="priceBefore" className="text-sm">
                            Price Before
                        </label>
                        <textarea
                            type="number"
                            id="priceBefore"
                            name="priceBefore"
                            className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                            required
                            onChange={handleChange}
                        />

                        <label htmlFor="priceAfter" className="text-sm">
                            Price After
                        </label>
                        <input
                            type="number"
                            id="priceAfter"
                            name="priceAfter"
                            className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="maxRedeem" className="text-sm">
                        Maximum number of redeems
                    </label>
                    <input
                        type="number"
                        id="maxRedeem"
                        name="maxRedeem"
                        className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                        required
                        onChange={handleChange}
                    />

                    <label htmlFor="expireDate" className="text-sm">
                        Expiration Date
                    </label>
                    <input
                        type="date"
                        id="expireDate"
                        name="expireDate"
                        className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                        required
                        onChange={(date) => setDate(date)}
                    />
                    <button 
                    type="submit"   
                    className="mt-8 border-none bg-accent rounded-full text-white text-lg h-14 w-100 hover:bg-gray-500">CREATE VOUCHER</button>
                </div>
            </form>
        </div>
    );
}

export default NewVoucher;