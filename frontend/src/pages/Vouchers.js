import AuthContext from '../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { useQuery } from 'react-query';
import Voucher from '../components/Voucher';
import NewVoucher from '../components/NewVoucher';

const Vouchers = () => {
  const { data, status } = useQuery(['vouchers'], async () => {
    const response = await Axios.get("api/vouchers", { withCredentials: true });
    return response.data;
  });

  return (
    <div>
      <h2 className='font-extrabold text-3xl mb-4'>Vouchers</h2>
      <div className="grid grid-cols-3 gap-8">
        <NewVoucherButton />
        {data?.map((voucher) => (
          <Voucher key={voucher.id} title={voucher.title} description={voucher.description} category={voucher.category}
            priceBefore={voucher.priceBefore} priceAfter={voucher.priceAfter} maxRedeem={voucher.maxRedeem} expireDate={voucher.expireDate} />
        ))}
      </div>
    </div>
  )
}

const NewVoucherButton = () => {

  return (
    <div>
      <input type="checkbox" id="voucher-modal" className="modal-toggle" />
      <label htmlFor="voucher-modal" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <NewVoucher />
        </label>
      </label>

      <label for="voucher-modal" className="card bg-slate-200 shadow-xl w-full sm:w-72 h-80 rounded-lg">
        <div className="card-body">
          <p>Create new voucher</p>
        </div>
      </label>
    </div>
  );

}

export default Vouchers;
