$(document).ready(function() {
  $('#BeforeYouLeaveDiv').alert('close');
  // disable submit form on enter press
   $("input[type='text'], input[type='textarea']").on('keyup keypress', function(e) {
     var keyCode = e.keyCode || e.which;
     if (keyCode === 13) {
       e.preventDefault();
       return false;
     }
   });
   $(document).bind("mouseleave", function(e) {
      if (e.pageY - $(window).scrollTop() <= 1) {
          $('#BeforeYouLeaveDiv').alert();
      }
    });

 });
