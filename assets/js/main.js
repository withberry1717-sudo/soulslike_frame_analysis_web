
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    const box = document.createElement("div");
    box.className = "missing-image";
    box.innerHTML = `<strong>画像が見つかりません</strong><br><span>${img.getAttribute("src")}</span>`;
    box.style.padding = "40px";
    box.style.color = "#a89d8b";
    box.style.lineHeight = "1.8";
    img.parentElement.appendChild(box);
  });
});
