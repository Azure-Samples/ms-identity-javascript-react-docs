import React from 'react';
import ReactDOM from 'react-dom';

//<msdocs_ref_import_modules>  
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
//</msdocs_ref_import_modules>  



//<msdocs_ref_configure_msal> 
const configuration: Configuration = {
  auth: {
      clientId: "034ff080-d093-433d-915c-4f12ae03f100"
  }
};


const clientInstance = new PublicClientApplication(configuration);
//</msdocs_ref_configure_msal> 


const PageContent = () => {
  //<msdocs_ref_use_msal_context>  

  const { instance, accounts } = useMsal();
  
  //</msdocs_ref_use_msal_context>  

  const {name} = accounts[0]||{};

  //</msdocs_ref_check_logged_in_state>  
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (    
    <div>You are logged in. Welcome {name}.<br/>
      <button onClick={() => instance.logout()}>Logout</button> 
    </div>    
    ): 
    (  
      //<msdocs_ref_add_login_button>

      <div><button onClick={() => instance.loginPopup()}>Login</button> </div>

      //</msdocs_ref_add_login_button>
    );
 
  //</msdocs_ref_check_logged_in_state>  

}

//<msdocs_ref_use_msal_provider>

ReactDOM.render(
  <React.StrictMode>
        
    
    <MsalProvider instance={clientInstance}>
      <PageContent />
    </MsalProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

//</msdocs_ref_use_msal_provider>
