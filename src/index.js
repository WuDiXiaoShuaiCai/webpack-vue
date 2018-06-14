import _ from 'lodash';
import './components/test-source/style.css';
import Icon from './components/test-source/naruto.png';
import Data from './components/test-source/data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //添加css
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = Icon;

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(myIcon);
   element.appendChild(btn);


   console.log(Data);

    return element;
}

document.body.appendChild(component());