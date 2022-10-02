/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Rating Js File
*/

function onload(event) {
    // basic-rater
    var basicRating = raterJs( {
        starSize:22, 
        rating: 3,
        element:document.querySelector("#basic-rater"), 
        rateCallback:function rateCallback(rating, done) {
            this.setRating(rating); 
            done(); 
        }
    }); 

    // rater-step
    var starRatingStep = raterJs( {
        starSize:22,
        step:0.5, 
        element:document.querySelector("#rater-step"), 
        rateCallback:function rateCallback(rating, done) {
            this.setRating(rating); 
            done(); 
        }
    });

    // rater-message

    var starRatingmessage = raterJs( {isBusyText:"Rating in progress. Please wait...", 
        starSize:22,
        element:document.querySelector("#rater-message"), 
        disableText:"Custom disable text!", 
        ratingText:"My custom rating text {rating}",
        showToolTip:true,
        rateCallback:function rateCallback(rating, done) {
            starRatingmessage.setRating(rating); 
            starRatingmessage.disable(); 
            done(); 
        }
    }); 


    // rater-unlimitedstar
    var starRatingunlimited = raterJs( {
        max:16, 
        readOnly:true, 
        rating:4.4, 
        element:document.querySelector("#rater-unlimitedstar")
    }); 

    // rater-onhover
    var starRatinghover = raterJs( {
        starSize:22,
        element:document.querySelector("#rater-onhover"), 
        rateCallback:function rateCallback(rating, done) {
            this.setRating(rating); 
            done(); 
        }, 
        onHover:function(currentIndex, currentRating) {
            document.querySelector('.ratingnum').textContent = currentIndex; 
        }, 
        onLeave:function(currentIndex, currentRating) {
            document.querySelector('.ratingnum').textContent = currentRating; 
        }
    }); 


    // rater-reset
    var starRatingreset = raterJs( {
        starSize:22,
        element:document.querySelector("#raterreset"), 
        rateCallback:function rateCallback(rating, done) {
            this.setRating(rating); 
            done(); 
        }
    }); 
    document.querySelector('#raterreset-button').addEventListener("click", function() {
        starRatingreset.clear();
        console.log(starRatingreset.getRating());
    }, false);
}

window.addEventListener("load", onload, false); 