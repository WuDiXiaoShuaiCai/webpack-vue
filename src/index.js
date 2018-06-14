import _ from 'lodash';
import './components/test-source/style.css';
import Icon from './components/test-source/naruto.png';
import Data from './components/test-source/data.xml';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

   console.log(Data);

    return element;
}

document.body.appendChild(component());