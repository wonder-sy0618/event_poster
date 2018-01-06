import React, { Component } from 'react';

import imageTreat from "../service/imageTreat"

class ShowComp extends Component {

  constructor() {
      super();
      let comp = this;
      this.state = {
        // showImage : comp.props.fileImageBase64
      }
    }

  componentDidUpdate() {
    let comp = this;
    imageTreat.merge(
      comp.props.fileImageBase64,
      comp.props.imageCustomerOption
    ).then((imgBase64) => {
      if (comp.state.showImage !== imgBase64) {
        comp.setState({
          showImage : imgBase64
        })
      }
    })
  }

  render() {
    return (
      <div className="imgshow" >
        <img src={this.state.showImage} ></img>
      </div>
    )
  }

}

export default ShowComp
