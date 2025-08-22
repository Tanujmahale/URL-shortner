
const btn = document.getElementById("shorten")
const message = document.getElementById("message")

btn.addEventListener("click", short)

async function short() {
  const longURL = document.getElementById("longurl").value.trim()
  const shortURL = document.getElementById("shorturl")

  if (!longURL) {
    message.textContent = "⚠️ Please enter a URL first."
    message.style.color = "red"
    return
  }

  message.textContent = "⏳ Shortening your link..."
  message.style.color = "blue"

  try {
    const result = await fetch(`https://tinyurl.com/api-create.php?url=${longURL}`)
    const data = await result.text()
    shortURL.value = data
    message.textContent = "✅ Done! Your short link is ready."
    message.style.color = "green"
  } catch (error) {
    message.textContent = "❌ Failed to shorten link."
    message.style.color = "red"
  }
}
