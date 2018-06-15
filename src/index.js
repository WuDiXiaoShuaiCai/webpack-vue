import _ from 'lodash';
import './components/test-source/style.css';
import Icon from './components/test-source/naruto.png';
import Data from './components/test-source/data.xml';
import printMe from './print.js';
import './styles.css';
import { cube } from './math.js';

console.log('mode:', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('div');
    var element2 = document.createElement('pre');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //添加css
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = Icon;

   element.innerHTML = [
       'Hello webpack!',
       '5 cubed is equal to ' + cube(5)
   ].join('\n\n');
    

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(myIcon);
   element.appendChild(btn); 


   console.log(Data);

    return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}