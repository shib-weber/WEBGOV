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
        savedPosts.forEach(post => addPost(post.text)); // Reverse and display posts
        

        postInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                let x1=document.querySelector(".box2");
                x1.classList.add("pop_up1");
                b.classList.add("rest1");
                let ac1=document.querySelector("#f1");
                let ac2=document.querySelector("#f2");
                ac1.onclick=()=>{
                    x1.classList.remove("pop_up1");
                    b.classList.remove("rest1");
                }
                ac2.onclick=()=>{
                    location.href="index.html";
                }
                const postText = postInput.value.trim();
                if (postText !== "") {
                    addPost(postText,Date.now());
                    savePosts(postText); // Save post with timestamp
                    postInput.value = "";
                }
            }
        });

        function addPost(text,timestamp) {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.textContent = text;
            if (timestamp) {
                // Compare timestamp to determine if it's a recent post
                const currentTime = Date.now();
                const timeDiff = currentTime - timestamp;
                if (timeDiff < 10000) { // Assuming 10 seconds as the threshold for recent posts
                    postElement.classList.add("right");
                } else {
                    postElement.classList.add("left");
                }
            }
       
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
    