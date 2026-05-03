const URL = 'PASTE_URL_HERE'

const items = document.querySelectorAll('[data-e2e="user-repost-item"]')
const ids = []
for (const it of items) {
  const a = it.querySelector('a[href*="/video/"], a[href*="/photo/"]')
  if (!a) continue
  const m = a.href.match(/\/(?:video|photo)\/(\d+)/)
  if (m) ids.push(m[1])
}

console.log('found', ids.length)

;(async () => {
  for (let i = 0; i < ids.length; i++) {
    const r = await fetch(URL.replace('ITEM_ID', ids[i]), { method: 'POST', credentials: 'include' })
    console.log(i + 1, '/', ids.length, ids[i], r.status)
    await new Promise(s => setTimeout(s, 300))
  }
  console.log('done')
})()
