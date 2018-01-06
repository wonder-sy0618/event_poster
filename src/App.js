import React, { Component } from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import actives from "./components/actives/main"

class App extends Component {

  onFileUploadChange(fileImageBase64) {
      this.setState({
        fileImageBase64 : fileImageBase64
      })
  }

  render() {
    return (
      <actives.defaults
          {...this.state}
          onFileUploadChange={this.onFileUploadChange.bind(this)}
       />
    );
  }
}

export default App;
