const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (req,res) => {

    let arr = ['a','b','a','a'];
    let n = 20;


    function repeatedString(arr, n) {
        let fullRepeats = Math.trunc(n / arr.length);
        let remainder = n % arr.length;
        let countA = 0;
      
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 'a') {
            countA++;
          }
        }
      
        countA = countA * fullRepeats;
      
        if (remainder) {
          for (let i = 0; i < remainder; i++) {
            if (arr[i] === 'a') {
              countA++;
            }
          }
        }
      
        res.send({countA});
        console.log({countA})
    }
    repeatedString(arr,n)
});

app.listen(3001, () => {
    console.log('server listening on 3001');
});