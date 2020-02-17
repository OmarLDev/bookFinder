import React from "react";
import API from "../../utils/api";
import Form from "../Form";

class Wrapper extends React.Component{
    state = {
        result: {}, 
        search: ""
    }

    searchBooks = bookName => {
        API.searchBooks(bookName)
            .then(res => this.setState({result: res.data}))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.searchBooks("");
    }

    render(){
        return(
            <Form/>
            {}
        )
    };
}

export default Wrapper;