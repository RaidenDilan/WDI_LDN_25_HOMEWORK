const rp = require('request-promise');

function weather(req, res) {
  const baseUrl = 'https://api.darksky.net/forecast';
  // console.log(req.query.lat);
  // console.log(req.query.lng);

  rp({
    method: 'GET',
    url: `${baseUrl}/${process.env.DARKSKY_API_KEY}/${req.query.lat},${req.query.lng}`,
    json: true
  })
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
}

module.exports = {
  weather
};
