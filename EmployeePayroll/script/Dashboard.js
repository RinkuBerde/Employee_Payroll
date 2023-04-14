$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'GET',
        success: function (data) {
            var tblbody = $(".tblbody");
            tblbody.empty();

            $.each(data, function (index, value) {
                var tblrow = $("<tr class='body'>");
                tblrow.append("<td class='profileimgcol'><img class='image' src='" + value.profileUrl + "' alt='Pic1'>");
                tblrow.append("<td class='namecol'>" + value.name + "</td>");
                tblrow.append("<td class='gendercol'>" + value.gender + "</td>");

                
                var deptcol = $("<td class='deptcol'>");
                var deptdiv = $("<div class='dept'>");
                var dept=value.department.map(i => "<span class='dept-name'>" + i + "</span>");
                deptdiv.append(dept);
                deptcol.append(deptdiv);
                tblrow.append(deptcol);

                tblrow.append("<td class='salarycol'>" + value.salary + "</td>");
                tblrow.append("<td class='datecol'>" + value.startDate + "</td>");
                tblrow.append("<td class='actionscol action'><img src='../assets/icons/delete-black-18dp.svg' alt='Delete' id='deletebtn' onClick='deleteEmployees(" + value.id + ")'><img src='../assets/icons/create-black-18dp.svg' alt='Edit' id='editbtn' onClick='editEmployeeDetails(" + value.id + ")'></td>");

                tblbody.append(tblrow);
            });
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('failed');
        }
    });
})

const deleteEmployees = (id) => {
    $.ajax({
        url: 'http://localhost:3000/employees/' + id,
        type: 'DELETE',
        success: function() {
            tblrow.remove();
        },
        error: function() {
            alert('Can not delete data');
        }
    });
}

const submitForm = () => {
    window.location.href="/EmployeePayroll/pages/Empform.html";
}



