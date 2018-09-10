document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  // 1. DOM element that is going to fire the event
  const form = document.querySelector('#new-animal-form');
  // 2. call event listener (add behaviour to it)
  form.addEventListener('submit', handleFormSubmit);

  // 1. DOM element that is going to fire the event
  const deleteForm = document.querySelector('#delete-all-form');
  // 2. call event listener (add behaviour to it)
  form.addEventListener('submit', handleFormDelete);

})

// 3. create behaviour
const handleFormSubmit = function(event) {
  event.preventDefault();

  const newSpecies = document.createElement('p');
  newSpecies.textContent = `Species name: ${event.target.species.value}`
  newSpecies.classList.add('p1');

  const newAmount = document.createElement('p');
  newAmount.textContent = `Estimated amount in wild: ${event.target.amount.value}`
  newAmount.classList.add('p2');

  const newLevel = document.createElement('p');
  newLevel.textContent = `Endangerment level: ${event.target.level.value}`
  newLevel.classList.add('p3');

  const newDiv = document.createElement('div');
  newDiv.appendChild(newSpecies);
  newDiv.appendChild(newAmount);
  newDiv.appendChild(newLevel);

  const endangeredList = document.querySelector('#endangered-list');
  endangeredList.appendChild(newDiv);

  event.target.reset();
}

const handleFormDelete = function(event) {
  endangeredList.removeChild('newDiv');
}
