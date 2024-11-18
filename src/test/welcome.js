import React from "react";

function Welcome(props){
    return(
        <>
        <h1>
            Hello, {props.name}!
        </h1>
        <p>
            Mr.{props.name}, please wait until our execute will reach you out.
            We are searching for a matched associate for you. <br/><br/>
            Thanks for your patience!!
        </p>
        </>
    );
}

export default Welcome