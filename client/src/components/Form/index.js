import React from "react";
import "./style.css";

function Form(props){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label>Book Title</label>
                    <input type="text" 
                            className="form-control" 
                            id="bookSearch" 
                            placeholder="Book title"
                            value={props.value}
                            name="search"
                            onChange={props.handleInputChange}/>
                </div>
                <button type="submit" 
                        className="btn btn-primary"
                        onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    );
}

export default Form;