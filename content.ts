import type { PlasmoCSConfig } from "plasmo"

export {}

export const config: PlasmoCSConfig = {
  run_at: "document_end",
  matches: ["*://*.freshrelease.com/*"],
  world: "MAIN"
}
let interval
;(async () => {
  const permissionStatus = await navigator.permissions.query({
    name: "clipboard-read",
    allowWithoutGesture: false
  })
  // Will be 'granted', 'denied' or 'prompt':
  console.log(permissionStatus.state)

  // Listen for changes to the permission state
  permissionStatus.onchange = () => {
    console.log(permissionStatus.state)
  }
})()

//run function on dom changes
export function run() {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  document.querySelector("head").appendChild(link)
  console.log("Hello World")
  interval = setInterval(() => {
    const newElements = document.querySelectorAll("div[class='pull-right']")

    console.log("Hello World", newElements)
    if (newElements.length > 0) {
      clearInterval(interval)
      newElements.forEach((element) => {
        const newElement = document.createElement("span")
        newElement.classList.add("text--sec-color")
        newElement.classList.add("text--ultra-semibold")
        newElement.classList.add("material-symbols-outlined")
        newElement.onclick = () => {
          const listOfTasks =
            element.parentElement.nextElementSibling.children[0].children || []
          console.log(listOfTasks)
          let tasks = []
          for (let i = 0; i < listOfTasks.length; i++) {
            const task = listOfTasks[i]
            const name = task.querySelector("figure")?.children?.[0]?.ariaLabel

            const texts = listOfTasks[i].textContent
              .split("\n")
              .map((e) => e.trim())
              .filter(Boolean)
            console.log(texts)

            tasks.push(`${texts[0]} - ${texts[1]}` + (name ? ` - ${name}` : ""))
          }
          try {
            window.navigator.clipboard.writeText(tasks.join("\n"))
            alert("Copied to clipboard")
          } catch (error) {
            console.log(error)
            alert(
              "No permission to access clipboard. Please allow access to clipboard in the browser settings. (Chrome: chrome://settings/content/clipboard)"
            )
          }
          //   copy(tasks)
        }
        newElement.innerHTML = `content_copy`
        element.appendChild(newElement)
      })
    }
  }, 1000)
}

run()
