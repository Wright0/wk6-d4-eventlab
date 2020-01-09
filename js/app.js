document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmission);
});

const handleFormSubmission = function(event){
  event.preventDefault();

  

  const readingListAddition = document.createElement('li');
  readingListAddition.textContent = `${event.target.title.value}`
  // readingListAddition.classList.add()

  const list = document.querySelector('#reading-list');
  list.appendChild(readingListAddition);

};
