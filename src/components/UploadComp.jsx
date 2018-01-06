import React, { Component } from 'react';
import { Toast } from 'antd-mobile';


class UploadComp extends Component {

  onChange(fileHandler) {
    let comp = this;
    let reader = new FileReader();
    Toast.loading();
    reader.onload = function() {
    //  console.log(reader.result)
      let base64 = reader.result
      comp.props.onFileUploadChange(base64)
      Toast.hide();
    }
    reader.readAsDataURL(fileHandler.target.files[0]);
  }

  render() {
    return (
      <input type="file"
         accept="image/gif, image/jpeg, image/png"
         onChange={this.onChange.bind(this)}
        ></input>
    )
  }

}

export default UploadComp
