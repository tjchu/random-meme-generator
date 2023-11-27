import troll_face_img from "../images/troll_face.png"

function Header() {
    return (
        <header className="App-header">
            <div className="Title-box">
                <img className="Title-img" src={troll_face_img} alt="troll face"/>
                <h3 className="Title">Meme Generator</h3>
            </div>
            <p className="Course">Kill time by creating random memes!</p>
        </header>
    )
}

export default Header;
