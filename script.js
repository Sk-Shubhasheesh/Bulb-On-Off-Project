//turn on
const turnOn = () => {
    // bulb on
    let imgOb = document.getElementById('bulb')
    imgOb.setAttribute('src','ONbulb.jpg');

};

// trun off

const turnOff = () => {
    let imgOb = document.getElementById('bulb');
    imgOb.setAttribute('src', 'OFFbulb.jpg')
};

// toggle

const toggleBulb = () => {
    let imgOb = document.getElementById('bulb');
    let scrValue = imgOb.getAttribute("src")
    let buttonOb = document.getElementById('onOffButton')
    let buttonText = buttonOb.innerHTML
    if(scrValue=='OFFbulb.jpg'){
        turnOn()
        buttonOb.innerHTML="OFF"
    }else{
        turnOff()
        buttonOb.innerHTML="ON"
    }
}