import React, { Component } from 'react'
import API from "../../utils/API"

export default class Discover extends Component {
    state = {
        dogPic:"",
        count:0
    }

    componentDidMount() {
        this.loadNextDog()
    }

    loadNextDog = ()=>{
        API.getRandomDog().then(res=>{
            // console.log(res)
            this.setState({dogPic:res.data.message})
        })
    }

    dislikeClick = ()=>{
       this.loadNextDog();
    }

    likeClick = ()=>{
        const randomNumber = Math.floor(Math.random()*2)
        if(randomNumber===1){
            this.setState({count:this.state.count+1})
        }
       this.loadNextDog()
    }

    render() {
        return (
            <div className="Discover">
                <h1>Find dogs in your area!</h1>
                <img src={this.state.dogPic} alt="dog pic" />
                <br/>
                <button onClick={this.dislikeClick}>Dislike</button>
                <button onClick={this.likeClick}>Like</button>
                <p>You have matched with {this.state.count} dogs so far</p>
            </div>
        )
    }
}
