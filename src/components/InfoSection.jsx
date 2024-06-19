function InfoSection({name, styles, text, image}){
    const style = "info_section " + styles

    return(
        <section className={style}>
            <img src={image} className=""/>
            <h2>{name}</h2>
            <span>{text}</span>
        </section>
    )
}

export default InfoSection