
document.getElementById('add-money1').style.display = 'block';  
document.getElementById('cashout').style.display = 'none';   

document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('add-money1').style.display = 'block'; 
    document.getElementById('cashout').style.display = 'none'; 
});

document.getElementById('cashout-box').addEventListener('click', function () {
    document.getElementById('cashout').style.display = 'block'; 
    document.getElementById('add-money1').style.display = 'none'; 
});
// transfer
document.getElementById('add-money-box').style.display ='block';
document.getElementById('Transfer').style.display ='none';
document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('add-money1').style.display = 'block'; 
    document.getElementById('Transfer').style.display = 'none'; 
});

document.getElementById('Transfer-box').addEventListener('click', function () {
    document.getElementById('Transfer').style.display = 'block'; 
    document.getElementById('add-money1').style.display = 'none'; 
});
// trns form 1
document.getElementById('cashout-box').style.display ='block';
document.getElementById('Transfer').style.display ='none';
document.getElementById('cashout-box').addEventListener('click', function () {
    document.getElementById('cashout').style.display = 'block'; 
    document.getElementById('Transfer').style.display = 'none'; 
});

document.getElementById('Transfer-box').addEventListener('click', function () {
    document.getElementById('Transfer').style.display = 'block'; 
    document.getElementById('cashout').style.display = 'none'; 
});
