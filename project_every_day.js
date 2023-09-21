function isSignIn(object){
    var fromElement = document.querySelector(object.from);
    var messageContents = {};

    object.contents.forEach(function(content){

        var inputElement = fromElement.querySelector(content.id);

        if(Array.isArray(messageContents[content.id])){
            messageContents[content.id].push(content.check);
        }else{
            messageContents[content.id] = [content.check];
        }

        inputElement.onblur = ()=>{
            var errorMessage;// = content.check(inputElement.value);
            for(var i=0; i<messageContents[content.id].length; i++){
                if(messageContents[content.id][i](inputElement.value)){
                    errorMessage = messageContents[content.id][i](inputElement.value);
                    break;
                }
            }

            var messageElement = inputElement.parentElement.querySelector(object.spanMessage);
           
            if(errorMessage){
                messageElement.innerHTML = errorMessage;
                inputElement.classList.add('convertBackGroundRed');
                messageElement.classList.add('convertFrontRed');
            }

            inputElement.oninput = () => {
                messageElement.innerHTML ='';
                inputElement.classList.remove('convertBackGroundRed');
                messageElement.classList.remove('convertFrontRed');
    
            }
        }      
    })
    console.log(messageContents)
    console.log(object)
}


function isName(idName){
    return {
        id: idName,
        check: (value)=>{
            return value ? undefined : 'Please enter in here!';
        }
    }
}

function isEmail(idEmail){
    return {
        id: idEmail,
        check: (value)=>{
            var checkEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return checkEmail.test(value) ? undefined : 'This is an email !'
        }
    }
}