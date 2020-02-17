import React from "react";
import API from "../../utils/api";
import Form from "../Form";

class Wrapper extends React.Component{
    state = {
        result: {}, 
        search: ""
    }

    // Function to search for books in the Google Books API
    searchBooks = bookName => {
        API.searchBooks(bookName)
            .then(res => this.setState({result: res.data}))
            .catch(err => console.log(err))
    }

    // Initializing with an empty search
    componentDidMount = () => {
        this.searchBooks("");
    }

    // Function to handle the search state
    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    // Function to handle the actual search
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchBooks(this.state.search)
    };

    render(){
        return(
            <Form 
                handleInputChange = {this.handleInputChange}
                handleFormSubmit = {this.handleFormSubmit}/>
        )
    };
}

export default Wrapper;