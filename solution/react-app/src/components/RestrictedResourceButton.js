import { useKeycloak } from "@react-keycloak/web";

const RestrictedResourceButton = () => {
    const { keycloak } = useKeycloak();

    function fetchRestrictedResource(token) {
        fetch('http://localhost:8080/ping', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((responseData) => { console.log(responseData) })
            .catch((error) => {
                console.log("Error: " + error);
            });
    }

    return (
        <button
            disabled={!keycloak.authenticated}
            onClick={event => fetchRestrictedResource(keycloak.token)}>
            Ping
        </button>
    );
};

export default RestrictedResourceButton;