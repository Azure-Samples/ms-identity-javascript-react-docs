import React from 'react';
import ReactDOM from 'react-dom';
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";


const configuration: Configuration = {
  auth: {
      clientId: "034ff080-d093-433d-915c-4f12ae03f100"
  }
};

const clientInstance = new PublicClientApplication(configuration);

ReactDOM.render(
  <React.StrictMode>
    <div>Hello, World.</div>
  </React.StrictMode>,
  document.getElementById('root')
);
