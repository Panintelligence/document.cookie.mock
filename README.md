# document.cookie.mock
An implementation of document.cookie to use in node that behaves just like `document.cookie` on a browser.

Useful for testing!

## Features

|   Properties  |  Implemented  |
|---------------|---------------|
| Get behaviour | Yes           |
| Set behaviour | Yes           |
| `expires`     | Yes           |
| `max-age`     | Yes           |
| `domain`      | Planned       |
| `path`        | Planned       |
| `secure`      | Ideas welcome |
| `samesite`    | Ideas welcome |

## Installation
```bash
npm install document.cookie.mock
```

## How to use

```javascript
const DocumentCookie = require('document.cookie.mock');

const document = new DocumentCookie();

document.cookie = "key=value; max-age=3600";
console.log(document.cookie); // "key=value"

document.cookie = "key2=value2";
console.log(document.cookie); // "key=value; key2=value2"

document.cookie = "key=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
console.log(document.cookie); // "key2=value2"
```

Or if you want to plug it into your own document mock...
```javascript
const DocumentCookie = require('document.cookie.mock');

class Document {
    constructor(){
        // ...
        this._cookie=new DocumentCookie();
        // ...
    }
    
    // ...

    get cookie(){
        return this._cookie;
    }

    set cookie(v){
        return this._cookie = v;
    }

    // ...
}
```

## Development
```bash
git clone git@github.com:Panintelligence/document.cookie.mock.git
cd document.cookie.mock.git
npm install
```