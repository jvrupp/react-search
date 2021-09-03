import React, { useState } from "react";
import Posts from "../posts";

function PostP({ postagem }) {
  return (
    <div className="posts">
      {postagem.map((p) => (
        <Posts
          key={p.id}
          title={p.title}
          body={p.body}
          cover={p.cover}
          id={p.id}
        ></Posts>
      ))}
    </div>
  );
}

export default PostP;
