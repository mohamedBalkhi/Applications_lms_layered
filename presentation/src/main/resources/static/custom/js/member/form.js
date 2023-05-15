$(document).ready(function () {
    $('#saveBtn').on('click', function () {
        if (isValidateBirthDate()) {
            $('#member-form').submit();
        } else {
            $('#dobErr').text('Invalid Date');
        }
    });

    function isValidateBirthDate() {
        var dateStr = $('#dateOfBirth').val();
        var timestamp = Date.parse(dateStr)
        return !isNaN(timestamp) && timestamp > Date.parse('1/1/1900') && timestamp < Date.parse('1/1/2016');
    }

    $('#gotoListBtn').on('click', function () {
        window.location = "/member/list";
    });
});