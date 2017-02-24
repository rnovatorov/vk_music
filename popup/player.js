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
      // Toggling between play and pause
      var pause_button = document.getElementById("audio_player_pause");
      var pause_button_style = window.getComputedStyle(pause_button);
      var play_button = document.getElementById("audio_player_play");
      if (pause_button_style.display == "none") {
        play_button.style.display = "none";
        pause_button.style.display = "block";
      } else if (pause_button_style.display == "block") {
        pause_button.style.display = "none";
        play_button.style.display = "block";
      }
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