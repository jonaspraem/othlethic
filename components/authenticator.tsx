const Authenticator = () => {
  return (
    <div className="authenticator__wrapper">
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

        <div className="authenticator__button-group">
          <button className="button">sign up</button>
          <button className="button">log in</button>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Authenticator;