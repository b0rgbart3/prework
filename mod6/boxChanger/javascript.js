$( document ).ready(function() {
    console.log( "ready!" );
    $('#button1').on('mousedown', function() {
        var box_height =  $('#box').height();
        $('#box').css({'height': box_height + 10 });
    } );

    $('#button2').on('mousedown', function() {
        $('#box').css({'background-color': 'blue' });
        $('#box').css({'opacity': 1 });
    } );

    $('#button3').on('mousedown', function() {
        opacity_amount = $('#box').css('opacity');
        console.log (opacity_amount);

        if (opacity_amount > 0 ) {
            new_opacity_amount = opacity_amount - .1;
        } else {
            new_opacity_amount = 0;
        }
        $('#box').css({'opacity': new_opacity_amount });
    } );

    $('#button4').on('mousedown', function() {
        $('#box').css({'background-color': 'orange' });
        $('#box').css({'opacity': 1 });
        $('#box').css({'height': "150px"});
    } );
});