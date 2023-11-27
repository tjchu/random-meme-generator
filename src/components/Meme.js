import React from "react"


function Meme() {
    const initialMeme = {
            topText: "",
            bottomText: "",
            imgURL: "https://i.imgflip.com/3si4.jpg",
    }

    /*
    NOTE: states are used to track the "state" of something
    useState() will be the function that updates the state. You can set a value straight up inside or a function inside
    that return something. It's very flexible.
    */
    const [meme, setMeme] = React.useState(initialMeme)

    const [allMemes, setAllMemes] = React.useState([])

    /*
    NOTE: useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing.
    If we make it an async function, it automatically retuns a promise 
    instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below.
    */
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            console.log("data content: " + data)
            setAllMemes(data)
        }
        getMemes()
    }, [])

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

    function generateMeme() {
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

    function resetMeme() {
        setMeme(initialMeme)
    }

    return (
        <div className="App-container">
            <div className="Inputs">
                <input
                    type="text"
                    className="Input-box"
                    placeholder="Shut up"
                    name="topText"
                    value={meme.topText}
                    onChange={handleTextChange}
                />
                <input
                    type="text"
                    className="Input-box"
                    placeholder="and take my money"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleTextChange}
                />
            </div>
            <button className="button Generate-button">
                <div className="Button-text" onClick={generateMeme}>Get a new meme image  🖼</div>
            </button>
            <div className="Meme">
                <h2 className="Meme-text top">{meme.topText}</h2>
                <h2 className="Meme-text bottom">{meme.bottomText}</h2>
                <img className="Meme-image" src={meme.imgURL} alt="randomly generated meme"/>
            </div>
            <button className="button Reset-button">
                <div className="Button-text" onClick={resetMeme}>Reset</div>
            </button>
        </div>
    )
}

export default Meme
