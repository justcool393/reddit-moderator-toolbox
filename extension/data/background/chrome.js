chrome.extension.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.greeting === "tb-reload" )
    {
        console.log('reloading');
        chrome.runtime.reload();
        console.log('reloaded');
        sendResponse();
    }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    console.log('Page uses History API and we heard a pushSate/replaceState.');
    // do your thing
    console.log(details)

    chrome.tabs.sendMessage(details.tabId, {historyState: details.url}, function(response) {
        console.log(response.received);
    });
});