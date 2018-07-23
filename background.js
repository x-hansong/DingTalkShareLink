function sendToDingTalkGroup(info) {
	chrome.storage.sync.get('api_url', function (items) {
		if (items.api_url) {
			var dingTalkMachineApi;
			dingTalkMachineApi = items.api_url;

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					new Notification('发送结果', {
						icon: 'dingding.png',
						body: xhr.responseText
					});
				}
			};
			if (!dingTalkMachineApi) {
				new Notification('发送结果', {
					icon: 'dingding.png',
					body: '钉钉机器人api地址未配置，点击选项进行配置'
				});
				return;
			}
			xhr.open("POST", dingTalkMachineApi, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(info));
		}
	});


}

chrome.runtime.onConnect.addListener(function (port) {
	var tab = port.sender.tab;

	// This will get called by the content script we execute in
	// the tab as a result of the user pressing the browser action.
	port.onMessage.addListener(function (info) {
		sendToDingTalkGroup(info);
	});
});