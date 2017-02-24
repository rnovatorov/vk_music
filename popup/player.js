// Adding click handler
document.addEventListener(
  "click",
  (e) => {
    // Getting vk tab
    var getting_vk_tab = browser.tabs.query(
      {
        url: "*://*.vk.com/*"
      }
    );

    // Choosing script
    if (e.target.classList.contains("audio_player_prev")) {
      var script = "prev";
    } else if (e.target.classList.contains("audio_player_play")) {
      var script = "play";
    } else if (e.target.classList.contains("audio_player_next")) {
      var script = "next";
    }

    // Executing
    if (typeof script !== undefined) {
      getting_vk_tab.then(
        (tabs) => {
          browser.tabs.executeScript(
            tabs[0].id, { 
              file: "/content_scripts/" + script + ".js"
            }
          );
        }
      );
    }
  }
);