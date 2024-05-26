import React, { Component } from 'react';
import pastebinAxios from '../../pastebin-axios';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import './Editor.css'

class Editor extends Component {

    state = {
        text: null,
        textValid: false
    }

    saveText() {
        pastebinAxios.post("/text", this.state.text, { headers: { 'Content-Type': 'text/plain' } }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    onChangeText(newText) {
        const isTextValid = newText !== null || newText !== undefined;
        this.setState({ text: newText, textValid: isTextValid });
    }

    render() {
        return (
            <>
                <h4 className="mt-5">Share new text with your friends...</h4>
                <div className="row mt-2 p-3">
                    <div className="col-4">
                        <textarea className="textbox" rows="2" placeholder="Enter your text to be shared..." value={this.state.text} onChange={(event) => this.onChangeText(event.target.value)}></textarea>
                    </div>
                    <div className="col-4">
                        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='en'>
                            <DateTimePicker placeholder="Set Expiry date and time" />
                        </LocalizationProvider>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <button className="btn btn-primary" onClick={() => this.saveText()} disabled={!this.state.textValid}>Publish text</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Editor;