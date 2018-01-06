import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import qrcode from "qrcode";

import "./DefaultsActive.css"

import UploadComp from "../UploadComp"
import ShowComp from "../ShowComp"

const imageCustomerOption = {
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
    text : "石宇涵",
    font : "oblique small-caps bold 40px arial",
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
    posFixedLeft : 60,
    posFixedBottom : 80
  }, {
    action : "text",
    text : "留守儿童圆梦古城",
    font : "normal small-caps normal 16px arial",
    fillStyle : "red",
    local : "left-bottom",
    posFixedLeft : 150,
    posFixedBottom : 80
  }, {
    action : "text",
    text : "项目 → ",
    font : "normal small-caps normal 16px arial",
    fillStyle : "white",
    local : "left-bottom",
    posFixedLeft : 285,
    posFixedBottom : 80
  }]
}

qrcode.toDataURL("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc0db45f411664b2e&redirect_uri=https%3A%2F%2Fssl.gongyi.qq.com%2Fm%2Fweixin%2Fdetail.htm%3Fshowwxpaytitle%3D1%26et%3Dfx%26pid%3D38080&response_type=code&scope=snsapi_base#wechat_redirect", (err, url) => {
  imageCustomerOption.treats.push({
    action : "watermark",
    url : url,
    sizePercent : 30,
    local : "right-bottom",
    posFixedLeft : -10,
    posFixedBottom : -10
  })
})

export default (props) => (
  <div className="active_defaults" >
    <div className="title" >
      <h1>留守儿童圆梦古城</h1>
      <div style={{padding: "0px 10px"}}>众人拾柴火焰高，我们一起做圆梦使者，让这个冬天不再寒冷，我们帮28名乡村少年和8名乡村教师圆梦。</div>
    </div>
    <WhiteSpace size="lg" />
    <UploadComp {...props} />
    <ShowComp {...props}
      imageCustomerOption={imageCustomerOption}
      ></ShowComp>
  </div>
)
