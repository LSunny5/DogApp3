'use strict';

//GET request for Dog Images
function getDogImage(chosenBreed) {
    let dogURL=`https://dog.ceo/api/breed/${chosenBreed}/images/random`;
    fetch(dogURL)
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson, chosenBreed))
        .catch(error=>alert('Something is not working, please try again in a bit.'));
 }

//show the images
 function displayImage(breedImage, dogName) {
    //print address to console
    console.log(breedImage);

    if (breedImage.status == "error"){
        alert('Sorry, that breed is not in the database, please try again...');
    } else {
        let dogImage=`
        <h2> Here's a picture of a ${dogName}. </h2>
        <img src="${breedImage.message}">`;
        $('.results').html(dogImage);
        $('.results').removeClass('hidden');
    }
 }

 //starting the app, after user inputs
 function startApp() {
   $('form').submit(event => {
     event.preventDefault();
     let userBreed=$('#breed').val();
     getDogImage(userBreed);
   });
 }

 //App ready and waiting for user to enter numbers
 $(function() {
    console.log("App is ready, waiting for user...");
    startApp();
 }); 