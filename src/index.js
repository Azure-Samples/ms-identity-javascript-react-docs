import React from 'react';
import ReactDOM from 'react-dom';
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";


const configuration: Configuration = {
  auth: {
      clientId: "034ff080-d093-433d-915c-4f12ae03f100"
  }
};

const clientInstance = new PublicClientApplication(configuration);


const PageContent = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <div>You are logged in. Welcome. <br/>
      <button onClick={() => instance.logout()}>Logout</button> 
    </div>
    
    ): 
    (
    <div><button onClick={() => instance.loginPopup()}>Login</button> </div>
    );

}

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={clientInstance}>
      <PageContent />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
