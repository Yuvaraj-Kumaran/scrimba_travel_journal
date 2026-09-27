import globe from "../assets/globe.png"

export default function Header () {
    return (
        <header className="header">
            <img src={globe} alt="globe-image" className="globe-img" />
            <span>My Travel Journey</span>
        </header>  
    )
}