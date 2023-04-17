

const submitForm = () => {

    const fullName = $('#fName').val();
    console.log(fullName);

    const profileImage = $('input[type="radio"]:checked').val();
    console.log(profileImage);

    const gender = $('input[name="gender"]:checked').val();
    console.log(gender);

    var department= []
        $('input[type="checkbox"]:checked').each(function() {          
            department.push($(this).val());
         });
         console.log(department);
                    
    const salary = $('#salary').val();
    console.log(salary);

    const day = $('#day').val();
    const month = $('#month').val();
    const year = $('#year').val();
    console.log(day + '-' + month + '-' + year);

    const notes = $('#notes').val();
    console.log(notes);

    let reqData = {
        "name": fullName,
        "profileUrl": profileImage,
        "gender": gender,
        "department": department,
        "salary": salary,
        "startDate": day + ' ' + month + ' ' + year,
        "notes": notes,
    }

    $.ajax({
        url: 'http://localhost:3000/employees',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(reqData),
        success: function(data){
                        console.log("succfully  data added",data);
                        alert('succfully  data added ');
                    },
        error: function (xhr, textStatus, errorThrown) {
            console.log('failed');
        }
    })

   // setTimeout(() => {
        window.location.href="/EmployeePayroll/pages/Dashboard.html";
   // },2000);

  
}
const cancel = () => {
    window.location.href = "/EmployeePayroll/pages/Dashboard.html";
  }