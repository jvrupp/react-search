import React, { useState } from "react";
import "./posts.css";

function Posts(props) {
  return (
    <div className="post">
      <img src={props.cover}></img>
      <div key={props.id} className="post-content">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Posts;
