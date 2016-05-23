(function($) {

    // sidebar scrolling
    $('#sidebar').affix({
      offset: {
        top: 151
      }
    });


    $('#project-top').scrollspy({
        target: '#leftCol',
        offset: 51
    });

})(jQuery);