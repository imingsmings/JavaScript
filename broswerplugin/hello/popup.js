;(() => {
  const oContianer = document.querySelector('.container')

  oContianer.addEventListener('click', handleChangeColor, false)

  function handleChangeColor(e) {
    const color = e.target.dataset.color

    if (!color) return

    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true
      },
      (tabs) => {
        const [tab] = tabs
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: (color) => {
            document.body.style.backgroundColor = color
          },
          args: [color]
        })
      }
    )
  }
})()
