fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showPosts(data));

function showPosts(data) {
    document.getElementById('loading').style.display = 'none';

    const postsGrid = document.getElementById('posts-grid');

    data.slice(0, 6).forEach(post => {
        const card = document.createElement('div');
        card.classList.add('post-card');

        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        postsGrid.appendChild(card);
    });
}