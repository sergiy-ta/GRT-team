'use strict';

const fs = require('fs');

const question_file = fs.readFileSync('question.json');
const result_file = fs.readFileSync('result.json');

let question_json = JSON.parse(question_file)[0];
let result_json = JSON.parse(result_file)[0];

function example1() {
    question_json = result_json;
    fs.writeFileSync('question.json', JSON.stringify(question_json));
}

function example2() {
    question_json['rpc'][0]['text'] = result_json['rpc'][0]['text'];
    question_json['price'][0]['text'] = result_json['price'][0]['text'];
    question_json['currency'][0]['text'] = result_json['currency'][0]['text'];
    fs.writeFileSync('question.json', JSON.stringify(question_json));
}

example1();