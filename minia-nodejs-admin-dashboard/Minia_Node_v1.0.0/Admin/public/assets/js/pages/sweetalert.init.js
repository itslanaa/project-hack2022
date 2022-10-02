/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Sweatalert Js File
*/


//Basic
document.getElementById("sa-basic").addEventListener("click", function() {
    Swal.fire(
        {
            title: 'Any fool can use a computer',
            confirmButtonColor: '#5156be',
        }
    )
});

//A title with a text under
document.getElementById("sa-title").addEventListener("click", function() {
    Swal.fire(
        {
            title: "The Internet?",
            text: 'That thing is still around?',
            icon: 'question',
            confirmButtonColor: '#5156be'
        }
    )
});

//Success Message
document.getElementById("sa-success").addEventListener("click", function() {
    Swal.fire(
        {
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#5156be',
            cancelButtonColor: "#fd625e"
        }
    )
});

//Warning Message
document.getElementById("sa-warning").addEventListener("click", function() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2ab57d",
        cancelButtonColor: "#fd625e",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success"
          );
        }
    });
});

//Parameter
document.getElementById("sa-params").addEventListener("click", function() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success mt-2',
        cancelButtonClass: 'btn btn-danger ms-2 mt-2',
        buttonsStyling: false
    }).then(function (result) {
        if (result.value) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
              confirmButtonColor: '#5156be',
            })
          } else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire({
              title: 'Cancelled',
              text: 'Your imaginary file is safe :)',
              icon: 'error',
              confirmButtonColor: '#5156be',
            })
          }
    });
});


//Custom Image
document.getElementById("sa-image").addEventListener("click", function() {
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'assets/images/logo-sm.svg',
        imageHeight: 48,
        confirmButtonColor: "#5156be",
        animation: false
    })
});

//Auto Close Timer
document.getElementById("sa-close").addEventListener("click", function() {
    var timerInterval;
    Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> seconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen:function () {
        Swal.showLoading()
        timerInterval = setInterval(function() {
        var content = Swal.getHtmlContainer()
        if (content) {
            var b = content.querySelector('b')
            if (b) {
            b.textContent = Swal.getTimerLeft()
            }
        }
        }, 100)
    },
    onClose: function () {
        clearInterval(timerInterval)
    }
    }).then(function (result) {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
});

//custom html alert
document.getElementById("custom-html-alert").addEventListener("click", function() {
    Swal.fire({
        title: '<i>HTML</i> <u>example</u>',
        icon: 'info',
        html: 'You can use <b>bold text</b>, ' +
        '<a href="//Pichforest.in/">links</a> ' +
        'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger ml-1',
        confirmButtonColor: "#47bd9a",
        cancelButtonColor: "#fd625e",
        confirmButtonText: '<i class="fas fa-thumbs-up me-1"></i> Great!',
        cancelButtonText: '<i class="fas fa-thumbs-down"></i>'
    })
});

//position
document.getElementById("sa-position").addEventListener("click", function() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
});

//Custom width padding
document.getElementById("custom-padding-width-alert").addEventListener("click", function() {
    Swal.fire({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        confirmButtonColor: "#5156be",
        background: '#e0e1f3'
    })
});

//Ajax
document.getElementById("ajax-alert").addEventListener("click", function() {
    Swal.fire({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        confirmButtonColor: "#5156be",
        cancelButtonColor: "#fd625e",
        preConfirm: function (email) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (email === 'taken@example.com') {
                        reject('This email is already taken.')
                    } else {
                        resolve()
                    }
                }, 2000)
            })
        },
        allowOutsideClick: false
    }).then(function (email) {
        Swal.fire({
            icon: 'success',
            title: 'Ajax request finished!',
            confirmButtonColor: "#5156be",
            html: 'Submitted email: ' + email
        })
    })
});
