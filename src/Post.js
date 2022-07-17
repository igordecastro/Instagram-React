import React from "react";

function Post(props) {

    const [like, setLike] = React.useState("heart-outline");
    
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.profile}.svg`} />
                    {props.profile}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${props.postedPicture}.svg`} onDoubleClick = {() => setLike("heart")}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick = {() => like === "heart" ? setLike("heart-outline") : setLike("heart")} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${props.whoLiked}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.whoLiked}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;