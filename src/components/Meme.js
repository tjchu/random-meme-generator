import React from "react"
import memesData from "../data/memesData.js"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgURL: "https://i.imgflip.com/3si4.jpg",
    })

    const memesArray = memesData.data.memes

    function handleClick() {
        setMeme(
            function(prevMeme) {
                let newURL = prevMeme.imgURL
                while (newURL === prevMeme.imgURL) {
                    let randomNum = Math.floor(Math.random() * memesArray.length)
                    newURL = memesArray[randomNum].url
                }
                return {
                    topText: "",
                    bottomText: "",
                    imgURL: newURL,
                }
            }
        )
    }

    return (
        <div className="App-hero">
            <div className="inputs">
                <input type="text" className="input-box" placeholder="Shut up" />
                <input type="text" className="input-box" placeholder="and take my money" />
            </div>
            <button className="generate-button">
                <div className="generate-button-text" onClick={handleClick}>Get a new meme image  🖼</div>
            </button>
            <img className="meme-image" src={meme.imgURL} alt="randomly generated meme"/>
        </div>
    )
}

export default Meme
