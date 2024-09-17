chrome.runtime.onInstalled.addListener(function () {
	if(getStorage('sssss') == '1')
		startProxy();
	else
		stopProxy();
});


