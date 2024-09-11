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
// image slide
  $(document).ready(function(){
    $('.carousel').carousel();
  });

              $('ul.main-menu li').click(function(e) {
                  e.preventDefault();

                  if($(this).siblings('li').find('ul.submenu:visible').length) {
                        $('ul.submenu').slideUp('normal');
                  }
                  $(this).find('ul.submenu').slideToggle('normal');
            });

            var t1 = new TimelineMax({paused: true});

            t1.to(".menu", 0.8, {
                  autoAlpha: 1
            });

            t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1, {
                  opacity: 0,
                  y: 10,
                  ease: Power3.easeInOut
            }, 0.1);

            t1.from(".submenu", 0.8, {
                  autoAlpha: 0
            });

            t1.staggerFrom(".media ul li", 1, {
                  opacity: 0,
                  y: 10,
                  ease: Power3.easeInOut
            }, 0.1, "-=2");

            t1.from(".call", 1, {
                  delay: -2,
                  opacity: 0,
                  y: 10,
                  ease: Power3.easeInOut
            });

            t1.from(".mail", 1, {
                  delay: -1.6,
                  opacity: 0,
                  y: 10,
                  ease: Power3.easeInOut
            });

            t1.reverse();

            $(document).on("click", ".menu-btn", function() {
                  t1.reversed(!t1.reversed());
            });

            $(document).on("click", ".close-menu", function() {
                  t1.reversed(!t1.reversed());
            });

