import React from "react";
import "./style.css";

function Form(props){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="bookSearch">Book Title</label>
                    <input type="text" className="form-control" id="bookSearch" placeholder="Book title"/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
}

export default Form;