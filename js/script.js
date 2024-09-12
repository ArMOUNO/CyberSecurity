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

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  
    // Add event listener to the close button
    var closeBtn = document.querySelector('.sidenav-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var instance = M.Sidenav.getInstance(elems[0]);
        instance.close(); // Close the sidenav
      });
    }
  });
  

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

