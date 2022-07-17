import Post from './Post';

const posts = [ {profile: "meowed", postedPicture: "gato-telefone", whoLiked: "respondeai", likes:"101.523"},
                {profile: "barked", postedPicture: "dog", whoLiked: "adorable_animals", likes:"99.159"}]

function Posts() {
    return (
        <div class="posts">
            {posts.map( post => <Post profile = {post.profile} postedPicture = {post.postedPicture} whoLiked = {post.whoLiked} likes= {post.likes}/>)}
        </div>
    )
}

export default Posts;