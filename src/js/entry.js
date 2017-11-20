'use strict'

require('../css/style.css') ;
import moment from 'moment';
import _ from 'lodash' ;
import Icon from '../img/girl.png' ;
import xmlData from '../data.xml' ;

var  a = require('./a.js') ;
var babelTest = require('./babel-test.js')
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a') ;

function hello() {
	document.write('It works.\n') ;
	document.write(a) ;
}

function component() {
	var element = document.createElement('div') ;
	element.innerHTML = _.join(['Hello', 'webpack', '']) ;
	element.classList.add('red-bg')
	return element ;
}


hello() ;
console.log(rightNow) ;

console.log('test babel start...')
console.log(babelTest.name) ;
console.log(babelTest.age) ;
console.log('test babel end') ;
console.log(xmlData) ;
console.log(JSON.stringify(xmlData)) ;
document.body.appendChild(component()) ;