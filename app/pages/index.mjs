export default function Index ({ html }) {
  return html`
    <style>
      main {
        max-width: 720px;
      }

      blockquote {
        border-left: 4px solid var(--primary-100);
        font-family: Palatino, Times, serif;
        max-width: 72ch;
      }

      a {
        text-decoration: underline;
        text-decoration-color: var(--primary-400);
      }
    </style>
    <main class='p4 m-auto'>
      <article class="h-entry mb3">
        <h1 class="p-name text3 font-semibold tracking-1 mb0">Enhance Mentionable <span class='pl-3'>💬</span></h1>
        <h2 class="h2-summary text1 tracking-1 mb3">A simple way to add mentions to your Enhance website.</h2>

        <time class="dt-published text-1 font-semibold uppercase tracking2 block mb3" datetime="2023-02-01">February 1, 2023</time>

        <h-card enable-author></h-card>
        <div class="content">
          <blockquote class='pl-1 mt4 mb4'>
            <p class='text1 italic leading4 mb0'>Webmention is a simple way to notify any URL when you mention it on your site. From the receiver's perspective, it's a way to request notifications when other sites mention it.</p>
            <cite class='not-italic'>- W3C &nbsp;<a href="https://www.w3.org/TR/webmention/" target="_blank">https://www.w3.org/TR/webmention/</a></cite>
          </blockquote>
          <p>Finally, a link to <a href="https://making-2c4.begin.app" target="_blank">Taylor’s site</a> that accepts webmentions.</p>
        </div>
      </article>

      <section id="webmentions">
        <h2 class='text2 font-semibold tracking-1 mb0'>Webmentions 🤩</h2>
        <webmentions-list></webmentions-list>
      </section>
    </main>
  `
}
