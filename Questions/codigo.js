const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.onclick = (e) => {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text');
  };
});

