const initPage = () => {
    const content = document.getElementById('content');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    
    img.setAttribute('src', 'https://hopsndrops.com/wp-content/themes/hopsndrops/images/logo.png');
    content.appendChild(img);
    
    h1.innerHTML = 'Welcome to Hops n Drops';
    content.appendChild(h1);
};

export default initPage