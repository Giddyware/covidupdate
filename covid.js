class Covid {
  async getCovidData(country) {
    const countryResponse = await fetch(
      `https://disease.sh/v3/covid-19/countries/${country}`
    );
    const countryData = await countryResponse.json();

    return {
      countryData, //profile
    };
  }
}
