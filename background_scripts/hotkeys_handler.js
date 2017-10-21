// Command handler
browser.commands.onCommand.addListener((cmd) => {
    browser.tabs.query({
        url: "*://*.vk.com/*"
    }).then((tabs) => {
        browser.tabs.executeScript(
            tabs[0].id,
            {file: "/content_scripts/" + cmd + ".js"}
        );
    });
});
