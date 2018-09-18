const weather = new Weather();
const ui = new UI();

document.querySelector('.btn').addEventListener('click', (e) =>{
    const search = document.getElementById('search');   
    const val = search.value;

    if(val !== ''){
        weather.showWeather(val)
        .then((data) => {
            ui.renderData(data);
        }).catch((err) => {
            alert('Not Found')
        });
    } else{
        alert('Enter City name')
    }

});