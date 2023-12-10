const title = document.getElementById("title"),
  name = document.getElementById("name"),
  color = document.getElementById("color"),
  description = document.getElementById("desc"),
  url = document.getElementById("url"),
  imageUrl = document.getElementById("image"),
  output = document.getElementById("output"),
  makeItBtn = document.querySelector("button"),
  form = document.querySelector("form"),
  popUp = document.querySelector(".pop_up"),
  checkbox = document.getElementById("realTime"),
  info = document.getElementById("info"),
  allInputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
let realTimeUpdate = false;
makeItBtn.addEventListener("click", updateCode);
checkbox.onclick = () => {
  localStorage.setItem("RTU", checkbox.checked);
};
allInputs.forEach((input) => {
  input.oninput = () => {
    if (
      (localStorage.getItem("RTU") || false != false) &&
      input.id != "url" &&
      input.type != "checkbox"
    )
      updateCode();
    localStorage.setItem(input.id, input.value);
  };
});
title.value = localStorage.getItem("title");
name.value = localStorage.getItem("name");
color.value = localStorage.getItem("color");
url.value = localStorage.getItem("url");
description.value = localStorage.getItem("desc");
imageUrl.value = localStorage.getItem("image");

function updateCode() {
  let titleValue = title.value;
  let nameValue = name.value;
  let colorHex = color.value;
  let urlValue = url.value.toLowerCase();
  let descValue = description.value;
  let imageValue = imageUrl.value;
  const reg = new RegExp(/ /gi);
  const urlReg =
    /^https:\/\/[a-zA-Z0-9]{2,}\.[a-z]{2}|^http:\/\/[a-zA-Z0-9]{2,}.[a-z]{2,4}/;
  if (reg.test(urlValue))
    return alert("Your URL contains a space, please edit it");
  if (imageValue != "" && !imageValue.startsWith("https://" || "http://"))
    return alert(
      "Your Image URL is invalid (it has to be started by https:// or http://)"
    );
  if (reg.test(imageValue))
    return alert("Your Image URL contains a space; please edit it");
  if (imageValue != "" && !imageValue.endsWith(".png" || ".jpg" || ".jpeg"))
    return alert(
      "Your Image format is invalid (if you want to add an extension that works go on my portfolio repo and create an issue: https://github.com/AYnonyme971/aynonyme971.github.io)"
    );
  if (!urlReg.test(urlValue)) return alert("Your URL is invalid");
  if (titleValue.length > 64) titleValue = titleValue.slice(0, 64);
  if (descValue.length > 64) descValue = descValue.slice(0, 64);
  if (urlValue.length > 64) urlValue = urlValue.slice(0, 64);
  if (nameValue.length > 76) nameValue = nameValue.slice(0, 76);
  const code = `<meta name="theme-color" content="${colorHex}">\n<meta name="og:type" content="website">\n<meta name="og:title" content="${titleValue}">\n<meta name="og:website_name" content="${nameValue}">\n<meta name="og:description" content="${descValue}">\n<meta name="og:url" content="${urlValue}">${
    imageValue != "" ? `\n<meta name="og:image" content="${imageValue}">` : ""
  }`;
  output.innerText = code;
  output.style.cursor = "pointer";
  output.setAttribute("title", "Click to copy");
}
color.oninput = () => {
  updateCode();
};
output.onclick = () => {
  if (output.innerText == "") return;
  navigator.clipboard.writeText(output.innerText);
  localStorage.setItem("title", "");
  localStorage.setItem("name", "");
  localStorage.setItem("color", "#000000");
  localStorage.setItem("url", "");
  localStorage.setItem("desc", "");
  localStorage.setItem("image", "");
  title.value = "";
  name.value = "";
  color.value = "#000000";
  url.value = "";
  description.value = "";
  imageUrl.value = "";
  alert("Copied to clipboard!");
  // popUp.classList.add("active");
  // setTimeout(() => popUp.classList.remove("active"), 1000);
  setTimeout(() => {
    output.innerText = "";
    output.setAttribute("title", "");
    output.style.cursor = "default";
  }, 1_000);
};
info.onclick = () => {
  alert(
    "Info: If you put Real Time Update (RTU) you should modifiy another proprety to update URL!\nInfo: If you change color, it will RTU by itself"
  );
};
