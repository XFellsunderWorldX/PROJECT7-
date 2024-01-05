var imgArray = new Array(
    'Image1Lg.png',
    'Image2Lg.png',
    'Image3Lg.png',
    'Image4Lg.png'
);
    var pictureNames = new Array(
    'Cat and Dog',
    'Cat',
    'Bird and Dog',
    'German Shepard'
);
    var imgPath = "Images/Fullsize/";

    function swapImage(imgID) {

    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg;
    var textTitle;

    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    textTitle=picturenames[imgID];

    textDiv.innerHTML = textTitle;

    }
    function preloadImages() {
    for(var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image;
    tmpImg.src = imgPath + imgArray[i];
    }
    }