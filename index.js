const axios = require('axios');

const getData = (req, res) => {
  axios.get('https://economia.awesomeapi.com.br/json/list/USD-BRL/2')
    .then((response) => {
      const object = response.data;
      const returnData = [];
      let name = object[0].name;
      let highValue = object[0].high;
      let lowValue = object[0].low;
      let bid = object[0].bid;
      let averageCurrentDay = (parseFloat(highValue) + parseFloat(lowValue)) / 2;
      let averageLastDay = (parseFloat(object[1].high) + parseFloat(object[1].low)) / 2;
      let averageLastTwoDays = (averageLastDay + averageCurrentDay) / 2;
      returnData.push({
        'name': name,
        'highValue': highValue,
        'lowValue': lowValue,
        'bid': bid,
        'averageCurrentDay': averageCurrentDay,
        'averageLastTwoDays': averageLastTwoDays
      });
      console.log(returnData);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = getData;
