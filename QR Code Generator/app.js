let qrimg=document.getElementById("qrimg");
let inputvalue=document.getElementById("inputvalue");

function qrGenerator (){
    if(inputvalue.value.length>0){

        // here use the qr code api
        qrimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputvalue.value;

    }else{
        window.alert("please enter something");
    }
    
}