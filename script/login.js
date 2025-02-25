
document.getElementById("login-btn").addEventListener('click',
    function(event){
        event.preventDefault()
        const accountnumber = document.getElementById("Account-number").value;
        const pin = document.getElementById("Pin").value;
        const convarted =parseInt(pin)
        if (accountnumber.length===11) {
            if (convarted===1234) {
                window.location.href = './main.html'
            }
            else{
                alert('pin tik nai');
            }
        }
        else{
            alert('need valid accoun number ');
        }
})