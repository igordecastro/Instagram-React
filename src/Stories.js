import Story from './Story';

const stories = ["9gag", "meowed", "barked", 
"nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna",
"memeriagourmet"];

function Stories() {
    return (
        <div class="stories">
            {stories.map( story => <Story profile={story} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default Stories;