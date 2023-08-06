$('p').click(function() {
    $(this).slideToggle('slow');
});

$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
})

$('button').mouseleave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
})


/***
 * this changes the boxes with the same second class name
 * ie 'box one' all change to red
 */
// $(document).ready(function() {
//     $('.box').on('click', function() {
//         var classNames = $(this).attr('class').split(' ');
//         $('.' + classNames[1]).css('background-color', 'red');
//     });
// });

$(document).ready(function() {
    $('.box').on('click', function() {
        /**
         * When we click on an element that has
         * a 'box class, this event will be fired         
         */
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];  // gets all with box class
        var className = classNames[1]; // gets all with box and one/two/three
        if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
            // if this object is already red, turn black
            $('.' + classNames[1]).css('background-color', '#000');
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same class name as clicked element
            // to red.
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red');
        }
    });
});