import React, { Component } from 'react';

import { Flex, WhiteSpace, InputItem, ImagePicker, WingBlank, Toast, Button } from 'antd-mobile';
import { SketchPicker, TwitterPicker } from 'react-color'


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

  onChangeTextColor() {

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
              <Button onClick={this.props.onBackgroundImageRotate.bind(this)}
                style={{marginBottom : 10}} >背景旋转</Button>
              <TwitterPicker
                color={ this.props.imageCustomerOption.textColor } width="100"
                colors={['#0693E3', '#FCB900', '#ABB8C3', '#00D084']}
                triangle="hide"
                onChangeComplete={this.props.onChangeTextColor.bind(this)}
              />
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    )
  }

}

export default UploadComp
