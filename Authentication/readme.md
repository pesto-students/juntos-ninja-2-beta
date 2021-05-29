# Juntos Auth Service

## This Authentication module will provide basic auth functionality as follows:-

- signIn

  `@params (email: string, password: string);`

  `@returns promise with user`

  ```js
  signIn({
    email: "test@gmail.com",
    password: "123456",
  })
    .then(function (user) {
      // Update successful.
    })
    .catch(function (error) {
      // An error happened.
    });
  ```

- signUp

  `@params (Object: {email: string, password: string, name: string});`

  `@returns promise with user`

```js
signUp({
  email: "test@gmail.com",
  password: "123456",
  name: "Raza",
})
  .then(function (user) {
    // Update successful.
  })
  .catch(function (error) {
    // An error happened.
  });
```

- updateProfile

  `@params (Object: {displayName: string, photoUrl: string});`

  `@returns promise with user`

  ```js
  updateProfile({
    displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      // An error happened.
    });
  ```

  - forgetPassword

  `@params (email: string);`

  `@returns promise with user`

  ```js
  forgetPassword(email: "test@test.com")
    .then(function () {
      'email sent successfully'
    })
    .catch(function (error) {
      // An error happened.
    });
  ```

  - updatePassword

  `@params (password: string);`

  `@returns promise with user`

  ```js
  updatePassword(password: "*******")
    .then(function () {
      'password updated successfully'
    })
    .catch(function (error) {
      // An error happened.
    });
  ```

  - logout

  `@params();`
  `@returns promise`

  ```js
  logout()
    .then(function () {
      "logged out successfully";
    })
    .catch(function (error) {
      // An error happened.
    });
  ```

### A basic implementation for this wrapper could be found [juntos-auth-service-example]()
