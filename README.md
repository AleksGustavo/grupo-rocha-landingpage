# Grupo Rocha — Landing Page

Landing page institucional de página única do **Grupo Rocha Construtoras**
(arquitetura e construção de alto padrão). Rolagem vertical com as seções
Home, Sobre, Serviços, Projetos, Insights e Contato.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- [Resend](https://resend.com) para o envio do formulário de contato

> ⚠️ Esta versão do Next.js tem breaking changes em relação a versões
> anteriores. Consulte os guias em `node_modules/next/dist/docs/` antes de
> escrever código.

## Como rodar

Requer **Node.js ≥ 20.9** (ver `.nvmrc`).

```bash
npm install
cp .env.example .env.local   # preencha as chaves do Resend
npm run dev
```

Abra <http://localhost:3000>.

## Scripts

| Script              | Descrição                   |
| ------------------- | --------------------------- |
| `npm run dev`       | Servidor de desenvolvimento |
| `npm run build`     | Build de produção           |
| `npm run start`     | Serve o build               |
| `npm run lint`      | ESLint                      |
| `npm run typecheck` | `tsc --noEmit`              |
| `npm run format`    | Prettier (escrita)          |

## Estrutura

```
app/
  layout.tsx              # <html>, metadata, Header, skip-link
  page.tsx                # compõe as seções (Server Component)
  error.tsx / not-found.tsx
  robots.ts / sitemap.ts
  globals.css
  components/
    Header.tsx            # header fixo + scroll-spy + menu mobile (client)
    sections/             # uma seção por arquivo
content/                  # dados da página (fonte única de verdade)
  empresa.ts              # NAP, marca, redes — PREENCHER com dados reais
  servicos.ts projetos.ts equipe.ts artigos.ts navegacao.ts
lib/
  actions.ts             # Server Action do formulário de contato
  hooks.ts               # useMediaQuery / useIsMobile / usePrefersReducedMotion
```

## Formulário de contato

O envio usa uma **Server Action** (`lib/actions.ts`) + Resend. Variáveis em
`.env.example`:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — remetente verificado no Resend
- `CONTACT_TO_EMAIL` — destino (padrão: `content/empresa.ts`)

Sem essas variáveis o formulário valida os campos mas informa que o envio não
está configurado.

## Pendências conhecidas

- `content/empresa.ts` contém **dados provisórios** (telefone, e-mail,
  endereço, redes sociais, domínio) — confirmar com o cliente antes de publicar.
- Projetos e artigos usam imagens/placeholder; substituir por conteúdo real.
- Não há página `/portfolio` — o CTA aponta para a seção de contato.
- `font-serif` usa a fonte serifada padrão do navegador; avaliar `next/font`.

## Deploy

Otimizado para [Vercel](https://vercel.com). Configure as variáveis de
ambiente do formulário no painel do projeto.
