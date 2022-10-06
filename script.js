document.addEventListener("click", (e) => {
    const button = e.target.closest("[data-button]")
    if (button)
        button.toggleAttribute("data-show")
})
