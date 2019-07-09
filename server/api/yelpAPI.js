const router = require('express').Router();
const yelp = require('yelp-fusion');
const APIKEY = process.env.APIKEY;
const client = yelp.client(APIKEY);

router.get('/:type', async (req, res, next) => {
  const searchRequest = {
    term: req.params.type,
    location: 'boulder, co',
  };

  try {
    const promisedClient = await client.search(searchRequest);
    res.json(promisedClient.jsonBody.businesses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
