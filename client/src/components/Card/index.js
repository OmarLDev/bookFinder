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
        <div className="btn-group-sm" role="group">
            <button type="submit" onClick={props.view} className="btn btn-primary">View</button>
            <button type="submit" onClick={props.handleSaveOrDelete} className="btn btn-primary">{props.isSaved ? "Save" : "Delete"}</button>
        </div>
        </div>
    );
}

export default Card;