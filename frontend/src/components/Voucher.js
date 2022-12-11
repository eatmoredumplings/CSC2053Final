import moment from 'moment';

const Voucher = ({ title, description, category, priceBefore, priceAfter, maxRedeem, expireDate }) => {

  const expDate = moment(expireDate).format('MM-DD-YYYY');

  return (
    <div className="card bg-slate-200 shadow-xl w-full sm:w-72 h-80 rounded-lg">
      <figure><img src="https://placeimg.com/640/280/arch" alt="Image"/></figure>
      <div className="card-body">
        <h2 className="card-title">{title} {''} <span className={category === 'Meal' ? "bg-accent badge border-none rounded" : "bg-green-500 badge border-none rounded"}>{category}</span></h2>
        <p>{description}</p>
        <p><span className="line-through">${priceBefore}</span> ${priceAfter}</p>
        <div className="badge badge-outline">{maxRedeem} remaining</div>
        <p>Expiration date: <span className="italic">{expDate}</span></p>
      </div>
    </div>
  )
}

export default Voucher;