let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
let formValidation = (e) => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};
let data = {};
let acceptData = () => {
  data["text"] = input.value;
  createPost();
};
let createPost = () => {
  posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
   
    </div>
    `;
  input.value = "";
};
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
