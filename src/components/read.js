import React from "react";
import { Books } from "./books";
import axios from "axios";

// class is marked for export
export class Read extends React.Component {
    componentDidMount() {
        // axios makes a http request to the url
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        // when http response arrives, a callback function is run
        .then((response)=>{
            this.setState({
                books: response.data
            })
        })
        .catch(function(error){
            console.log(error);
        });
    }
    state = {
        books: [ ]
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