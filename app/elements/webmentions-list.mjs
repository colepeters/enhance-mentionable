/** @type {import('@enhance/types').EnhanceElemFn} */
export default function ({ html, state: { store } }) {
  const { mentions } = store

  if (!mentions || mentions.length < 1) return '<p class="font-mono text-1">Awaiting mentions of this page…</p>'

  return html`
    <style>
      details {
        margin-top: 0.25rem;
      }
      details summary {
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--warning-700);
      }
      details summary::-webkit-details-marker,
      details summary::marker {
        display: none;
        content: '';
      }
      details pre {
        width: 100%;
        overflow: auto;
        white-space: pre;
        font-size: 0.8rem;
      }
    </style>

    <ul class='pl0'>
  ${mentions.map(m => `
      <li>
        <a href="${m.source}">${`"${m.sourceTitle}"` || m.source}</a>
        ${m.sourceAuthor ? `by ${m.sourceAuthor}` : ''}
        <details class="hidden">
          <summary>&gt;</summary>
          <pre>${JSON.stringify(m, null, 2)}</pre>
        </details>
      </li>`.trim(),
  ).join('')}
    </ul>
  `
}
