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
        <div>
            <button
                onClick={event => fetchResource()}>
                Ping without auth
            </button>
        </div>
    );
};

export default UnauthenticatedButton;