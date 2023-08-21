import React from "react"
import memesData from "../data/memesData.js"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgURL: "https://i.imgflip.com/3si4.jpg",
    })

    const memesArray = memesData.data.memes

    function handleTopTextChange(event) {
        setMeme(
            function(prevMeme){
                return {
                    ...prevMeme,
                    topText: event.target.value,
                }
            }
        );
        console.log('top text is:', event.target.value);
      }

      function handleBottomTextChange(event) {
        setMeme(
            function(prevMeme){
                return {
                    ...prevMeme,
                    bottomText: event.target.value,
                }
            }
        );
        console.log('bottom text is:', event.target.value);
      }

    function handleClick() {
        setMeme(
            function(prevMeme) {
                let newURL = prevMeme.imgURL
                while (newURL === prevMeme.imgURL) {
                    let randomNum = Math.floor(Math.random() * memesArray.length)
                    newURL = memesArray[randomNum].url
                }
                return {
                    ...prevMeme,
                    imgURL: newURL,
                }
            }
        )
    }

    return (
        <div className="App-hero">
            <div className="inputs">
                <input type="text" className="input-box" placeholder="Shut up" onChange={handleTopTextChange} />
                <input type="text" className="input-box" placeholder="and take my money" onChange={handleBottomTextChange} />
            </div>
            <button className="generate-button">
                <div className="generate-button-text" onClick={handleClick}>Get a new meme image  🖼</div>
            </button>
            <h2>{meme.topText}</h2>
            <h2>{meme.bottomText}</h2>
            <img className="meme-image" src={meme.imgURL} alt="randomly generated meme"/>
        </div>
    )
}

export default Meme
