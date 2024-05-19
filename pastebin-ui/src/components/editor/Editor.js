import React, {Component} from 'react';

class Editor extends Component {

    render(){
        return (
        <div class="row mt-5">
            <div class="col-12">
                <textarea rows="20" cols="100" placeholder="Enter your text to be shared..."></textarea>
            </div>
            <div className="col-12">
                <button className="btn btn-success">Publish text</button>
            </div>
        </div>
        );
    }
}

export default Editor;