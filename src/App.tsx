import React from "react";
export const App: React.FunctionComponent = () => {
    return (
        <>
            <p>hello {process.env.REACT_APP_ENVIRONMENT_NAME}</p>
        </>
    );
}