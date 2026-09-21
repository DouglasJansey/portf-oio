/**
 * Apelidos do Simple Icons.
 *
 * O projeto renomeia slugs de vez em quando e a CDN passa a devolver 404, o que
 * aparece como imagem quebrada no card. "css3" virou "css" em 2024.
 */
const ALIASES: Record<string, string> = {
  css3: 'css',
}

export const iconSlug = (name: string) => {
  const slug = name.toLowerCase().replace(/( )+/g, '').replace('-', '')
  return ALIASES[slug] ?? slug
}
