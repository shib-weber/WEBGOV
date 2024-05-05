let x=document.querySelector(".box1");
let b =document.querySelector("body");
x.classList.add("pop_up");
b.classList.add("rest1");
let ac=document.querySelector("#f");
ac.onclick=()=>{
    x.classList.remove("pop_up");
    b.classList.remove("rest1");
}

    const z = localStorage.getItem("mode");
    console.log(z);
    if(z==="w"){
        b.classList.add("white");
        b.classList.remove("black");
    }
    else{
        b.classList.add("black");
        b.classList.remove("white");
    }

   
    document.addEventListener("DOMContentLoaded", function() {
        const postDisplay = document.getElementById("post-display");
        const postInput = document.getElementById("post-input");

        // Load posts from localStorage on page load
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        savedPosts.reverse().forEach(post => addPost(post.text)); // Reverse and display posts
        

        postInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                alert("YOUR MESSAGE HAS BEEN SUCCESSFULLY POSTED");
                const postText = postInput.value.trim();
                if (postText !== "") {
                    addPost(postText);
                    savePosts(postText); // Save post with timestamp
                    postInput.value = "";
                }
            }
        });

        function addPost(text) {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.textContent = text;
            postDisplay.prepend(postElement);
        }

        function savePosts(text) {
            const posts = JSON.parse(localStorage.getItem("posts")) || [];
            posts.push({ text: text });
            localStorage.setItem("posts", JSON.stringify(posts));
        }
    });

    let ab=document.querySelector("#bt");
    ab.onclick=() =>{
        location.href="index.html";
    }