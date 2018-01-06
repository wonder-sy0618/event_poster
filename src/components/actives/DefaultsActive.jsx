import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import qrcode from "qrcode";

import "./DefaultsActive.css"

import UploadComp from "../UploadComp"
import ShowComp from "../ShowComp"

const imageCustomerOption = {
  treats : [{
    action : "text",
    text : "我叫石莹，我为留守儿童圆梦古城项目代言",
    local : "left-middle",
    posFixedLeft : 0,
    posFixedBottom : 100
  }]
}

qrcode.toDataURL("http://www.baidu.com", (err, url) => {
  imageCustomerOption.treats.push({
    action : "watermark",
    url : url,
    sizePercent : 20,
    local : "right-bottom",
    posFixedLeft : -10,
    posFixedBottom : -10
  })
})

export default (props) => (
  <div className="active_defaults" >
    <div className="title" >
      <h1>活动名称</h1>
      <span>行走的力量</span>
    </div>
    <WhiteSpace size="lg" />
    <UploadComp {...props} />
    <ShowComp {...props}
      imageCustomerOption={imageCustomerOption}
      ></ShowComp>
  </div>
)
