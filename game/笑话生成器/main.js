// 1. 定义变量和函数

// 用户输入的名字
const customName = document.getElementById('customname');
// 随机生成按钮
const randomize = document.querySelector('.randomize');
// 生成的内容
const story = document.querySelector('.story');

// 获取一个(0-2)的随机数组下标
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  console.log(random)
  return array[random]
}

// 2. 纯文本字符串
// :inserta: 是占位符 与 下面的 ':insertx:' 联动, 可以把所需要的值 嵌入到占位符的位置
let storyText = '今天气温 35 摄氏度, :inserta:出去遛弯。当走到:insertb:门前时, 突然就:insertc:。人们都惊呆了, 李雷全程目睹但并没有慌, 因为:inserta:是一个 130 公斤的胖子, 天气又辣么热。'

let insertX =  ['怪兽威利', '大老爹', '圣诞老人']
let insertY = ['肯德基', '迪士尼乐园', '白宫']
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了']


// 3. 事件监听器

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // 随机内容 嵌入到 占位符 中
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // 从这里为什么要用到 replace(), 因为直接 赋值 会导致原先的内容被覆盖, 所以用 replace() 替换掉 原先内容, 然后再赋值给 newStory
  newStory = newStory.replace(':inserta:', xItem);
  newStory = newStory.replace(':insertb:', yItem);
  newStory = newStory.replace(':insertc:', zItem);

  // 判断是否为空
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('李雷', name);
  }

  // 判断 美式按钮 是否被 点击
  if(document.getElementById("american").checked) {
    const weight = Math.round(140 * 2.20462) + ' 磅';
    const temperature =  Math.round(35 * 9 / 5 + 32) + ' 华氏度';
    newStory = newStory.replace('35 摄氏度', temperature);
    newStory = newStory.replace('130 公斤', weight);
  }

  story.textContent = newStory;
  // story.style.visibility = 'visible' 显示内容(觉得多次一举就把css里的隐藏代码删掉即可)
  story.style.visibility = 'visible';
}