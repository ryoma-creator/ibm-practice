const messageElement = document.getElementById('message');
const buttonElement = document.getElementById('changeText');

buttonElement.addEventListener('click', funtion(){
    messageElement.textContent = 'こんにちわ'
});