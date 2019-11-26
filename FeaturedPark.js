import React, { Component } from 'react';

class FeaturedPark extends Component {

    doButtonAction= () =>{
        this.props.onButtonClick(this.props.dataKey);
    }

    render(){

        return(
            <div>
                <h2>Today's featured town is: {this.props.parkName}</h2>
                <button
                    onClick={this.doButtonAction}
                    >
                    <img src="https://www.pinclipart.com/picdir/big/71-716633_pikachu-durmiendo-pikachu-sprite-clipart.png" alt=""></img>
                    Delete Town 
                    <img src="https://www.pinclipart.com/picdir/big/71-716633_pikachu-durmiendo-pikachu-sprite-clipart.png" alt=""></img>
                </button>
            </div>

        );
    }


}

export default FeaturedPark;