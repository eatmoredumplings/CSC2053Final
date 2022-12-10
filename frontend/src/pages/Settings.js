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
    </div>
  );
}

export default Settings;
