function Settings() {
  return (
    <div style={{ marginLeft: '50px', marginTop: '50px' }}>
      <div>
        <h1 style={{ fontSize: '30px' }}>Account Settings</h1>
        <p>Change username:{'\n'}</p>
        <input type="text" className="input input-bordered w-full max-w-xs" />
        <br></br><br></br>

        <p>Change e-mail:{'\n'}</p>
        <input type="text" className="input input-bordered w-full max-w-xs" />
        <br></br><br></br>

        <p>Change password:{'\n'}</p>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>
      <div style={{ paddingTop: '25px' }}>
        <h1 style={{ fontSize: '30px' }}>Business Information</h1>
        <p>Change business name:{'\n'}</p>
        <input type="text" className="input input-bordered w-full max-w-xs" />
        <br></br><br></br>

        <p>Change business address:{'\n'}</p>
        <input type="text" placeholder="Street address" className="input input-bordered w-full" />
        <div style = {{paddingTop:'10px'}} className="flex">
          <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" style = {{marginRight: '15px'}}/>
          <input type="text" placeholder="State" className="input input-bordered w-full max-w-xs" style = {{marginRight: '15px'}}/>
          <input type="text" placeholder="Zip Code" className="input input-bordered w-full max-w-xs" />
        </div>
        <br></br><br></br>

        <p>Change contact information of representative:{'\n'}</p>
        <div style = {{paddingBottom:'10px'}}>
          <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" style = {{marginRight: '15px'}}/>
          <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
        </div>
        <br></br><br></br>

        <p>Change % of discount willing to give:{'\n'}</p>
        <input type="range" min="0" max="100" value="25" className="range max-w-xs" step="25" />
        <div className="w-full flex justify-between text-xs px-2 max-w-xs">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
        <br></br><br></br>

        <p>Change type of vouchers:{'\n'}</p>
        <select className="select w-full max-w-xs">
          <option disabled selected>Choose voucher type</option>
          <option>Restaurant</option>
          <option>Non-Restaurant</option>
        </select>
        <br></br><br></br>

      </div>
    </div>
  );
}

export default Settings;
