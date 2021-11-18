let leads = [];
const inputEl = document.getElementById("input");
const saveInput = document.getElementById("save-input");
const saveTab = document.getElementById("save-tab");
const deleteAll = document.getElementById("delete-all");
const ulEl = document.getElementById("li");
const smallDb = JSON.parse(localStorage.getItem("leads"));

show = (items) => {
  let listItems = "";
  for (let i = 0; i < items.length; i++) {
    listItems += `<li><a target='_blank' href='${items[i]}'>${items[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
};

if (smallDb) {
  leads = smallDb;
  show(leads);
}

saveInput.addEventListener("click", () => {
  leads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("leads", JSON.stringify(leads));
  show(leads);
});

deleteAll.addEventListener("dblclick", () => {
  localStorage.clear();
  leads = [];
  show(leads);
});
