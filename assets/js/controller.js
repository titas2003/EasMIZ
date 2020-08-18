$(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#name").val();
        var fname = $("#fname").val();
        var gname = $("#gname").val();
        var cnumber = $("#cnumber").val();
        var lnumber = $("#lnumber").val();
        var email = $("#email").val();
        var ldnumber = $("#ldnumber").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        var address = $("#address").val();
        var classes = $("#classes").val();
        var section = $("#section").val();
        var ses = $("#ses").val();
        if(password == cpassword) {
            var data = {
                "name" : name,
                "fname" : fname,
                "gname" : gname,
                "cnumber" : cnumber,
                "lnumber" : lnumber,
                "email" : email,
                "ldnumber" : ldnumber,
                "password" : password,
                "address" : address,
                "classes" : classes,
                "section" : section,
                "ses" : ses
            }

            $.ajax({
                type : "post",
                url : "https://db-care9-com.herokuapp.com/regData",
                dataType: "text",
                data : data,
                success : function(student) {
                    var stuData = JSON.parse(student)
                    console.log("Welcome" + stuData.name);
                }   
            });
        }
        else {
            alert("Please confirm the password");
        }
        alert("hello");
    })
})