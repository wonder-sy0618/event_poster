
import $ from "zeptojs"

const getArea = () => {
  if ($("#_area").length > 0) $("#_area").remove();
  let area = $("<div></div>").attr("id", "_area").css("display", "none").appendTo($("body"));
  return area;
};

const loadImage = (imageUrl) => {
  return new Promise((resolve, reject) => {
    let imgObj = new Image();
    imgObj.src = imageUrl;
    imgObj.onload = () => {
      resolve(imgObj);
    }
  });
}

const rotateImage = (url, rotate) => {
  return new Promise((resolve) => {
    if (rotate % 360 == 0) {
      resolve(url)
      return;
    }
    //
    let area = getArea();
    let canvas = $('<canvas />').appendTo(area)[0];
    let ctx1 = canvas.getContext("2d");
    let image1 = new Image();
    image1.onload = function () {
      let niceWidth = document.body.clientWidth;
      let niceHeight = document.body.clientWidth * image1.height / image1.width ;
      canvas.width = (rotate % 180 == 0) ? niceWidth : niceHeight;
      canvas.height = (rotate % 180 == 0) ? niceHeight : niceWidth;
      //
        var xpos = canvas.width / 2;
        var ypos = canvas.height / 2;
        ctx1.save();
        //旋转图
       ctx1.translate(xpos, ypos);
        ctx1.rotate((rotate % 360) * Math.PI / 180);
        if (rotate % 180 == 0) {
          ctx1.translate(-xpos, -ypos);
        } else {
          ctx1.translate(-ypos, -xpos);
        }
        ctx1.drawImage(image1, 0, 0, niceWidth, niceHeight);
        ctx1.restore();
        //
        resolve(canvas.toDataURL("image/png"))
    }
    image1.src = url;
  })
}

const drawLocal = (opt, canvasWidth, canvasHeight, drawWidth, drawHeight) => {
  let drawLeft = 0;
  let drawTop = 0;
  switch (opt.local.split("-")[0]) {
    case 'right' :
      drawLeft = canvasWidth - drawWidth;
      break;
    case 'left' :
      drawLeft = 0;
      break;
    case 'middle' :
      drawLeft = (canvasWidth - drawWidth) / 2;
      break;
  }
  drawLeft = drawLeft + opt.posFixedLeft;
  switch (opt.local.split("-")[1]) {
    case 'top' :
      drawTop = 0;
      break;
    case 'bottom' :
      drawTop = canvasHeight - drawHeight;
      break;
    case 'middle' :
      drawTop = (canvasHeight - drawHeight) / 2;
      break;
  }
  drawTop = drawTop + opt.posFixedBottom
  return {
    left : drawLeft,
    top : drawTop
  }
}

// 合成图像
const merge = (backgroudImage, imageCustomerOption) => {
  let area = getArea();
  let canvas = $('<canvas />').appendTo(area)[0];
  let ctx = canvas.getContext("2d");
  //
  return rotateImage(
    backgroudImage,
    imageCustomerOption.backgroundRotate
  ).then((newBackgroundImage) => {
    return loadImage(newBackgroundImage)
  }).then((img) => {
    // 设置画布高度为页面基础宽度
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientWidth * img.height / img.width ;
    //
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    // 处理图片
    let promiseArray = [];
    for (let i=0; i<imageCustomerOption.treats.length; i++) {
      let opt = imageCustomerOption.treats[i];
      if (opt.action === 'watermark') {
        let promise = loadImage(opt.url).then((watermarkImg) => {
          let drawWidth = canvas.width * opt.sizePercent / 100;
          let drawHeight = drawWidth * watermarkImg.height / watermarkImg.width;
          let local = drawLocal(opt, canvas.width, canvas.height, drawWidth, drawHeight);
          ctx.drawImage(watermarkImg, local.left, local.top, drawWidth, drawHeight);
        });
        promiseArray.push(promise)
      } else if (opt.action === 'text') {
        ctx.font = opt.font;
        ctx.fillStyle = opt.fillStyle;
        let local = drawLocal(opt, canvas.width, canvas.height, 100, 100);
        ctx.fillText(opt.text, local.left, local.top);
      }
    }
    return Promise.all(
      promiseArray
    ).then(() => {
        return canvas.toDataURL("image/png")
    })
  })
}


export default {
  merge : merge
}
