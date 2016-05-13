var main = function () {

    $('form').submit(function (event) {
        event.preventDefault();

        var $input = $(event.target).find('input');
        var comment = $input.val();

        if (comment.trim() != "") {
            var html = $('<li>', {
                            text: comment
                        });
            var remove = $('<span>', {
                            'class': 'remove glyphicon glyphicon-remove'
                        });
            remove.appendTo(html);
            html.prependTo('#comments');
        }

        $input.val('');

        return false;
    });

    $('body').on('click', '.remove', function () {
        $(this).parent().remove();
    });

}

$(document).ready(main);