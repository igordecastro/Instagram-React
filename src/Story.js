function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.profile}.svg`} />
            </div>
            <div class="usuario">
                {props.profile}
            </div>
        </div>
    )
}

export default Story;