import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import qrcode from "../../image/qrcode.png"

import "./DefaultsActive.css"

import UploadComp from "../UploadComp"
import ShowComp from "../ShowComp"

const imageCustomerOption = {
  backgroundRotate : 0,
  textColor : "white",
  treats : [{
    action : "text",
    text : "我是圆梦使者",
    font : "normal small-caps normal 20px 雅黑",
    fillStyle : "white",
    local : "left-top",
    posFixedLeft : 10,
    posFixedBottom : 50
  }, {
    action : "text",
    text : "",
    font : "normal small-caps bold 40px arial",
    fillStyle : "red",
    local : "left-top",
    posFixedLeft : 140,
    posFixedBottom : 50
  }, {
    action : "text",
    text : "我为留守儿童圆梦古城项目代言",
    font : "normal small-caps normal 20px 雅黑",
    fillStyle : "white",
    local : "left-top",
    posFixedLeft : 10,
    posFixedBottom : 80
  }, {
    action : "text",
    text : "献一份爱心，",
    font : "normal small-caps normal 26px 冬青",
    fillStyle : "white",
    local : "left-bottom",
    posFixedLeft : 20,
    posFixedBottom : -10
  }, {
    action : "text",
    text : "圆一份梦想",
    font : "normal small-caps normal 26px 冬青",
    fillStyle : "white",
    local : "left-bottom",
    posFixedLeft : 70,
    posFixedBottom : 20
  }, {
    action : "text",
    text : "邀请您关注",
    font : "normal small-caps normal 16px arial",
    fillStyle : "white",
    local : "left-bottom",
    posFixedLeft : 10,
    posFixedBottom : 80
  }, {
    action : "text",
    text : "留守儿童圆梦古城",
    font : "normal small-caps normal 16px arial",
    fillStyle : "red",
    local : "left-bottom",
    posFixedLeft : 100,
    posFixedBottom : 80
  }]
}

imageCustomerOption.treats.push({
  action : "watermark",
  url : qrcode,
  sizePercent : 30,
  local : "right-bottom",
  posFixedLeft : -10,
  posFixedBottom : -10
})


class DefaultsActive extends Component {
  render() {
    imageCustomerOption.treats[1].text = (this.props.inputName ? this.props.inputName : "")
    return (
      <div className="active_defaults" >
        <div className="title" >
          <h1>留守儿童圆梦古城</h1>
          <div style={{padding: "0px 10px"}}>众人拾柴火焰高，我们一起做圆梦使者，让这个冬天不再寒冷，我们帮28名乡村少年和8名乡村教师圆梦。</div>
          <div style={{padding: "10px 10px"}}>本应用所有操作全部在当前手机上进行，不会上传/收集您的任何信息，请放心使用。</div>
          <div style={{padding: "10px 10px", color : 'red'}}>图片制作完成后，请长按图片保存到手机。</div>
        </div>
        <WhiteSpace size="lg" />
        <UploadComp {...this.props}
            imageCustomerOption={imageCustomerOption}
            onBackgroundImageRotate={(() => {
                imageCustomerOption.backgroundRotate += 90;
                this.setState({})
            }).bind(this) }
            onChangeTextColor={((color) => {
                for (var i=0; i<imageCustomerOption.treats.length; i++) {
                  if (imageCustomerOption.treats[i].fillStyle == imageCustomerOption.textColor) {
                    imageCustomerOption.treats[i].fillStyle = color.hex;
                  }
                }
                imageCustomerOption.textColor = color.hex;
                this.setState({})
            }).bind(this) }
          ></UploadComp>
        <ShowComp {...this.props}
          imageCustomerOption={imageCustomerOption}
          ></ShowComp>
      </div>
    );
  }
}
export default DefaultsActive
