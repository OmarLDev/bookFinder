import axios from "axios";

export default {
    // Function to search for books in the Google Books API
    searchBooks : function(name){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+name.split(" ").join("+"));
    },
    // Function to search for all books stored in the DB
    getBooks : function(){
        return axios.get("/api/books");
    }
}