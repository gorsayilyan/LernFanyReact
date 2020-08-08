import React, { Component } from 'react'

let imageArr=["./Utester/Xoreayi dzor.jpg","./Utester/xorea2.jpg",
     "./Utester/xorea3.jpg","./Utester/xorea4.jpg","./Utester/xorea5.jpg",
     "./Utester/xorea6.jpg","./Utester/xorea7.jpg","./Utester/xorea8.jpg"]
     let imageIndex=1;
    //  let reImageIndex=imageArr.length-1;
 class HotelSlider extends Component {
     
     constructor(props) {
         super(props)
         this.state = {
              src: imageArr[0]
         }
       this.changeImage = this.changeImage.bind(this);
       this.changeImageaj = this.changeImageaj.bind(this);

     }

     changeImage(){
         this.setState({
             src: imageArr[0+imageIndex]
         })
         imageIndex++;
        if(imageIndex>imageArr.length-1){imageIndex=0}
      }

      changeImageaj(){
        this.setState({
            src: imageArr[0+imageIndex]
        })
        imageIndex--;
       if(imageIndex<0){imageIndex=imageArr.length-1}
     }


    render() {
        return (
            <div className="glxavor">
            <button className="but" id="b2" onClick={this.changeImage}><i class="fas fa-chevron-left"></i></button>
        <img src={this.state.src} id="nkar" height="500" width="700" />
        <button className="but" id="b1" onClick={this.changeImageaj}><i class="fas fa-chevron-right"></i>  </button>
        </div>
        )
    }
}

export default HotelSlider


