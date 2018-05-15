import express from 'express';
import path from 'path';
const port = process.env.PORT ? process.env.PORT : 3000;

const fallBackToIndex = (req,res) => (res.send("fallBackToIndex build and start"));

const app = express();
app.use(express.json());
app.use('/health', (req, res) => {res.send("health")});
app.use('/*', fallBackToIndex);

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.error(err);
  }
  console.log('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
