// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll(
    'input[name=transportation-option]:checked'
  );
  // we'll add more code to display results here!
}

window.addEventListener('load', function () {
  document
    .querySelector('form#transportation_survey')
    .addEventListener('submit', handleForm);
});
