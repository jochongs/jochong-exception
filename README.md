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
});

app.use((err, req, res, next) => {
    res.status(err.status).end();
});
```
