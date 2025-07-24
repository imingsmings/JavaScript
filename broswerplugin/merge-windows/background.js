chrome.action.onClicked.addListener(runWithPromise)

function runWithCallback() {
  chrome.windows.getCurrent((window) => {
    const targetWindow = window

    chrome.tabs.query({ windowId: targetWindow.id }, (tabs) => {
      const targetWindowTabCount = tabs.length

      chrome.windows.getAll({ populate: true }, (windows) => {
        const numWindows = windows.length
        let tabPosition = targetWindowTabCount

        for (let i = 0; i < numWindows; i++) {
          const win = windows[i]

          if (targetWindow.id !== win.id) {
            const numTabs = win.tabs.length

            for (let j = 0; j < numTabs; j++) {
              let tab = win.tabs[j]
              chrome.tabs.move(tab.id, {
                windowId: targetWindow.id,
                index: tabPosition
              })

              tabPosition++
            }
          }
        }
      })
    })
  })
}

async function runWithPromise() {
  const targetWindow = await chrome.windows.getCurrent()
  const targetWindowTabs = await chrome.tabs.query({ windowId: targetWindow.id })

  const allWindows = await chrome.windows.getAll({ populate: true })
  const otherWindows = allWindows.filter((win) => win.id !== targetWindow.id)
  let attachTabPosition = targetWindowTabs.length

  otherWindows.forEach((win) => {
    win.tabs.forEach(async (tab) => {
      await chrome.tabs.move(tab.id, {
        windowId: targetWindow.id,
        index: attachTabPosition
      })
      attachTabPosition++
    })
  })
}
