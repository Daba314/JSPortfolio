/**
 * TODO: Finish submitNewPost function to submit form data to the API 
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    let title = document.getElementById('form-post-title').value;
    let content = document.getElementById("form-post-content").value;
    let image =  document.getElementById("form-post-image");

    let data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('post_image', image.files[0]);

    fetch(API_URL, {method:'POST', body:data}).then(()=>{
        setTimeout(()=>{
            window.location.href = 'index.html';
        },500)
    });
  
} 