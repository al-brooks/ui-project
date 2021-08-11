// to-do: |
// remove onclick events after testing and implement form event listeners
// note:  remember to use prevent default

// code-block:  display functions for user - they're only called if
// user is signed in (that code is at the bottom of the page)

const gifList = document.querySelector('#gifList');
const userEmail = document.querySelector('#userEmail');
const userAccount = document.querySelector('#userAccount');
const signIn = document.querySelector('#signIn');
const signUp = document.querySelector('#signUp');
const signOut = document.querySelector('#signOut');

// function displayGifs(data) {
//   data.forEach((doc) => {
//     const gif = doc.data();
//     const li = `
//           <li>
//               Embed Url: ${gif.embed_url} | Title: ${gif.title} | Likes: ${gif.likes}
//           </li>
//       `;
//     gifList.insertAdjacentHTML('beforeend', li);
//   });
// }

// code-block:  User Sign In
function signUpUser() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert('Signed Up');
}

function signInUser() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));

  alert(`Signed In ${email.value}`);

  // Takes user back to the website
  // location.href = '/ui-project/index.html';
}

function signOutUser() {
  auth.signOut();
  alert('Signed Out');
  // note:  adding this to clear the login page for now
  window.location.reload();
}

// tidbit:  below tracks current users auth status - are they logged in or not
auth.onAuthStateChanged(function (user) {
  if (user) {
    //User is signed in - can choose what to show them
    const email = user.email;
    userAccount.removeAttribute('style');
    signOut.removeAttribute('style');
    signIn.style.display = 'none';
    signUp.style.display = 'none';

    alert(`Active User ${email}`);

    // code-block:  Get Data for user account (pull Gifs from collection)
    // tidbit:  database collection is Async, so it returns a promise

    // dataBase
    //   .collection('Gifs')
    //   .get()
    //   .then((querySnapshot) => {
    //     displayGifs(querySnapshot.docs);
    //   });
  } else {
    //User is signed out
    alert('No Active User');
    userAccount.style.display = 'none';
    signOut.style.display = 'none';
    signIn.removeAttribute('style');
    signUp.removeAttribute('style');

    // tidbit:  below code will remove displayed data once user logs out
    displayGifs([]);
  }
});

signIn.addEventListener('click', function () {
  signInUser();
});

signUp.addEventListener('click', function () {
  signUpUser();
});

signOut.addEventListener('click', function () {
  signOutUser();
});
