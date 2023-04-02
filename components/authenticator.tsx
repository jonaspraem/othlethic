import Link from "next/link";

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
          <button className="button button__grow" type="submit">log in</button>
        </div>

        <hr/>

        <p>Dont have an account? <Link href="/">Sign up</Link></p>
      </form>
    </div>
    </div>
    
  );
}

export default Authenticator;