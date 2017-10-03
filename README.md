# logPapaya

This module is responsible for all the system logging.
It has two goals : 
    - add levels
    - link it with logDNA

We use Winston and the logs are sent to logDNA.

## Install and use it

### Installation

You just need to add the npm package :
```bash
npm install https://github.com/tgorka/logpapaya --save
```

Or using yarn 
```bash
yarn add https://github.com/tgorka/logpapaya --save
```

### Inizialisation

In your index.js you need to initiate the module and give the logDNA key.
```javascript
import { logging } from "logpapaya";
logging.init({
    app: "the name of your app",
    env: "the environnement you use can be anything",
    key: "Your logDNA key"
}, "hostname / can be anything / prod . dev . test");
```

Now it is ready to use

·
### Utilisation

#### LEVELS

The levels used are the following : 
<br />
1. error
1. warn
2. info 
3. verbose
4. debug
5. silly

By default this system will be used and sent to logDNA

If you put the **hostname** equal to "production" only the following levels will be considered: 
<br />
1. error
1. warn
2. info

#### Method

For each of one of the levels we have a method: 
```javascript
import { logging } from "logpapaya";
//For example for the error level
logging.error("Something went wrong");
//"Something went wrong"
```

If you add a second argument it will appear as a title:
```javascript
import { logging } from "logpapaya";
//For example for the error level
logging.error("Something went wrong", "module1");
// -->module1<--  "Something went wrong"
```