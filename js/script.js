// navBar
$(document).ready(function(){
    $(".dropdown-trigger").dropdown({
      coverTrigger: false,  // Keeps the dropdown detached from the trigger
      alignment: 'left'     // Aligns the dropdown to the left of the button (or use 'right')
    });
  });
//   sideNav
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
// image slide
  $(document).ready(function(){
    $('.carousel').carousel();
  });
