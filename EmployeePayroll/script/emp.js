const  submitForm=()=>{

    const name=$('#name').val()
    console.log(name);

    const selectImage=$('input[name="Profile"]:checked').val();
    console.log(selectImage);

    const selectGender=$('input[name="gender"]:checked').val();
    console.log(selectGender);

    const selectDepartment=$('input[name="dept"]:checked').val();
    console.log(selectDepartment);

    var dept= []
    $('input[name="dept"]:checked').each(function() {
       
       dept.push($(this).val());
       console.log(dept); 
     });
   
    const selectSalary=$('#salary').val();
    console.log(selectSalary);

    const selectDay=$('#Day').val();
    const selectMonth=$('#Month').val();
    const selectYear=$('#Year').val();
    console.log("Start Date="+selectDay+selectMonth+selectYear);

    const note=$('#notes').val();
    console.log(note);

    let reqData={
        "name":name,
        "profile":selectImage,
        "gender":selectGender,
        "department":dept,
        "salary": selectSalary,
        "startDate":selectDay + ' '+selectMonth + ' ' +selectYear,
        "notes": note
    }

    console.log(reqData);
    
    $.ajax({
        type:'POST',
        url: "  http://localhost:3000/employees ",
        datatype:'json',
        data: reqData,

        success: function(data){
            console.log("data added succfully",data);
            alert('data added succfully');
        },
        error: function (error){
            console.log(error);
        }

    });


    
}


