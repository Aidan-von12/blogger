$(document).ready(function () {
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    /* click even on toggle menu*/
    $togglecollapse.click(function () {
        $nav.toggleClass('collapse');
    });
});