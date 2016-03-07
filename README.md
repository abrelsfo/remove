##Remove_Index

> Removes the element at the specified index. I felt splice was didn't read cleanly so I decided to make it cleaner looking

## Installation

```npm install remove_index```

## Usage
```js
var remove = require('remove_index');
var a = ['A','B','C'];

remove(a, 0);
//=>['B','C']
```

## API

### remove_index(arr, ind)

##### arr
Type: Array

##### ind
Type: Integer<br>
Condition: ind must be greater than or equal to 0

Removes the element at the specified index.

##License

MIT © [Alex Brelsford](abrelsfo.github.io)
