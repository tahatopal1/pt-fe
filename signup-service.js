import Pikaday from "pikaday";
import moment from "moment";
import signupEnd from "./signup-end";

class SignupService {
  render() {
    document.querySelector(
      ".inner-container"
    ).innerHTML = `<form action="#" class="signup-form" autocomplete="off">
          <p class="signup-header">SIGN UP HERE</p>
          <div class="signup-form-container">
            <div class="signup-elm">
              <div class="input-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>
                <input
                  type="text"
                  id="name"
                  class="form-input"
                  placeholder="name"
                />
              </div>
            </div>
            <div class="signup-elm">
              <div class="input-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
</svg>

                <input
                  type="text"
                  id="surname"
                  class="form-input"
                  placeholder="surname"
                />
              </div>
            </div>
            <div class="signup-elm">
              <div class="input-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-icon">
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

                <input
                  type="email"
                  id="username"
                  autocomplete="off"
                  class="form-input"
                  placeholder="email"
                />
              </div>
            </div>
            <div class="signup-elm">
              <div class="input-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                <input
                  type="text"
                  id="birthdate"
                  class="form-input"
                  placeholder="birthdate"
                  readonly
                />
              </div>
            </div>
            <div class="signup-elm">
              <div class="input-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

                <input
                  type="password"
                  id="password"
                  class="form-input"
                  placeholder="password"
                />
              </div>
            </div>
            <div class="signup-elm">
              <div class="input-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="user-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

                <input
                  type="password"
                  id="confirm-password"
                  class="form-input"
                  placeholder="confirm password"
                />
              </div>
            </div>
            <div class="signup-elm">
              <div class="input-container no-select" style="position: relative">
  <svg xmlns="http://www.w3.org/2000/svg"                   class="user-icon"
                  style="color: #9ad49f; margin-bottom: 1px" viewBox="0 0 512 512"><title>Male Female</title><circle cx="216" cy="200" r="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32"/></svg>
                <input
                  type="text"
                  id="gender"
                  class="form-input"
                  placeholder="gender"
                  unselectable="on"
                  readonly
                />
                <div class="gender-dropbox collapse">
                  <div class="gender-opt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="gender-icon"
                      viewBox="0 0 512 512"
                    >
                      <title>Male</title>
                      <circle
                        cx="216"
                        cy="296"
                        r="152"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M448 160V64h-96M324 188L448 64"
                      />
                    </svg>
                    <p class="gender-option">Male</p>
                  </div>
                  <div class="gender-line"></div>
                  <div class="gender-opt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="gender-icon"
                      viewBox="0 0 512 512"
                    >
                      <title>Female</title>
                      <circle
                        cx="256"
                        cy="184"
                        r="152"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 336v144M314 416H198"
                      />
                    </svg>
                    <p class="gender-option">Female</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="signup-elm">
              <button class="submit signup-submit" id="progress">
                Progress
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="user-icon"
                  style="stroke: ivory; margin-bottom: 1px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>`;
  }

  funcAssignment() {
    document.getElementById("progress").addEventListener("click", (e) => {
      e.preventDefault();
      // Doğrulama yap
      // Signup final sayfasını renderla,
      signupEnd.prepareSection(this.createSignupObject());
    });
    document.querySelector("#gender").addEventListener("click", function () {
      document.querySelector(".gender-dropbox").classList.toggle("collapse");
    });
    window.addEventListener("click", (e) => {
      if (e.target.closest(".gender-opt")) {
        document.querySelector(".gender-dropbox").classList.toggle("collapse");
        document.querySelector("#gender").value = e.target
          .closest(".gender-opt")
          .querySelector(".gender-option")
          .textContent.trim();
      }
    });
  }

  prepareSection() {
    this.render();
    this.funcAssignment();
    var picker = new Pikaday({
      field: document.getElementById("birthdate"),
      format: "DD/MM/YYYY",
      toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day.toString().padStart(2, "0")}/${month
          .toString()
          .padStart(2, "0")}/${year}`;
      },
      parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split("/");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      },
    });
  }

  createSignupObject() {
    return {
      name: document.querySelector("#name"),
      surname: document.querySelector("#surname"),
      username: document.querySelector("#username"),
      phoneNumber: null,
      birthDate: document.querySelector("#birthDate"),
      password: document.querySelector("#password"),
      confirmPassword: document.querySelector("#confirmPassword"),
      gender: document.querySelector("#gender"),
    };
  }
}

export default new SignupService();
