// 生成随机数
// Math.floor() 使浮点数向下取整
// Math.random() 生成一个大于等于0且小于等于1的浮点数
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 游戏结果存储
// 定义一个guessses常量
// document.querySelector()通过css选择器来查找元素
const guesses = document.querySelector(".guesses");
const count = document.querySelector(".count")
const result = document.querySelector(".result");
const clue = document.querySelector(".clue");

// 数字判断存储
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

// 计数器和重置按钮
let guessCount = 1;
let resetButton;

// 条件判断
function checkGuess() {
  const userGuess = Number(guessField.value);
  console.log(userGuess)

  // textContent和innerHtml类似, textContent只返回或设置纯文本内容, innerHtml返回或设置HTML字符串
  // 实现了不覆盖原先内容
  if (guessCount === 1) {
    guesses.textContent = "之前的猜测：";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;  // `${}` ES6的新方法, 它允许你在字符串中嵌入表达式
  count.textContent = "猜测的次数：" + `${guessCount}`;
  
  // 判断结果
  if (userGuess === randomNumber) {
    result.textContent = "恭喜你! 你答对了!";
    result.style.backgroundColor = "green";
    // clue.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    result.textContent = "game over!";
    // clue.textContent = "";
    setGameOver();
  } else {
    result.textContent = "答错啦!"
    result.style.backgroundColor = "red";
    
    if (userGuess < randomNumber) {
      clue.textContent = "您猜测的数字太小！"
    }else {
      clue.textContent = "您猜测的数字太大！"
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();  // focus()方法, 用于将键盘焦点设置到指定的元素上
}

function setGameOver() {
  guessField.disabled = true;  // 禁止输入
  guessSubmit.disabled = true; // 禁止提交
  resetButton = document.createElement("button");  // 先创建需要的元素(button)
  resetButton.textContent = "重新开始";
  document.body.append(resetButton);  // 然后再把创建好的元素(button)添加到页面中
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");

  // 使用for...of循环遍历resetParas中的每个元素 
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  result.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// checkGuess()
guessSubmit.addEventListener("click", checkGuess);