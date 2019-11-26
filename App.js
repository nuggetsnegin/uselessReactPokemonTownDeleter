import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FeaturedPark from './FeaturedPark';

class App extends Component {

  constructor(){
    super(); /*need to get the 'this' */

    this.state = {
      featuredParks: ['Pallet Town','Lavender Town','Mahogany Town', 'Cerulean City'],
      parkUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Lavender_Town_screenshot.jpg/220px-Lavender_Town_screenshot.jpg',
      showPark: true, /*function to change state should be in this file*/
      parkUrl2: 'https://cdn.bulbagarden.net/upload/thumb/7/7b/Pallet_Town_HGSS.png/300px-Pallet_Town_HGSS.png'
    }
  }

  deletePark = (parkIndex) =>{

    /*had to set featuredPark filter results to variable*/
    let featuredParkCopy = [...this.state.featuredParks]; 
    featuredParkCopy =  featuredParkCopy.filter((park, i) =>{
      return parkIndex !== i /*don't want to delete*/
      })

      this.setState({
        featuredParks: featuredParkCopy
      })
    }

  

  // toggleParkVisibility = () =>{
  //   let opposite;
  //   console.log('clicked')

  //   if(this.state.showPark === true){
  //     opposite = false;
  //     console.log('false')
  //   }else{
  //     opposite = true;
  //     console.log('true')
  //   }
  //   this.setState({
  //     showPark: opposite
  //   })
  // }

  render(){
    return(
      <div>
        <h1><img src="https://thumbs.gfycat.com/CornyTautHuman-max-1mb.gif" alt=""></img>Welcome to Pokemon towns!<img src="https://thumbs.gfycat.com/CornyTautHuman-max-1mb.gif" alt=""></img></h1>



        {this.state.featuredParks.map((park, i) =>{
            return(
                <FeaturedPark
                  key = {i}
                  parkName={park}
                  dataKey = {i}
                  onButtonClick={this.deletePark} /*referenced to the function deletePark*/
                />
            )

          })
        }

      <p>If you are going to {this.state.featuredPark} bring some pokeballs!</p>
      </div>

    );
  }

}

export default App;
