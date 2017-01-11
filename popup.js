$(document).ready(function() {
	$("#share-btn").click(function() {
		chrome.tabs.executeScript(null, {
			file: "content_script.js"
		});
		window.close();
	});
});