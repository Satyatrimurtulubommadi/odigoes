const validate=()=>{
    //taking the values
    let username=document.contact.username.value;
    let mobile=document.contact.mobile.value;
    let user_stutus=mobile_stutus=false;
    let alphepss=/^[A-Za-z]+$/;
    let numepss=/^[0-9]+$/;
    // username validation
    if(username===''){
        document.getElementById('usernote').innerHTML='enter ur name'
        user_stutus=false;
    }
    else{
        if(username.match(alphepss)){
            document.getElementById('usernote').innerHTML=''
            user_stutus=true;

        }
        else{
            document.getElementById('usernote').innerHTML='enter alphabrtics'
            user_stutus=false;
        }
    }
    //mobile validation
    if(mobile===''){
        document.getElementById('mobilenote').innerHTML='where is ur number ??'
        mobile_stutus=false;
    }
    else{
        if(mobile.match(numepss)){
            if(mobile.length==10){
                document.getElementById('mobilenote').innerHTML=''
                mobile_stutus=true;

            }
            else{
                document.getElementById('mobilenote').innerHTML='only enter 10 digit number'
                mobile_stutus=false;

            }
        }
        else{
            document.getElementById('mobilenote').innerHTML='i am ask only number'
            mobile_stutus=false;

        }
    }
    
    // return values
    if (user_stutus===true && mobile_stutus===true){
        return true;
    }
    else{
        return false;
    }

}


