class UI {
  constructor() {
    this.countryData = document.getElementById('details');
  }

  showUpdate(country) {
    //user
    //console.log(country.countryInfo.flag)
    this.countryData.innerHTML = `
        <div class= "card card-body mb-3">
            <div class= "row">
                <div class="col-md-3">
                    <img class="fluid mb-2" src="${country.countryInfo.flag}">
                    
                </div>
                <div class="col-md-9">
                <span class="badge-pill badge-secondary">Total Cases: ${country.cases}</span>
                <span class="badge-pill badge-primary">Today's Cases: ${country.todayCases}</span>
                <span class="badge-pill badge-danger">Total Deaths: ${country.Deaths}</span>
                <span class="badge-pill badge-warning">Today's Deaths: ${country.todayDeaths}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Country: ${country.country}</li>
                    <li class="list-group-item">Continent: ${country.continent}</li>
                    <li class="list-group-item">Population: ${country.population}</li>
                    <li class="list-group-item">Tests: ${country.tests}</li>
                    <li class="list-group-item">Critical: ${country.critical}</li>
                </ul>
                </div>
            </div>
        <div>
        <!--<h3 class="page-heading mb-3">Detail</h3>--!>
        <!--<div id="detail"></div>--!>
        `;
  }
}
