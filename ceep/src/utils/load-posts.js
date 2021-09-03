export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json(); /*Retorna um objeto javascript*/

  const photosJson = await photos.json(); /*Retorna um objeto javascript*/

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
