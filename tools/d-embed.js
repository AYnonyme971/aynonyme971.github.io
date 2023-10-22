const title = document.getElementById("title");
const name = document.getElementById("name");
const color = document.getElementById("color");
const description = document.getElementById("desc");
const url = document.getElementById("url");
const output = document.getElementById("output");
const makeItBtn = document.querySelector("button");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

makeItBtn.addEventListener("click", updateCode);

function updateCode() {
    const titleValue = title.value;
    const nameValue = name.value;
    const colorHex = color.value;
    const urlValue = url.value;
    const descValue = description.value;

    const code = `<meta name="theme-color" content="${colorHex}">\n<meta name="og:title" content="${titleValue}">\n<meta name="og:website_name" content="${nameValue}">\n<meta name="og:description" content="${descValue}">\n<meta name="og:url" content="https://${urlValue}">`;
    output.innerText = code;
}
