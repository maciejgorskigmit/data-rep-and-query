import React from "react";
import Card from "react-bootstrap/Card";

// class is marked for export
export class BookItem extends React.Component {
    render() {
        return (
            // card used for nicer ui layout
            <Card style={{width: '40rem'}}>
                <Card.Body>
                    {/* card title and text display values from the book property */}
                    <Card.Title as="h2">{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <img src={this.props.book.thumbnailUrl} width="250" height="300"></img>
                        <h4>{this.props.book.authors[0]}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}