document.addEventListener("click", (e) => {
    // Choose script
    if (e.target.classList.contains("audio_player_prev")) {
        var script = "prev";
    } else if (e.target.classList.contains("audio_player_play")) {
        var script = "play";
    } else if (e.target.classList.contains("audio_player_next")) {
        var script = "next";
    }

    // Execute it
    if (typeof script !== undefined) {
        browser.tabs.query({
            url: "*://*.vk.com/*"
        }).then((tabs) => {
            browser.tabs.executeScript(
                tabs[0].id,
                {file: "/content_scripts/" + script + ".js"}
            );
        });
    }
});
