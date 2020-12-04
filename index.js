const app = require('./config/server')();
const port = app.get('port');

app.listen(port, () => {

    console.log(`Porta utilizada: ${port}`)
});
