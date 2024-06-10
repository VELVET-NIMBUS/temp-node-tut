const { log } = require('console');
const {readFile,writeFile} = require('fs')

readFile('./Asynchronous JS/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
  const first = result;
  readFile('./Asynchronous JS/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second= result;
    writeFile('./Asynchronous JS/async.txt',`Here is the content for this file:
        ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)

        })
  })
})