import Suggestion from './Suggestion'

const suggestions = [{profile: "bad.vibes.memes", description:"Segue você"},
                     {profile:"chibirdart", description:"Segue você"},
                     {profile:"razoesparaacreditar", description:"Novo no Instagram"},
                     {profile:"adorable_animals", description:"Segue você"},
                     {profile:"smallcutecats", description:"Segue você"}]

function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(sugg => <Suggestion profile = {sugg.profile} description = {sugg.description}/>)}
        </div>
    )
}

export default Suggestions;