import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import exploreItems from "./posts.js"

function PostSummaryList() {
    var ul = '<ul class="list-group mb-3 ms-3 w-100">';

    for (let i = 0; i < exploreItems.length; i++) {
        ul = ul + PostSummaryItem(exploreItems[i]);
    }

    console.log(ul)

    const list = () => {
        return (`
            ${ul}
            </ul>
        `)
    }

    return list();
}
export default PostSummaryList;