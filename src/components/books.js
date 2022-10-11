import React from "react";
import { BookItem } from "./bookItem";

// class is marked for export
export class Books extends React.Component {
    render() {
        // map function calls BookItem component for each book present in the book state
        return this.props.books.map(
            (book)=>{
                // books from book state passed into BookItem
                return <BookItem book={book} key={book.isbn}/>
            }
        );
        
    }
    
}