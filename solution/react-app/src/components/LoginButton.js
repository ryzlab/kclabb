import { useKeycloak } from "@react-keycloak/web";

const LoginButton = () => {
    const { keycloak } = useKeycloak();

    return (
    <div>
        {!keycloak.authenticated && (
            <button onClick={() => keycloak.login()} >
                Login
            </button>
        )}

        {!!keycloak.authenticated && (
            <button onClick={() => keycloak.logout()}>
                Logout ({keycloak.tokenParsed.preferred_username})
            </button>
        )}
    </div>
    );
};

export default LoginButton;