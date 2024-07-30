const id = 'google-doodle'

function load() {
  if (!window.curl) {
    window.fcitxLog('curl permission is not granted.')
    return
  }

  window.curl('https://doodles.google/').then((res) => {
    const html = res.data
    const el = document.createElement('html')
    el.innerHTML = html
    const src = (<HTMLImageElement | null>el.querySelector('.doodle-card-img img'))?.src
    if (!src) {
      window.fcitxLog('No doodle found.')
      return
    }

    const style = document.createElement('style')
    style.id = id
    style.innerHTML = `.fcitx-hoverables.fcitx-horizontal-scroll {
      background-image: url(https:${src})!important;
      background-size: contain;
      background-repeat: no-repeat;
    }`
    document.head.appendChild(style)
  })
}

function unload() {
  document.head.querySelector(`#${id}`)?.remove()
}

window.pluginManager.register({
  load,
  unload,
})
