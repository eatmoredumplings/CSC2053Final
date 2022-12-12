import Axios from 'axios';
import { useState } from 'react';
import moment from 'moment';

const EditVoucher = ({ id, title, description, category, priceBefore, priceAfter, maxRedeem, expireDate }) => {

    const [inputs, setInputs] = useState({
        title: title,
        description: description,
        category: category,
        priceBefore: priceBefore,
        priceAfter: priceAfter,
        maxRedeem: maxRedeem,
        expireDate: moment(expireDate).format('YYYY-MM-DD')
    });

    const defaultDate = new Date(expireDate);
    defaultDate.setDate(defaultDate.getDate());
    const date = defaultDate.toISOString().substring(0, 10);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.delete(`api/voucher/${id}`, { withCredentials: true });
            const response2 = await Axios.post('api/voucher', inputs, { withCredentials: true });
            alert("Voucher has been edited.");
        } catch (err) {
            alert(err.response.data);
        }
    }

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCategory = (e) => {
        const { value } = e.target;
        setInputs((prev) => ({ ...prev, category: value }));
    };

    const handleDate = (e) => {
        const formatDate = moment(e.target.value).format('YYYY-MM-DD');
        setInputs((prev) => ({ ...prev, expireDate: formatDate }));
    }

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
                        defaultValue={title}
                        onChange={handleChange}
                    />

                    <label htmlFor="description" className="text-sm">
                        Description
                    </label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                        defaultValue={description}
                        onChange={handleChange}
                    />

                    <label htmlFor="category" className="text-sm">
                        Category
                    </label>
                    <select
                        className="select w-full max-w-xs bg-white"
                        onChange={handleCategory}
                    >
                        <option>Activity</option>
                        <option>Meal</option>
                    </select>
                    <div className="flex">
                        <label htmlFor="priceBefore" className="text-sm">
                            Price Before
                        </label>
                        <input
                            type="number"
                            id="priceBefore"
                            name="priceBefore"
                            className="bg-white rounded-md border border-solid border-black mb-4 text-lg h-12 px-3"
                            defaultValue={priceBefore}
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
                            defaultValue={priceAfter}
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
                        defaultValue={maxRedeem}
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
                        required
                        className="bg-white"
                        defaultValue={date}
                        onChange={handleDate}
                    />

                    <button
                        type="submit"
                        className="mt-8 border-none bg-accent rounded-full text-white text-lg h-14 w-100 hover:bg-gray-500">
                        EDIT VOUCHER
                    </button>
                </div>
            </form >
        </div>
    );
}

export default EditVoucher;