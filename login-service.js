import signupService from "./signup-service";

class LoginService {
  login(e) {
    e.preventDefault();
    const inputs = Array.from(document.querySelectorAll(".form-input"));

    const url = "http://localhost:8070/login";

    // Set the credentials for basic authentication
    const username = inputs[0].value;
    const password = inputs[1].value;
    const auth = btoa(`${username}:${password}`);

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // The request was successful
          return response.text();
        } else {
          // There was an error
          throw new Error(`Error: ${response.status}`);
        }
      })
      .then((responseText) => {
        console.log(responseText);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  funcAssignment() {
    document
      .querySelector(".submit")
      .addEventListener("click", this.login.bind(null));
    document
      .querySelector(".sign-up")
      .addEventListener(
        "click",
        signupService.prepareSection.bind(signupService)
      );
  }

  render() {
    document.querySelector(".inner-container").innerHTML = `
        <form class="form">
          <p class="login-header">Login Here</p>
          <div class="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="user-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <input type="text" class="form-input" placeholder="username" />
          </div>
          <div class="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="user-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <input type="password" class="form-input" placeholder="password" />
          </div>
          <p class="forgot-password">Forgot password?</p>
          <button class="submit">LOGIN</button>
          <p class="not-a-member">
            Not a member?&nbsp;&nbsp;<a class="sign-up">Sign Up!</a>
          </p>
        </form>`;
  }

  prepareSection() {
    this.render();
    this.funcAssignment();
  }
}

export default new LoginService();
