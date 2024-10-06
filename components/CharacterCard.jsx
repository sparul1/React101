export default CharacterCard = ({data}) => {

    const { id, 
        fullName, 
        title, 
        family, 
        image,
        imageUrl } = data
    return (
        <div className = "character-card">
            <img className="character-img"src={imageUrl} alt={image} />
            <h3 className="full-name">{fullName}</h3>
            <h4 className="title">{title}</h4>
            <h5 className="family">{family}</h5>
        </div>
    )
}