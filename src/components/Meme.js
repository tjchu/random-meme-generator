import React from "react"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgURL: "https://i.imgflip.com/3si4.jpg",
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(
        () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(resp => resp.json())
                .then(data => setAllMemes(data))
        },
        []
    )

    function handleTextChange(event) {
        /*
        You can get event.target values like this
        const {name, value, type, checked} = event.target
        */
        setMeme(
            (prevMeme) => (
                {
                    ...prevMeme,
                    [event.target.name]: event.target.value,
                }
            )
        )
    }

    function handleClick() {
        const memesArray = allMemes.data.memes
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
        <div className="App-container">
            <div className="inputs">
                <input
                    type="text"
                    className="input-box"
                    placeholder="Shut up"
                    name="topText"
                    value={meme.topText}
                    onChange={handleTextChange}
                />
                <input
                    type="text"
                    className="input-box"
                    placeholder="and take my money"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleTextChange}
                />
            </div>
            <button className="generate-button">
                <div className="generate-button-text" onClick={handleClick}>Get a new meme image  🖼</div>
            </button>
            <div className="meme">
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                <img className="meme-image" src={meme.imgURL} alt="randomly generated meme"/>
            </div>
        </div>
    )
}

export default Meme
