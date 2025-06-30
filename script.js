function recommend() {
  console.log("recommend() 執行中...");
  
  const scrollType = document.getElementById("scrollType").value;
  const result = document.getElementById("result");

  function changeTitle() {
  const title = document.getElementById("title");
  title.innerHTML = "已進入推薦模式！";
  title.style.color = "blue";
}
  
  let message = "";

  if (scrollType === "10%") {
    message = "價格夠便宜，建議用金字塔衝裝法。";
  } else if (scrollType === "60%") {
    message = "成本合理，是最好的選擇。";
  } else if (scrollType === "100%") {
    message = "無風險但獲益最少的選擇。";
  } else {
    message = "請選擇一種卷軸類型。";
  }

  // 🖥️ 顯示推薦結果
  result.innerHTML = `<p>${message}</p>`;

  // ✅ Console log 升級提示
  console.log('%c推薦系統執行完成', 'color: #00f; font-weight: bold;');
  console.log('%c推薦內容為：', 'color: orange;', message);
}
