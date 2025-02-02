const myContent = 'https://nature-6o8.begin.app/'

const mentions = {
  'https://making-2c4.begin.app/webmention': { // Taylor
    source: myContent,
    target: 'https://making-2c4.begin.app/',
  },
  'https://tbeseda.com/webmention': { // tbeseda.com test article
    source: myContent,
    target: 'https://tbeseda.com/articles/2023/01/webmention-test',
  },
}

for (const [endpoint, webmention] of Object.entries(mentions)) {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: new URLSearchParams(webmention),
  })

  let message
  if (response.ok) {
    const contentType = response.headers.get('content-type')
    message = contentType?.startsWith('application/json')
      ? await response.json()
      : await response.text()
  } else {
    message = `Error ${response.status}: ${response.statusText}`
  }

  console.log(message)
}

