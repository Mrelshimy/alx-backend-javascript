export default function signUpUser(firstName, lastName) {
  return new Promise((res) => {
    if (firstName && lastName) {
      res({
        firstName,
        lastName,
      });
    }
  });
}
