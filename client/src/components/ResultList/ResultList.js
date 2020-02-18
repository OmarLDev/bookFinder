import React from "react";
import Card from "../Card";

function ResultList(props){
    return(
        <div className="container">
            <ul className="list-group">
                {props.result.map(result => {
                    return <li className="list-group-item" key={result.id}>
                                <Card   title={result.volumeInfo.title} 
                                        body={result.volumeInfo.description}
                                        isSaved={props.isSaved}/>
                            </li>
                })}
            </ul>
        </div>
    );
}

export default ResultList;