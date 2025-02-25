const d = document;
const voteContainer = d.querySelector(".main-container__vote");
const thanksContainer = d.querySelector(".main-container__thanks");
const form = d.querySelector(".form");
const voteButtons = d.querySelectorAll(".vote-btn");
const selectedNumber = d.querySelector(".selected-number");
const submitBtn = d.querySelector(".form_submit-btn");

let btnSelected;

form.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.matches(".vote-btn")) {
    btnSelected = e.target.innerText;
    removeActiveBtns();
    showActiveBtn(e.target);
  }

  if (e.target.matches(".form_submit-btn")) {
    if (!btnSelected) {
      showError();
      return;
    }
    hideElement(voteContainer);
    showElement(thanksContainer);
    selectedNumber.innerHTML = `&nbsp;${btnSelected}&nbsp;`;
  }
});

const removeActiveBtns = () => {
  voteButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const showActiveBtn = (btn) => {
  btn.classList.add("active");
};

const showElement = (element) => {
  element.classList.remove("hidden");
};

const hideElement = (element) => {
  element.classList.add("hidden");
};

const showError = () => {
  submitBtn.classList.add("error");
  setTimeout(() => {
    submitBtn.classList.remove("error");
  }, 300);
};
