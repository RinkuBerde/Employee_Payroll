const  submitForm=()=>{

    const name=$('#name').val()
    console.log(name);

    const selectImage=$('input[name="Profile"]:checked').val();
    console.log(selectImage);
    
     
    let reqData={
        "name":name,
        "profile":selectImage
    }
    
    $.ajax({
        type:'POST',
        url: "  http://localhost:3000 ",
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


    console.log("Using jquery",reqData)  ;  
}
