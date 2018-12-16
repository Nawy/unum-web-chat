import React, {Component} from 'react';
import CryptoJS from 'crypto-js'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textForEncrypt: '',
            encryptKey: '',
            textForDecrypt: '',
            decryptKey: '',
            result: ''
        }
    }

    handleTextForEncryptChange = (event) => {
        this.setState({textForEncrypt: event.target.value});
    };

    handleEncryptKeyChange = (event) => {
        this.setState({encryptKey: event.target.value});
    };

    handleTextForDecryptChange = (event) => {
        this.setState({textForDecrypt: event.target.value});
    };

    handleDecryptKeyChange = (event) => {
        this.setState({decryptKey: event.target.value});
    };

    getEncrypted = (text, key) => {
        const ciphertext = CryptoJS.AES.encrypt(text, key);
        console.log(CryptoJS.HmacSHA1("Message", "Key").toString());
        return ciphertext.toString();
    };

    getDecrypted = (text, key) => {
        const bytes  = CryptoJS.AES.decrypt(text, key);
        console.info("Bytes:", bytes);

        return bytes.toString(CryptoJS.enc.Utf8);
    };

    encryptClick = (event) => {
        this.setState({result: this.getEncrypted(this.state.textForEncrypt, this.state.encryptKey)});
    };

    decryptClick = (event) => {
        this.setState({result: this.getDecrypted(this.state.textForDecrypt, this.state.decryptKey)});
    };

    render() {
        return (
            <div className="App">

                Text For Encrypt:
                <input type="text" value={this.state.textForEncrypt} onChange={this.handleTextForEncryptChange}/>
                Key:
                <input type="text" value={this.state.encryptKey} onChange={this.handleEncryptKeyChange}/>
                <input type="submit" value="Encrypt" onClick={this.encryptClick}/>
                <br/>
                Decrypt:
                <input type="text" value={this.state.textForDecrypt} onChange={this.handleTextForDecryptChange}/>
                Key:
                <input type="text" value={this.state.decryptKey} onChange={this.handleDecryptKeyChange}/>
                <input type="submit" value="Decrypt" onClick={this.decryptClick}/>
                <p>Result: {this.state.result}</p>
            </div>
        );
    }
}

export default App;
