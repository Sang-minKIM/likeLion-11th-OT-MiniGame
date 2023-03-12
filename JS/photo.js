const photo = document.querySelector(".photo");

const photoList = ["1.png", "2.png", "3.png", "5.png", "6.png", "7.png", "4.jpeg", "8.jpeg"];

const getPhoto = () => {
    const img = photoList[Math.floor(Math.random() * photoList.length)];
    photo.style = `background-image : url(assets/${img});\n background-color : white;`;
    photoList.splice(photoList.indexOf(img), 1);
};
