import React from "react";
import { Books } from "./books";

// class is marked for export
export class Read extends React.Component {
    // state saves an array of books in a json format to be passed down into its child component
    state = {
        books: [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]
    }
    render() {
        return (
            <div>
                {/* books state is passed down into books component */}
                <Books books={this.state.books}/>
            </div>
        );
    }
}