import React, {Component} from 'react';
import pastebinAxios from '../../pastebin-axios';

class Editor extends Component {

    state = {
        text : null,
        textValid : false
    }

    saveText(){
        pastebinAxios.post("/text",this.state.text, {headers:{'Content-Type':'text/plain'}}).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    onChangeText(newText) {
        const isTextValid = newText !== null || newText !== undefined;
        this.setState({text : newText, textValid : isTextValid});
    }

    render(){
        return (
        <div class="row mt-5">
            <div class="col-12">
                <textarea rows="20" cols="100" placeholder="Enter your text to be shared..." value={this.state.text} onChange={(event) => this.onChangeText(event.target.value)}></textarea>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" onClick={() => this.saveText()} disabled={!this.state.textValid}>Publish text</button>
            </div>
        </div>
        );
    }
}

export default Editor;