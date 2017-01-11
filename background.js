var dingTalkMachineApi = 'https://oapi.dingtalk.com/robot/send?access_token=2ed2b79ab1acf722727fc6ed6256edfb2fe3c595dc139be0899d6ea630d29c27'
// var dingTalkMachineApi = 'https://oapi.dingtalk.com/robot/send?access_token=23dd2cfb66c5d63e61c821288a4695b51488ef0dc1e72a9aabbf7208c0d47b4e'

function sendToDingTalkGroup(info) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			new Notification('发送结果', {
				icon: 'dingding.png',
				body: xhr.responseText
			});
		}
	};
	xhr.open("POST", dingTalkMachineApi, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify(info));
}

chrome.runtime.onConnect.addListener(function(port) {
	var tab = port.sender.tab;

	// This will get called by the content script we execute in
	// the tab as a result of the user pressing the browser action.
	port.onMessage.addListener(function(info) {
		sendToDingTalkGroup(info);
	});
});