import react from "react";

function Links(props) {
    return (
    <react.Fragment>
       {props.header ? <h3>Links</h3> : null}
        <a href={props.href}>
            {props.text}
        </a>
    </react.Fragment>)
  }

export default Links