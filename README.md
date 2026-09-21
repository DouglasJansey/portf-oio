# Portfólio — Douglas Jansey

Portfólio pessoal construído com **Next.js 14 (App Router)**, TypeScript e Sass.
Exibe perfil, habilidades, projetos, repositórios públicos do GitHub e um
formulário de contato que envia e-mail via SMTP.

## Stack

| Camada | Tecnologias |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Estilo | Sass (CSS Modules), `react-icons` |
| Estado / dados | Zustand, TanStack Query |
| Back-end | Route Handlers (`src/app/api`), Nodemailer |

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha EMAIL_USER e EMAIL_PASSWORD
npm run dev                  # http://localhost:3000
```

Outros scripts: `npm run build`, `npm start`, `npm run lint`.

## Variáveis de ambiente

Veja [`.env.example`](.env.example). Resumo:

| Variável | Obrigatória | Uso |
|---|---|---|
| `EMAIL_USER` | sim (contato) | Conta SMTP remetente |
| `EMAIL_PASSWORD` | sim (contato) | Senha de app do Gmail |
| `EMAIL_TO` | não | Destinatário; por padrão `EMAIL_USER` |
| `GIT_TOKEN` | não | Token do GitHub; sem ele o limite é 60 req/h |
| `NEXT_PUBLIC_SITE_URL` | não | URL canônica usada no Open Graph |
| `NEXT_PUBLIC_PHONE_NUMBER` | não | Número do link do WhatsApp |
| `NEXT_PUBLIC_CURRICULO` | não | Link do currículo; por padrão `/DouglasJansey.pdf` |

> ⚠️ Credenciais **não** podem usar o prefixo `NEXT_PUBLIC_`: tudo com esse
> prefixo é embutido no JavaScript enviado ao navegador.

## Estrutura

```
src/app/            rotas (App Router) e route handlers
  api/send/         POST do formulário de contato
  api/get-repo-data/ proxy para a API do GitHub
  [path]/           seções: sobremim, habilidades, projetos, contato
src/components/     componentes + seus .module.sass
services/           acesso a dados (GitHub) e conteúdo estático
config/             configuração do transporte SMTP
imports/            barrels de ícones e componentes dinâmicos
styles/             estilos globais, variáveis e tipografia
```

## Rotas de API

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/api/send` | Envia a mensagem do formulário. `400` campos inválidos, `503` SMTP não configurado, `500` falha no envio |
| `GET` | `/api/get-repo-data?urlData=…` | Busca repositórios. Aceita apenas URLs de `https://api.github.com` |

## Deploy

Pensado para a Vercel: importe o repositório e cadastre as variáveis de
ambiente em *Settings → Environment Variables*.
