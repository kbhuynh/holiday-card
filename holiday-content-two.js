$(document).ready(function() {
    $('a').click(function(){
        var goal = $(this).data("goal");
        localStorage.setItem('goal', goal);
    });
});