const axios = require('axios');

const url = 'https://economia.awesomeapi.com.br/json/list/USD-BRL/2';

const getData = (req, res) => {
  axios.get(url)
    .then((response) => {
      const apiData = response.data;
      const [ today, yesterday ] = apiData;
      const { name: name, high: highToday, low: lowToday, bid } = today;
      const { high: highYesterday, low: lowYesterday } = yesterday;
      const returnData = [];
      let averageCurrentDay = (parseFloat(highToday) + parseFloat(lowToday)) / 2;
      let averageLastDay = (parseFloat(highYesterday) + parseFloat(lowYesterday)) / 2;
      let averageLastTwoDays = (averageLastDay + averageCurrentDay) / 2;
      returnData.push({
        'name': name,
        'highValue': highToday,
        'lowValue': lowToday,
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
