const btn = document.querySelector(".btn");

function result(val, context){
    if(!isFinite(+val)){
        return `Kiritilgan ma'lumot noto'g'ri`;
    }
    else{
        let fool;

    switch(context){
        case 'h': fool = String(val/3.6); break;
        case 'b': fool = String(val/20.7); break;
        case 'c': fool = String(val/70); break;
        case 'p': fool = String(val/800); break;
    }
    
    let indexDot = fool.indexOf('.');

    fool = `${fool.slice(0, indexDot)}.${fool.slice(indexDot+1, indexDot+3)}` * 3600;

    let hour, minute, secund;

    hour = String(fool / 3600);
    hour = hour.slice(0, hour.indexOf('.'));
    minute = String((fool%3600)/60);
    minute = minute.includes('.') ? minute.slice(0, minute.indexOf('.')) : minute;
    secund = fool % 3600 % 60;
    
    return `${hour} soat ${minute} minut ${secund} sekund.`;
    }
    
}


btn.addEventListener("click", function () {
     let [input] = document.getElementsByClassName('inputs');
     let human = document.getElementById('human'),
         bycycle = document.getElementById('bycycle'),
         car = document.getElementById('car'),
         plane = document.getElementById('plane');

     human.innerHTML = result(input.value, 'h');
     bycycle.innerHTML = result(input.value, 'b');
     car.innerHTML = result(input.value, 'c');
     plane.innerHTML = result(input.value, 'p');

    let results = Array.from(document.getElementsByClassName('N_soat'));

    results.forEach(element => {
        if(element.innerHTML == `Kiritilgan ma'lumot noto'g'ri`){
            element.style.background = 'crimson'
        }
        else{
            element.style.background = 'green';
        }
    });

})