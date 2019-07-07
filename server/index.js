const express = require('express');
const app = express();
app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
