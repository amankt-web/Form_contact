const form = document.querySelector("form"),
statusTxT = form.querySelector(".button-area span"); 

form.onsubmit = (e)=>{
    e.preventDefault(); // preventing form from submitting
    statusTxT.style.color="#0D6EFD";
    statusTxT.style.display = "block";

    let xhr = new XMLHttpRequest(); // creating new xml objects
    xhr.open("POST","message.php",true); //sending post request to message.php file 
    xhr.onload = () =>{ //once ajax is loaded
        if(xhr.readyState == 4 && xhr.status ==200){ // if ajax status is 200 and 4 means there is no error
            let response = xhr.response; // storing ajax response in a response value 
            if(response.indexOf("Email and password is required!")!=-1 ||response.indexOf("Enter a Valid email!")|| response.indexOf("Sorry failed to send your message!"))
            statusTxT.style.color ="red"
        }else{
            form.reset();
            setTimeout(()=>{
                statusTxT.style.display = "none";
            }, 3000);// hide the status text after 30 seconds if the message is sent
        }
        statusTxT.innerText = response;
    }
    let formData = new FormData(form);// creating new formData obj. This obj is used to send form data
    xhr.send(formData);
}