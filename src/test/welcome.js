import React from "react";

function Welcome(props){
    return(
        <>
        <h1>
            Hello, {props.name}!
        </h1>
        <p>
            Thanks for visiting our Testing React Deployment Application. <br />
            Dear {props.name}, this app is under build stage. We can give the 
            update once it available.<br/><br/>
        </p>
        <p>
            Regards,<br/>
            Shaik Mulla Karimulla<br/>
            Application developer
        </p>
        </>
    );
}

export default Welcome