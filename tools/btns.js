const homeBtn = document.querySelector("#home"),
  bfrBtn = document.querySelector("#bfr"),
  aftBtn = document.querySelector("#aft");

homeBtn.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = "../tools.html";
  a.click();
});
bfrBtn.addEventListener("click", () => {
  const href = window.location.href;
  const a = document.createElement("a");
  if (href.endsWith("d-preview.html")) {
    a.href = "d-embed.html";
    a.click();
  }
});
aftBtn.addEventListener("click", () => {
  const href = window.location.href;
  const a = document.createElement("a");
  if (href.endsWith("d-preview.html")) {
    a.href = "t-embed.html";
    a.click();
  } else if (href.endsWith("d-embed.html")) {
    a.href = "d-preview.html";
    a.click();
  }
});
