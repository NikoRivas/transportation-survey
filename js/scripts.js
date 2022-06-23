// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll(
    'input[name=transportation-option]:checked'
  );
  const userSelectionsArray = Array.from(userSelections);

  userSelectionsArray.forEach(function (element) {
    const paragraph = document.createElement('p');
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}

window.addEventListener('load', function () {
  document
    .querySelector('form#transportation_survey')
    .addEventListener('submit', handleForm);
});
