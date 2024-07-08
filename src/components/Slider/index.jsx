import "./index.scss"

function Slider({ pictures, title, index }) {
    const currentPicture = pictures[index]

    return (
            <img
                className="slider"
                src={currentPicture}
                alt={`Screenshot du site ${title}`}
                key={index}
            />
    )
}

export default Slider