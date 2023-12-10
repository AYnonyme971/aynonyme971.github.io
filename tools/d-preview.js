const form = document.querySelector("form"),
  input = document.querySelector("input"),
  button = document.querySelector("button"),
  result = document.getElementById("result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  changeEmbed();
});

// result.innerHTML = `
// <div class="embed">
// <div id="embed">
// <div id="title"></div>
// <div id="color" style="--background: orange;"></div>
// </div>
// </div>
// `;

function changeEmbed() {
  const value = input.value;
  const values = getValues(value);
  console.table(values);
}

function getValues(value = "") {
  const array = [];
  const nameReg = new RegExp(/content="[a-zA-Z0-9]{1,}"/gi);
  const name = value.search(
    /<meta name="og\:website_name" content="[a-zA-Z0-9]{1,}">/g
  );
  const nameContents = nameReg.exec(value.substring(0, name));
  let nameContent = "";
  nameContents.forEach((i) => {
    nameContent = i;
  });
  nameContent = nameContent.slice(9, nameContent.length).slice(0, -1);
  array.push({ websiteName: nameContent });
  const titleReg = new RegExp(/content="[a-zA-Z0-9]{1,}"/gi);
  const title = value.search(
    /<meta name="og\:title" content="[a-zA-Z0-9]{1,}">/g
  );
  const titleContents = titleReg.exec(value.substring(0, title));
  let titleContent = "";
  titleContents.forEach((i) => {
    titleContent = i;
  });
  titleContent = titleContent.slice(9, titleContent.length).slice(0, -1);
  array.push({ title: titleContent });
  return array;
}
