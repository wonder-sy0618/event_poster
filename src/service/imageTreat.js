
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
  return loadImage(backgroudImage).then((img) => {
    // 设置画布高度为背景图高度
    canvas.width = img.width;
    canvas.height = img.height;
    //
    ctx.drawImage(img,0,0,img.width,img.height);
    // 处理图片
    for (let i=0; i<imageCustomerOption.treats.length; i++) {
      let opt = imageCustomerOption.treats[i];
      if (opt.action === 'watermark') {
        loadImage(opt.url).then((watermarkImg) => {
          let drawWidth = img.width * opt.sizePercent / 100;
          let drawHeight = img.height * (watermarkImg.width / drawWidth);
          let local = drawLocal(opt, canvas.width, canvas.height, drawWidth, drawHeight);
          ctx.drawImage(watermarkImg, local.left, local.top, drawWidth, drawHeight);
        })
      } else if (opt.action === 'text') {
        ctx.font = "oblique small-caps bold 50px arial";
        ctx.fillStyle = "blue";
        let local = drawLocal(opt, canvas.width, canvas.height, 100, 100);
        ctx.fillText(opt.text, local.left, local.top);
      }
    }
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        // 输出图片
        resolve(canvas.toDataURL("image/png"))
      }, 500)
    })
  })
}


export default {
  merge : merge
}
