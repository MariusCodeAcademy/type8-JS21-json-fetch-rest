const base_url = 'https://jsonplaceholder.typicode.com';
// parsiusti ir isskonsolinti 100 postu is
// https://jsonplaceholder.typicode.com/posts

console.time('fetch');

fetch(`${base_url}/posts`)
  .then((resp) => resp.json())
  .then((data) => {
    // console.log('posts', data);
    console.timeEnd('fetch');
  })
  .catch((error) => console.log(error.message));

console.log('after fetch');

// get 50 comments
fetch(`${base_url}/comments`)
  .then((resp) => resp.json())
  .then((data) => console.log(data.slice(0, 50)))
  .catch((error) => console.warn(error.message));

// get all users

// get all comments of post 5

// get all users usernames in an array
fetch(`${base_url}/users`)
  .then((resp) => resp.json())
  .then((data) => {
    // console.log('data ===', data);
    const usernameArray = data.map((uObj) => uObj.username);
    console.log('usernameArray ===', usernameArray);
  })
  .catch((error) => console.warn(error.message));

// get all users cities in an array

// get Random joke from https://api.chucknorris.io/ api
// display joke as an html card
