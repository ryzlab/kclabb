import './App.css';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import LoginButton from './components/LoginButton';
import React from 'react';
import RestrictedResourceButton from './components/RestrictedResourceButton';
import UnauthenticatedButton from './components/UnauthenticatedButton';
const eventLogger = (event, error) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens) => {
  console.log("onKeycloakTokens", tokens);
};

function App() {
  return (
    <ReactKeycloakProvider initOptions={{
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    }}
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <React.StrictMode>
        <div className="App">
          
            <LoginButton></LoginButton>
            <RestrictedResourceButton></RestrictedResourceButton>
            <UnauthenticatedButton></UnauthenticatedButton>
        </div>
      </React.StrictMode>
    </ReactKeycloakProvider>
  );
}

export default App;
