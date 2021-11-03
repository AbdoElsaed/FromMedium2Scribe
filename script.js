browser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  let url = tabs[0].url;
  document.getElementById("redirectBtn").addEventListener("click", () => {
    if (!url.includes("medium.com")) {
      return (document.getElementById("notMedium").style.display = "block");
    } else {
      return browser.tabs.update({
        url: url.replace("medium.com", "scribe.rip"),
      });
    }
  });
});
