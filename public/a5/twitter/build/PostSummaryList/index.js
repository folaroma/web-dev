import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import exploreItems from "./posts.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group mb-3 ms-3 w-100">
            ${PostSummaryItem(exploreItems[0])}
        <ul>
    `);
}
export default PostSummaryList;