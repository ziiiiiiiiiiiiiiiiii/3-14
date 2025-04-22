let inputText = "🍷💕🎁 "; // 預設文字內容
let inputBox;
let slider;
let button;
let dropdown;
let iframe;

function setup() {//這是一個設定函數只執行一次
  createCanvas(windowWidth, windowHeight);
  background("#fefae0");

  // 建立輸入框
  inputBox = createInput(inputText);
  inputBox.position(10, 10);
  inputBox.input(updateText);

  // 建立滑桿
  slider = createSlider(12, 30, 32);
  slider.position(320, 10);

  // 建立按鈕
  button = createButton('跳動');
  button.position(450, 10);
  button.mousePressed(toggleBounce);

  // 建立下拉式選單
  dropdown = createSelect();
  dropdown.position(800, 10);
  dropdown.option('淡江大學');
  dropdown.option('教育科技學系');
  dropdown.changed(updateIframe);

  // 建立 iframe
  iframe = createElement('iframe');
  iframe.position(10, 50);
  iframe.size(windowWidth - 20, windowHeight - 60);
  iframe.attribute('src', 'https://www.tku.edu.tw/');
}

function updateText() {
  inputText = this.value();
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function updateIframe() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw/');
  } else if (selected === '教育科技學系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  }
}

function draw() {//這是一個繪圖函數，會一直執行
  background("#fefae0"); // 確保每次繪圖時背景都是乾淨的
  let textSizeValue = slider.value();
  textSize(textSizeValue);
  text("字體大小：" , 200, 10);
  textAlign(LEFT, TOP);
  fill(0);
  stroke(0);
  strokeWeight(1);
  let textW = textWidth(inputText + " "); // 計算文字加上空格的寬度
  for (let y = 100; y < height; y += 50) { // 每50像素換行
    for (let x = 0; x < width; x += textW) {
      let offsetY = isBouncing ? random(-5, 5) : 0;
      text(inputText, x, y + offsetY);
    }
  }
  fill("#c1121f");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.size(windowWidth - 20, windowHeight - 60);
}
