import React from "react";
import  "./testStyles.css"; 


class StoreComponentLizbeth extends React.Component {
  render() {

    const {productPicture, productDescription, productPrice}= this.props

    return (

        <div className="StoreCardBackground">
        <img className="StoreCardImage"src={productPicture}/>
        <p className="StoreCardDescription">{productDescription}</p>
        <p className="StoreCardPrice">{productPrice}</p>
        </div>
    );
  }
}

export default StoreComponentLizbeth;
