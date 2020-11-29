
    $("#submit").on('click',(e)=>{
        e.preventDefault();
        console.log($("#inputEmail").val());
        console.log($("#inputPassword").val())
        if($("#inputEmail").val() == 'acme@acmesystems.com' && $("#inputPassword").val() == '12345'){
            $(location).attr('href', 'Servers.html')
        }else{
            alert("Wrong credentials");
            $("#inputPassword").val('');
        }
    });

    $('#logout').on('click',()=>{
        console.log("logout clicked");
        $(location).attr('href', 'login.html');
    });
