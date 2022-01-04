function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPost();

function displayPost(posts){
    const postContainer = document.getElementById('section');
    for(const post of posts){
        const div = document.createElement('div')
        div.className = 'singlePost';

        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <strong>${post.userId}</strong>
        `;
        
        postContainer.appendChild(div);
        console.log(post);
    }
}