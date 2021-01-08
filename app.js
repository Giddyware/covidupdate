const ui = new UI();
const covid = new Covid();
const searchDetail = document.getElementById('searchDetail');

searchDetail.addEventListener('keyup', (e) => {
  // const country = searchDetail.textContent;
  // e.preventDefault;
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    covid.getCovidData(userText).then((data) => {
      if (
        data.countryData.message ===
        "Country not found or doesn't have any cases"
      ) {
        // Show alert
      } else {
        // Show update
        ui.showUpdate(data.countryData);
      }
    });
  } else {
    // Clear update
  }
});

// const pepperSize = prompt ('What is the pepper size?');

// let size = pepperSize.valueOf()

// if (size === "big"){
//     console.log('The price for your pepper is 1000 naria')
// }else if(size === "medium"){
//     console.log('The price for your pepper is 500 naria')
// }else if(size === "small"){
//     console.log('The price for your pepper is 200 naria')
// }else (console.log("wrong input"))
