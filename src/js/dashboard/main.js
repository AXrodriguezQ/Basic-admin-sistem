import { validateSession } from "../helpers/sessions.js";

const session = () => {
  if (!validateSession()) {
    window.location.href = `${window.location.origin}/src/index.html`;
  }
}

(function() {
    session();
})();
