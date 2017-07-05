
$(function (){
    $('#btn-send').click(sendForm);
});

function sendForm(e){
    e.preventDefault();
  $.ajax({
    url: "https://formspree.io/nazarun@gmail.com", 
    method: "POST",
    data: {
        name : $('#full-name').val(),
        email : $('#email').val(),
        message : $('#message').val()
    },
    dataType: "json"
  })
    .done(function(){
         $('#form-messages').html('<h2>Thank you</h2>');
         $('#contact-form').trigger('reset');
     });
}




/*
$("#contact-form").submit(function(e) {

    var url = "https://formspree.io/nazarun@gmail.com"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#contact-form").serialize(), // serializes the form's elements.
           success: function(data){
               $('#form-messages').html(data) // show response from the php script.
           }
           }
         );

    e.preventDefault(); // avoid to execute the actual submit of the form.
});



*/