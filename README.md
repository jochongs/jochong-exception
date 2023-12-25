## Jochong Exception

### Usage

```bash
npm i jochong-exception
```

You can create HTTP exception.

```javascript
const { BadRequestException } = require('jochong-exception');

new BadRequestException(null, 'title');
```

```javascript
const { InternalServerErrorException } = require('jochong-exception');

if (err) {
    //default message false
    return new InternalServerErrorException(err, 'Unexpected Error Occured.', false);
}
```
The first parameter is a place for error.

```javascript
return new BadRequestException(null, { reason: 'email' });
```
Also, the second parameter may contain an object.

When inserting a character string, you can receive a response with a 'message' as a key value.

### In Express
```javascript
const { BadRequestException } = require('jochong-exception');
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