import React, { Component } from "react";
import "./styles.css";
import PostP from "../../components/estrutura";

import { loadPosts } from "../../utils/load-posts";
import Botao from "../../components/button/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  CallmorePages = () => {
    const { posts, allPosts, page, postsPerPage } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ ...this.state, posts, page: nextPage });
  };

  handleInput = (e) => {
    let value = e.target.value;

    this.setState({ ...this.state, searchValue: value });
  };

  render() {
    const { posts, searchValue, allPosts } = this.state;
    const filteredPosts = !!searchValue
      ? allPosts.filter((p) =>
          p.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts;

    return (
      <div className="container">
        {!!searchValue && (
          <>
            <h1>Search Value :{searchValue}</h1> <br></br>
          </>
        )}

        <input
          type="search"
          onChange={this.handleInput}
          value={searchValue}
        ></input>

        <PostP postagem={filteredPosts}></PostP>
        <div className="button-container">
          {/*<Botao onClick={this.CallmorePages}></Botao>*/}
        </div>
      </div>
    );
  }
}

export default Home;
