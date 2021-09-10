import React from 'react';
import ReactDOM from 'react-dom';

//<import_modules>  
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
//</import_modules>  



//<configure_msal> 
const configuration: Configuration = {
  auth: {
      clientId: "034ff080-d093-433d-915c-4f12ae03f100"
  }
};


const clientInstance = new PublicClientApplication(configuration);
//</configure_msal> 


const PageContent = () => {
  //<use_msal_context>  

  const { instance, accounts } = useMsal();
  
  //</use_msal_context>  

  const {name} = accounts[0]||{};

  //</check_logged_in_state>  
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (    
    <div>You are logged in. Welcome {name}.<br/>
      <button onClick={() => instance.logout()}>Logout</button> 
    </div>    
    ): 
    (  
      //<add_login_button>

      <div><button onClick={() => instance.loginPopup()}>Login</button> </div>

      //</add_login_button>
    );
 
  //</check_logged_in_state>  

}

//<use_msal_provider>

ReactDOM.render(
  <React.StrictMode>
        
    
    <MsalProvider instance={clientInstance}>
      <PageContent />
    </MsalProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

//</use_msal_provider>
