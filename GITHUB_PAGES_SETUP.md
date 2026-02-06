# 🚀 Guia Completo: Deploy com GitHub Pages

Este guia mostra como fazer deploy do dashboard interativo no GitHub Pages **gratuitamente**.

## Opção 1: Deploy Automático com GitHub Actions (Recomendado)

### Passo 1: Criar arquivo de workflow

1. No seu repositório no GitHub, clique em **Actions**
2. Clique em **New workflow** → **set up a workflow yourself**
3. Copie e cole o código abaixo:

```yaml
name: Deploy Dashboard to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: |
          cd dashboard
          npm install
      
      - name: Build project
        run: |
          cd dashboard
          npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dashboard/dist
```

4. Clique em **Commit changes**
5. Escolha "Commit directly to the master branch"
6. Clique em **Commit changes**

### Passo 2: Habilitar GitHub Pages

1. Vá para **Settings** do repositório
2. No menu esquerdo, clique em **Pages**
3. Em "Build and deployment":
   - **Source**: Selecione "Deploy from a branch"
   - **Branch**: Selecione "gh-pages" e pasta "/ (root)"
4. Clique em **Save**

### Passo 3: Acessar o dashboard

Seu dashboard estará disponível em:
```
https://simonegabionetta.github.io/projeto-freelancer-testes-sbtm/
```

Aguarde 2-3 minutos para o primeiro deploy. Você verá um ✅ verde em **Actions** quando terminar.

---

## Opção 2: Deploy Manual (Sem GitHub Actions)

Se preferir fazer deploy manualmente:

### Passo 1: Build local

```bash
cd dashboard
npm install
npm run build
```

Isso cria uma pasta `dist/` com todos os arquivos prontos.

### Passo 2: Criar branch gh-pages

```bash
git checkout --orphan gh-pages
git rm -rf .
```

### Passo 3: Copiar arquivos buildados

```bash
cp -r dashboard/dist/* .
git add .
git commit -m "Deploy dashboard to GitHub Pages"
git push origin gh-pages
```

### Passo 4: Voltar para master

```bash
git checkout master
```

### Passo 5: Habilitar GitHub Pages

Mesmos passos da Opção 1, Passo 2.

---

## Opção 3: Deploy com Vercel (Alternativa)

Se quiser uma alternativa ao GitHub Pages:

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Import Project**
3. Selecione seu repositório GitHub
4. Configure:
   - **Framework**: Vite
   - **Root Directory**: `dashboard`
5. Clique em **Deploy**

Seu dashboard estará em: `https://seu-projeto.vercel.app`

---

## Verificar Deploy

### Via GitHub

1. Vá para **Settings** → **Pages**
2. Você verá uma mensagem: "Your site is live at https://..."

### Via Terminal

```bash
# Verificar se o site está online
curl -I https://simonegabionetta.github.io/projeto-freelancer-testes-sbtm/
```

---

## Troubleshooting

### ❌ "404 - Page not found"

**Solução**: Aguarde 5 minutos e recarregue a página. Às vezes o GitHub Pages demora um pouco.

### ❌ "Arquivo não encontrado"

**Solução**: Verifique se o arquivo `defeitos.xlsx` está em `dashboard/client/public/`

### ❌ "Build failed"

**Solução**: 
1. Verifique se há erros em `Actions`
2. Execute localmente: `cd dashboard && npm run build`
3. Verifique se o `package.json` está correto

### ❌ "CSS/JS não carregando"

**Solução**: Adicione esta linha no `vite.config.ts` (se existir):

```typescript
export default {
  base: '/projeto-freelancer-testes-sbtm/',
  // ... resto da config
}
```

---

## Atualizar o Dashboard

Sempre que você fizer mudanças:

```bash
git add .
git commit -m "Update dashboard"
git push origin master
```

O GitHub Actions fará o deploy automaticamente!

---

## Compartilhar o Dashboard

Depois que estiver online, compartilhe o link com recrutadores:

- **LinkedIn**: Cole o link na seção "Projetos"
- **Portfólio**: Adicione como um projeto destacado
- **Email**: Envie para recrutadores como prova de trabalho

Exemplo de mensagem:
> "Realizei testes exploratórios em uma aplicação de vagas do LinkedIn, identificando 18 defeitos críticos. Veja o dashboard interativo: https://simonegabionetta.github.io/projeto-freelancer-testes-sbtm/"

---

## Próximos Passos

✅ Deploy realizado com sucesso!

Agora você pode:
1. Compartilhar o link com recrutadores
2. Adicionar mais funcionalidades ao dashboard
3. Documentar seus aprendizados no README
4. Usar como referência para outros projetos de QA
