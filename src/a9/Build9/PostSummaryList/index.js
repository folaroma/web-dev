import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";

function PostSummaryList() {
  return (
    <ul className="list-group mb-3 w-100">
      <li className="list-group-item fw-bold" style={{ fontSize: "1.3rem" }}>
        What's Happening
      </li>
      {posts.map((post) => {
        return <PostSummaryItem post={post} />;
      })}
    </ul>
  );
}
export default PostSummaryList;
