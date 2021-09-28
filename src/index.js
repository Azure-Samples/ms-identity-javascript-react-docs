import React from 'react';
import ReactDOM from 'react-dom';

// <ms_docref_import_modules>
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
// </ms_docref_import_modules>

// <ms_docref_configure_msal>
const configuration: Configuration = {
  auth: {
      clientId: "034ff080-d093-433d-915c-4f12ae03f100"
  }
};

const clientInstance = new PublicClientApplication(configuration);
// </ms_docref_configure_msal>

const PageContent = () => {

  // <ms_docref_use_msal_context>
  const { instance, accounts } = useMsal();
  // </ms_docref_use_msal_context>

  const {name} = accounts[0]||{};

  // </ms_docref_check_logged_in_state>
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <div>You are logged in. Welcome {name}.<br/>
      <button onClick={() => instance.logout()}>Logout</button>
    </div>
    ):
    (

      // <ms_docref_add_login_button>
      <div><button onClick={() => instance.loginPopup()}>Login</button> </div>
      // </ms_docref_add_login_button>

      );
  // </ms_docref_check_logged_in_state>

}

// <ms_docref_use_msal_provider>
ReactDOM.render(
  <React.StrictMode>

    <MsalProvider instance={clientInstance}>
      <PageContent />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// </ms_docref_use_msal_provider>
