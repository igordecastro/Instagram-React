function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.profile}.svg`} />
                <div class="texto">
                    <div class="nome">{props.profile}</div>
                    <div class="razao">{props.description}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default Suggestion;