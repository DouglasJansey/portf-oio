import 'server-only'

/**
 * Configuração do transporte SMTP.
 *
 * As variáveis NÃO usam o prefixo NEXT_PUBLIC_ de propósito: tudo que começa
 * com NEXT_PUBLIC_ é embutido no bundle enviado ao navegador. Estas credenciais
 * só podem existir no servidor (route handlers).
 *
 * O `import 'server-only'` acima quebra o build se algum componente de cliente
 * importar este arquivo — foi assim que o GIT_TOKEN acabou no bundle antes.
 */
export const config = {
  service: "Gmail",
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};

export const MAIL_TO = process.env.EMAIL_TO ?? process.env.EMAIL_USER;
