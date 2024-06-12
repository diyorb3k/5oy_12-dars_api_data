document.addEventListener("DOMContentLoaded", () => {
  let pr = fetch("https://jsonplaceholder.typicode.com/posts");

  pr.then((res) => res.json())
    .then((data) => {
      const postsList = document.getElementById("posts-list");
      data.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
       
        <h1> userId: ${post.userId}</h1>
        <p>post.id :${post.id}</p> 
        <h6> title: ${post.title}</h6>
        <span>${post.body}</span>

        `;
        postsList.appendChild(listItem);
      });
    })
    .catch((err) => {
      console.error("Error", err);
    });
});

const cartim = document.getElementById("posts-list");
cartim.addEventListener();
