$(document).ready(function() {
const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        if (validateForm()) {
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwBEgDlyWSd3ODUBw06YZo2oTfmetBvfkeRQU7U-N9Vm_Fnmv-MTTnvH6VB23derxnc/exec",
                data:$(this).serialize(),
                method:"POST",
                success:function (response){
                    console.log("Success:", response);
                    showMessage();
                    form.reset();
                },
                error:function (err){
                    console.log("Error:", err);
                    alert("Something Error")
    
                }
            })
        }
    });
});
    function validateForm() {
        const name = document.getElementById('uname').value;
        const phoneNumber = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === ''){
            alert('Name is required.');
            return false;
        }else if( phoneNumber.trim() === ''){
            alert('Phone number is required.');
            return false;
        }else if (email.trim() === ''){
            alert('Email is required.');
            return false;
        }else if ( message.trim() === '') {
            alert('Message is required.');
            return false;
        }
        return true;
    }

    function showMessage(){
        alert('Form submitted successfully!');
    }

