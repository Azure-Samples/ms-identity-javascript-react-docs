import React from 'react';
import ReactDOM from 'react-dom';
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";


const configuration: Configuration = {
  auth: {
      clientId: "034ff080-d093-433d-915c-4f12ae03f100"
  }
};

const clientInstance = new PublicClientApplication(configuration);


const PageContent = () => {
  const { instance } = useMsal();

  return (
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
