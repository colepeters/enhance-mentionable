/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head({ req }) {
  const { path } = req
  let title = 'Enhance Mentionable'
  title += path === '/' ? '' : ` - ${path}`

  return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <title>${title}</title>

      <link rel="webmention" href="https://making-2c4.begin.app/webmention">
      <link rel="stylesheet" href="/enhance-styles.css">
      <link rel="icon" href="/_public/favicon.svg">

      <style>
        body {
          color: var(--dark);
        }
      </style>
    </head>
    <body class="font-sans">
  `
}
