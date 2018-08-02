# PicoSheet
A small wrapper around google sheet's JSON API

see https://coderwall.com/p/duapqq/use-a-google-spreadsheet-as-your-json-backend
for details


# Usage
```js
    const GDocs = require('picosheet')
    const sheetID = 'AVeryLongKeyYouGetFromGoogle'
    
    GDocs(sheetID)
        .then(data => doSomething(data))
```
