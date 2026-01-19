// textというidをもつHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//btnというidをもつHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 表示する文章を書き換える
  if ( text.textContent === 'ボタンをクリックしてください' ) {
    text.textContent = 'ボタンをクリックしました';
  } else {
    text.textContent = 'ボタンをクリックしてください';
  }
});