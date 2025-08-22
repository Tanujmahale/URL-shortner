document.addEventListener("DOMContentLoaded", () => {
  const newURL = document.getElementById("shorturl")
  const copyButton = document.getElementById("copy")
  const message = document.getElementById("message")

  if (!copyButton) {
    return
  }

  copyButton.onclick = () => {
    if (!newURL.value) {
      message.textContent = "⚠️ No link to copy yet."
      message.style.color = "red"
      return
    }

    navigator.clipboard
      .writeText(newURL.value)
      .then(() => {
        message.textContent = "📋 Link copied to clipboard!"
        message.style.color = "green"
      })
      .catch(() => {
        
        newURL.select()
        newURL.setSelectionRange(0, 99999)
        try {
          document.execCommand("copy")
          message.textContent = "📋 Link copied to clipboard!"
          message.style.color = "green"
        } catch (err) {
          message.textContent = "❌ Failed to copy link."
          message.style.color = "red"
        }
      })
  }
})
