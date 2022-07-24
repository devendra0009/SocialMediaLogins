import "./App.css";
import { ContextHolder } from "@frontegg/rest-api";
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";
// import { useEffect } from "react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  // loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">

      {isAuthenticated ? (
        <div className='card'>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className="detail">
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Email: {user?.email}</span>
          </div>
          <div>
            <button className="button" onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
            <button className="button" onClick={() => handleClick()}>View Profile</button>
          </div>
        </div>
      ) : (
       <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={() => loginWithRedirect()}
            className="btn btn-primary btn-lg"
          >
            Click Me To Login
          </button>
        </div>
      )}
        </div>
  );
}
export default App;

