// モーダルとボタンの要素を取得
const modal = document.getElementById("customAlert");
const btn = document.getElementById("searchBtn");
const span = document.getElementById("closeBtn");
const alertMessage = document.getElementById("alertMessage");

// 書籍が存在しない場合のエラーメッセージ
const errorMessage = "noExist";

// ボタンがクリックされたときの処理
btn.addEventListener("click", function() {
  // エラーメッセージが "noExist" の場合、モーダルを表示
  if (errorMessage === "noExist") {
    alertMessage.textContent = "書籍が見つかりません。";
    modal.style.display = "block";
  }
});

// 閉じるボタンがクリックされたときの処理
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// モーダルの外側がクリックされたときの処理
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});