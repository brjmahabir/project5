$(document).ready(function(){
    var count=60;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
        count=count-1;
        if (count <= 0)
        {
            $('#js-focussedbutton').addClass('button--inverted');
            $('#js-focussedbutton').parent().prepend("<a id='js-newbutton' href='playalong.html' class='button button--block'>Meespelen met aflevering</a>")
            $('#js-newbutton').hide();

            $('#js-timer').parent().fadeOut("fast", function() {
                $('#js-newbutton').fadeIn();
            });
            clearInterval(counter);
            //counter ended, do something here
            return;
        }

        //Do code for showing the number of seconds here
        $('#js-timer').text(count + 's');
    }
});