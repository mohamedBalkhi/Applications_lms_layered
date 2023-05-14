$(document).ready(function () {
    $('#saveBtn').on('click', function () {
            $('#member-form').submit();

    });


    $('#gotoListBtn').on('click', function () {
        window.location = "/user/list";
    });
});