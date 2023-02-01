/** @type {import('@enhance/types').EnhanceElemFn} */
export default function HCard({ html, state: { attrs } }) {
  const enableAuthor = typeof attrs?.['enable-author'] === 'string'

  return html`
    <style>
      section {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      section img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
      }
      section aside {
        line-height: 1.375;
      }
      section a {
        color: var(--secondary-600);
        text-decoration: none;
      }
      section .p-name {
        font-weight: 600;
        font-size: 1.2rem;
      }
    </style>

    ${enableAuthor ? `<span class="p-author hidden">Cole Peters</span>` : ''}

    <section class="h-card">
      <img class="u-photo" src="https://github.com/colepeters.png" alt="Taylor Beseda">
      <aside>
        <a class="p-name u-url" href="https://colepeters.com">Cole Peters</a><br>
        <a class="u-email" href="mailto:cole@begin.com">cole@begin.com</a>
      </aside>
    </section>
  `
}
