import "./index.scss"

function Slider({ pictures, title, index }) {
    const currentPicture = pictures[index]

    return (
        <div className="slider">
            <img
                className="slider--picture"
                src={currentPicture}
                alt={`Screenshot du site ${title}`}
                key={index}
            />
        </div>
    )
}

export default Slider