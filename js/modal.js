$(function () {
    $('.pop').on('click', function () {
        var title = $(".modal-title");

        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        title.html($(this).find("img").attr("alt"));
        $('#myModal').modal('show');

    });
});