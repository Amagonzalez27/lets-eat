const router = require('express').Router();
module.exports = router;

router.get('/', (req, res, next) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];
  try {
    res.json(customers);
  } catch (err) {
    next(err);
  }
});
