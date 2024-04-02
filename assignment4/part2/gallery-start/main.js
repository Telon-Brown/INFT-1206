document.addEventListener('DOMCoontentLoaded', function(){
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
    const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
    const altTexts = {
        'pic1.jpg': 'Closeup of a human eye',
        'pic2.jpg': 'Nature scene',
        'pic3.jpg': 'Purple Flowers',
        'pic4.jpg': 'Acient Wall',
        'pic5.jpg': 'Butterfly'
    };
/* Looping through images */
    for (let i = 0; i < imageFiles.length; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', 'images/' + imageFiles[i]); 
        newImage.setAttribute('alt', altTexts[imageFiles[i]]);
        thumbBar.appendChild(newImage);
        newImage.addEventListener('click', function() {
          displayedImage.src = this.src;
          displayedImage.alt = this.alt;
        });
    }
/* Wiring up the Darken/Lighten button */
    btn.addEventListener('click', function() {
        if (overlay.classList.contains('dark')) {
            overlay.classList.remove('dark');
            btn.textContent = 'Darken';
        } else {
            overlay.classList.add('dark');
            btn.textContent = 'Lighten';
        }
    });
});

