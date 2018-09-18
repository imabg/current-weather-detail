class UI {
    constructor(){
        this.data = document.querySelector('.profile');
    }
    renderData(val){
        this.data.innerHTML = `
        <div class="container mt-6">
            <div class="card card-body mt-6 bg-info ">
                <div class="card-content">
                    <div class="col-md-9 text-center">
                    <h1>${val.data.name}<span class="badge badge-secondary">${val.data.sys.country}</span></h1>
                    <ul class="list-group">
                        <li class="list-group-item text-center">Latitude: ${val.data.coord.lat}</li>
                        <li class="list-group-item text-center">Longitude: ${val.data.coord.lon}</li>
                        <li class="list-group-item text-center">Description: ${val.data.weather["0"].main}</li>
                        <li class="list-group-item text-center">Cloudness: ${val.data.clouds.all}%</li>
                        <li class="list-group-item text-center">Tempeature: ${val.data.main.temp - 273.15}&deg;C</li>
                        <li class="list-group-item text-center">Pressure: ${val.data.main.pressure}</li>
                        <li class="list-group-item text-center">Humidity: ${val.data.main.humidity}%</li>
                        <li class="list-group-item text-center">Wind Speed: ${val.data.wind.speed}Km/hr</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}