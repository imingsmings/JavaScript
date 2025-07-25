chrome.runtime.onMessage.addListener((request, _sender, sendMessage) => {
  if (request.message === 'hello') {
    console.log(request.message)
  }

  sendMessage()

  return true
})
