## Jochong Exception

### Usage

```bash
npm i jochong-exception
```

You can create HTTP exception.

The second parameter is a place for error.

```javascript
const { BadRequestException } = require('jochong-exception');

new BadRequestException('title');
```

```javascript
const { InternalServerErrorException } = require('jochong-exception');

if (err) {
    // include err
    return new InternalServerErrorException('Unexpected Error Occured.', err);
}
```

```javascript
return new BadRequestException({ reason: 'email' });
```
Also, the first parameter may contain an object.

When inserting a character string, you can receive a response with a 'message' as a key value.

### In Express
```javascript
const { BadRequestException, Exception } = require('jochong-exception');
const app = express();

app.use((err, req, res, next) => {
    if (err instanceof Exception) {
        res.status(err.status).send(err.response);
    }

    // Do Something...
});
```
Never forget that there is an error in HTTP exception instance.

Never send an error to the client.