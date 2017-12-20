var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/feedback/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('feedback').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
app.post('/feedback', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('feedback').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

app.delete('/feedback/:id', (req, res) => {
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  db.collection('feedback').remove(details, (err, item) => {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
      res.send('Note ' + id + ' deleted!');
    }
  });
});
app.put ('/feedback/:id', (req, res) => {
   const id = req.params.id;
   const details = { '_id': new ObjectID(id) };
   const note = { text: req.body.body, title: req.body.title };
   db.collection('feedback').update(details, note, (err, result) => {
     if (err) {
         res.send({'error':'An error has occurred'});
     } else {
         res.send(note);
     }
   });
 });
};
