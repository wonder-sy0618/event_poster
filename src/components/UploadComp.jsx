import React, { Component } from 'react';

import { Flex, WhiteSpace, InputItem, ImagePicker, WingBlank, Toast } from 'antd-mobile';


class UploadComp extends Component {

  onChange(fileHandler) {
    // let comp = this;
    // let reader = new FileReader();
    // Toast.loading();
    // console.log(fileHandler)
    // reader.onload = function() {
    // //  console.log(reader.result)
    //   let base64 = reader.result
    //   comp.props.onFileUploadChange(base64)
    //   Toast.hide();
    // }
    // reader.readAsDataURL(fileHandler.target.files[0]);
    this.props.onContentUploadChange(fileHandler[0].url)
  }

  onInput(text) {
    this.props.onContentUploadChange(undefined, text)
  }

  render() {
    return (
      <div>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <span>请输入姓名：</span>
            </Flex.Item>
            <Flex.Item>
              <InputItem
                  type="text"
                  onChange={this.onInput.bind(this)}
                ></InputItem>
            </Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item>
              <span>请选择照片：</span>
            </Flex.Item>
            <Flex.Item>
              <ImagePicker
              onChange={this.onChange.bind(this)}
               ></ImagePicker>
            </Flex.Item>
          </Flex>
          <Flex>
            <Flex.Item>
              <span>定制处理：</span>
            </Flex.Item>
            <Flex.Item>
              <button onClick={this.props.onBackgroundImageRotate.bind(this)} >背景旋转</button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    )
  }

}

export default UploadComp
