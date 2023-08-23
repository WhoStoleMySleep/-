function scrollingBan(boolean: boolean) {
  if (document.querySelector('html')) {
    const html = document.querySelector('html') as HTMLHtmlElement
    html.style.overflow = boolean ? 'hidden' : 'visible'
  }
}

export default scrollingBan;