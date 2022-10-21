import React from "react";

// class is marked for export
export class Create extends React.Component {
    // constructor binds events to methods
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    // on change methods called when their respective value is changed
    onChangeBookTitle(e) {
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover: e.target.value
        })
    }
    onChangeAuthor(e){
        this.setState({
            author: e.target.value
        })
    }
    render () {
        return (
            <div>
                <h3>This is the create component</h3>
                {/* form is used for inputting book data */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}