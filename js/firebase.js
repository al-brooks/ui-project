function signUp() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert('Signed Up');
}

function signIn() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));

  alert(`Signed In ${email.value}`);

  // Take use to another page
  location.href = '/ui-project/index.html';
}

function signOut() {
  auth.signOut();
  alert('Signed Out');
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    const email = user.email;
    alert(`Active User ${email}`);
    //is signed in
  } else {
    alert('No Active User');
    // no user signed in
  }
});
