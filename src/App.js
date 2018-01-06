import React, { Component } from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import actives from "./components/actives/main"

class App extends Component {

  onContentUploadChange(fileImageBase64, inputName) {
    let obj = {};
    if (fileImageBase64) obj.fileImageBase64 = fileImageBase64;
    if (inputName) obj.inputName = inputName;
      this.setState(obj)
  }

  render() {
    return (
      <actives.defaults
          {...this.state}
          onContentUploadChange={this.onContentUploadChange.bind(this)}
       />
    );
  }
}

export default App;
