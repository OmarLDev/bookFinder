import React from "react";

function Card(props){
    return(
        <div className="card">
        <div className="card-header">
            {props.title}
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
            <p>{props.body}</p>
            </blockquote>
        </div>
        <a href="#" onClick={props.view} class="btn btn-primary">View</a>
        <a href="#" onClick={props.handleSaveOrDelete} class="btn btn-primary">{props.isSaved ? "Save" : "Delete"}</a>
        </div>
    );
}

export default Card;