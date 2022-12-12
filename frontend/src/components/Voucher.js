import moment from 'moment';
import Axios from 'axios';
import EditVoucher from './EditVoucher';

const Voucher = ({ id, title, description, category, priceBefore, priceAfter, maxRedeem, expireDate }) => {

  const expDate = moment(expireDate).format('YYYY-MM-DD');

  const handleDelete = async (id) => {
    try {
      const response = await Axios.delete(`api/voucher/${id}`, { withCredentials: true });
      alert(response.data);
    }
    catch (err) {
      alert(err.response.data);
    }
  }

  const EditVoucherButton = () => {
    return (
      <div>
        <input type="checkbox" id="voucher-modal2" className="modal-toggle" />
        <label htmlFor="voucher-modal2" className="modal cursor-pointer">
          <label className="modal-box relative bg-white" htmlFor="1">
            <EditVoucher key={id} id={id} title={title} description={description} category={category}
              priceBefore={priceBefore} priceAfter={priceAfter} maxRedeem={maxRedeem} expireDate={expireDate} />
          </label>
        </label>

        <label htmlFor="voucher-modal2" className="btn btn-block btn-sm">
          <p>Edit Voucher</p>
        </label>
      </div>
    );
  }

  return (
    <div className="card bg-slate-300 shadow-xl w-full sm:w-72 h-80 rounded-lg">
      <figure><img src="https://placeimg.com/640/280/arch" alt="" /></figure>
      <div className="card-body text-sm">
        <h2 className="card-title">{title} {''} <span className={category === 'Meal' ? "bg-accent badge border-none rounded" : "bg-green-500 badge border-none rounded"}>{category}</span></h2>
        <p>{description}</p>
        <p><span className="line-through">${priceBefore}</span> ${priceAfter}</p>
        <div className="badge badge-outline">{maxRedeem} remaining</div>
        <p>Expiration date: <span className="italic">{expDate}</span></p>
        <div >
          <button className="btn btn-block btn-sm mb-3" onClick={() => handleDelete(id)}>Delete Voucher</button>
          <EditVoucherButton />
        </div>

      </div>
    </div>
  )



}



export default Voucher;