$(document).ready(function() {
	var api_url = $('#api_url')

	function loadChanges() {
		chrome.storage.sync.get('api_url', function(items) {
			if(items.api_url) {
				api_url.val(items.api_url);
			}
		});
	}

	function saveChanges() {
		// Get a value saved in a form.
		var theValue = api_url.val();
		// Check that there's some code there.
		if(!theValue) {
			return;
		}
		// Save it using the Chrome extension storage API.
		chrome.storage.sync.set({
			'api_url': theValue
		}, function() {
			
		});
		window.close();
	}

	$("#save_btn").click(function() {
		saveChanges()
	});

	loadChanges();
});