import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "firstUser", comment: "Hello, firstCommnet here" },
  { name: "secondUser", comment: "Hello, secondComment here" },
  { name: "thirdUser", comment: "Hello, thirdComment here" },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
