document.getElementById("recoveryForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (!email) {
    return;
  }

  const recoveryUrl =
    "https://accounts.google.com/signin/recovery?Email=" +
    encodeURIComponent(email);

  window.location.href = recoveryUrl;
});
