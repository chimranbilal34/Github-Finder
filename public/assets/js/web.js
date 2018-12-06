    $(document).ready(function() {
      var owlh = $("#home-slider");

      // Custom Navigation Events
      $(document).on('click', '.carousel-arrow-next', function(){
            owlh.trigger('owl.next');
      });
      $(document).on('click', '.carousel-arrow-prev', function(){
            owlh.trigger('owl.prev');
      });
      // $('.owl-item.active').trigger(animation);


    });