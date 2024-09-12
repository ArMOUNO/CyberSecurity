// navBar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {
    coverTrigger: false, // Optional, to control whether dropdown covers the trigger element
    // hover: true,         // Optional, enable hover to trigger the dropdown
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

