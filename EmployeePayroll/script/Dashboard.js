$(document).ready(function () {
    $.ajax({
        url: '  http://localhost:3000/employees',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var tableBody = $('#display tbody');
        }
    

               
});
});

