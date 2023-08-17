import troll_face_img from "../images/troll_face.png"

function Header() {
    return (
        <header className="App-header">
            <div className="title-box">
                <img className="title-img" src={troll_face_img} alt="troll face"/>
                <h3 className="title">Meme Generator</h3>
            </div>
            <p className="course">React Course - Project 3</p>
        </header>
    )
}

export default Header;
