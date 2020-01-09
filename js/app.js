document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

//Listen for new item being submitted
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmission);

//Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.classList.add('delete-button')
  const list = document.querySelector('body');
  list.appendChild(deleteButton)

//Listening for clicking of delete button
  deleteButton.addEventListener('click', deleteReadingListItems);
});

const handleFormSubmission = function(event){
  event.preventDefault();

  const readingListAddition = document.createElement('li');
  readingListAddition.textContent = `Title: ${event.target.title.value}, Author:  ${event.target.author.value}, Category: ${event.target.category.value} `

  const list = document.querySelector('#reading-list');
  list.appendChild(readingListAddition);

  document.getElementById('new-item-form').reset();
};

const deleteReadingListItems = function(){
  const readingList = document.querySelector('#reading-list');

  while (readingList.firstChild) {
    //The list is LIVE so it will re-index each call
    readingList.removeChild(readingList.firstChild);
  }
}
