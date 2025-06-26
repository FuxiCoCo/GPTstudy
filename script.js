function recommend() {
  console.log("recommend() 執行中...");
  
  const scrollType = document.getElementById("scrollType").value;
  const result = document.getElementById("result");

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

  result.innerHTML = `<p>${message}</p>`;
}
