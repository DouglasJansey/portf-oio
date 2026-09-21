/**
 * Deriva o nome do arquivo de imagem a partir do nome do projeto.
 *
 * A versão anterior usava `replace(/[^a-z]/, '')` sem a flag global, então só
 * o primeiro caractere inválido era removido e acentos passavam direto — o que
 * gerava nomes como "aniversariolais" batendo com "aniversarioLais.jpg".
 * Funcionava no Windows e quebrava na Vercel, que é case-sensitive.
 */
export const projectSlug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
