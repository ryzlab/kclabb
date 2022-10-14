const UnauthenticatedButton = () => {

    function fetchResource() {
        fetch('http://localhost:8080/ping')
            .then((response) => response.json())
            .then((responseData) => { console.log(responseData) })
            .catch((error) => {
                console.log("Error: " + error);
            });
    }

    return (
        <button
            onClick={event => fetchResource()}>
            Ping without auth
        </button>
    );
};

export default UnauthenticatedButton;