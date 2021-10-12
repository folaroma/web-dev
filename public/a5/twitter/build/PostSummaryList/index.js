import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return (`
    <ul class="list-group mb-3">
        ${PostSummaryItem()}
    <ul>
    `);
}
export default PostSummaryList;