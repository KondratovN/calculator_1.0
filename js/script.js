const wrapper = document.querySelector('.wrapper')
const result = document.querySelector('.inp')

wrapper.addEventListener('click', function(event) {

    if(!event.target.classList.contains('btn')) return;

    const value = event.target.innerText;

    switch(value) {
        case 'AC': 
        result.innerText = '';
        break

        case '=': 
        result.innerText = eval(result.innerText).toFixed(2);
        break

        default: 
        result.innerText += value
    };

});