$(document).ready(function() {
	$("#share-btn").click(function() {
		chrome.tabs.executeScript(null, {
			file: "content_script.js"
		});
		window.close();
	});
	$('#option-btn').click(function(){
		window.location.href="options.html";
	});
});