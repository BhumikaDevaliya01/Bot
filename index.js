// import random from 'random';
// import { Random } from 'random';
const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
// const random = require('random');
const FILE_PATH = './data.json';

// const DATE = moment().subtract(3,'y').add(1,'M').subtract(4,'w').add(2,'d').format();
    
// const data = {
//     date : DATE
// }
// jsonfile.writeFile(FILE_PATH,data, ()=> {
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();
//         // simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE});
//         // simpleGit().push();
// });
const makeCommit = n => {
    if(n===0) return simpleGit().push();
    // const x = random.int(0,54);
    // const y = random.int(0,6);
    // const x = Math.floor(Math.random()*54);
    const y = Math.floor(Math.random()*6);
    const DATE = moment().subtract(1,'y').add(y,'d').format();
    const data = {
        date : DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH,data, ()=> {
            simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},
                makeCommit.bind(this, --n)
            );
    });
}
makeCommit(4);