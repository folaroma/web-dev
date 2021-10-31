import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import posts from "./posts.json"

function PostSummaryList() {
    return (
        <ul className="list-group mb-3 ms-3 w-100">
            {posts.map(post => {
                return(
                    <PostSummaryItem post={post}/>);
            })}
        </ul>
    );
};
export default PostSummaryList;