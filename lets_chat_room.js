var firebaseConfig = {
    apiKey: "AIzaSyCSGbeusGo0wpIutNUkzLIRotonGziR75M",
    authDomain: "letschat-bd9b0.firebaseapp.com",
    projectId: "letschat-bd9b0",
    storageBucket: "letschat-bd9b0.appspot.com",
    messagingSenderId: "830443938991",
    appId: "1:830443938991:web:a5ef76c311bd29a43da05a",
    measurementId: "G-7KNHGVL3M2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout()
  {
    window.location = "index.html";
  }