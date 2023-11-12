## Jochong Exception
### Usage
```bash
npm i jochong-exception
```

```javascript
const { BadRequestException } = require('jochong-exception');

new BadRequestException('title');
```

### In Express
```javascript
const { BadRequestException } = require('jochong-exception');
const app = express();

app.get('/', (req, res, next) => {
    if (err) {
        return next(new InternalServerErrorException('Unexpected Error Occured.', err))
    }

    // Do Something...
});

app.use((err, req, res, next) => {
    if (err instanceof Exception) {
        res.status(err.status).end();
    }

    // Do Something...
});
```
