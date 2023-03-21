const Authenticator = () => {
  return (
    <div className="authenticator">
      <form className="authenticator__form">
        <div className="authenticator__form-item">
        <input className="authenticator__input"  placeholder=" "/>
        <label>username</label>
        
        </div>
        
        <div className="authenticator__form-item">
        <input className="authenticator__input" type="password"  placeholder=" " />
        <label>password</label>
        
        </div>
      </form>
    </div>
  );
}

export default Authenticator;