import { useKeycloak } from "@react-keycloak/web";

const LoginButton = () => {
    const { keycloak } = useKeycloak();

    const loginButton = (
        <button onClick={() => keycloak.login()}>
            Login
        </button>
    )

    const signOutButton = (
        <button onClick={() => keycloak.logout()}>
            Logout ({keycloak.tokenParsed?.preferred_username})
        </button>
    )

    return (
        keycloak.authenticated ? signOutButton : loginButton
    );
};

export default LoginButton;