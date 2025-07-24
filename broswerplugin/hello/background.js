chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  })
})

const MDN = 'https://developer.mozilla.org/en-US/docs/Web/'

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(MDN)) {
    const prevState = await chrome.action.getBadgeText({
      tabId: tab.id
    })

    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    await chrome.action.setBadgeText({
      text: nextState,
      tabId: tab.id
    })

    if (nextState === 'ON') {
      await chrome.scripting.insertCSS({
        files: ['focus.css'],
        target: {
          tabId: tab.id
        }
      })
    } else {
      await chrome.scripting.removeCSS({
        files: ['focus.css'],
        target: {
          tabId: tab.id
        }
      })
    }
  }
})
