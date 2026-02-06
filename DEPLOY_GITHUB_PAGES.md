# 🚀 Deploy do Dashboard - Guia Passo a Passo

Siga este guia para publicar seu dashboard interativo no GitHub Pages **gratuitamente**.

---

## ✅ Passo 1: Preparar o Código Localmente

Abra o terminal e execute:

```bash
# Clonar seu repositório
git clone https://github.com/simonegabionetta/projeto-freelancer-testes-sbtm.git
cd projeto-freelancer-testes-sbtm/dashboard

# Instalar dependências
npm install

# Fazer build do projeto
npm run build
```

Isso criará uma pasta chamada `dist/` com todos os arquivos prontos para publicar.

---

## ✅ Passo 2: Criar Branch gh-pages

Execute no terminal:

```bash
# Voltar para a raiz do repositório
cd ..

# Criar uma nova branch chamada gh-pages
git checkout --orphan gh-pages

# Remover todos os arquivos
git rm -rf .

# Copiar apenas os arquivos buildados
cp -r dashboard/dist/* .

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Deploy dashboard to GitHub Pages"

# Enviar para o GitHub
git push origin gh-pages
```

---

## ✅ Passo 3: Configurar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu esquerdo, clique em **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione "Deploy from a branch"
   - **Branch**: Selecione `gh-pages` e pasta `/ (root)`
5. Clique em **Save**

---

## ✅ Passo 4: Acessar o Dashboard

Aguarde 2-3 minutos e acesse:

```
https://simonegabionetta.github.io/projeto-freelancer-testes-sbtm/
```

✅ Pronto! Seu dashboard está online!

---

## 🔄 Atualizar o Dashboard

Sempre que quiser fazer alterações:

```bash
# Fazer as mudanças no código
# Depois:

cd dashboard
npm run build

cd ..
git checkout gh-pages
rm -rf *
cp -r dashboard/dist/* .
git add .
git commit -m "Update dashboard"
git push origin gh-pages

# Voltar para master
git checkout master
```

---

## 📱 Compartilhar com Recrutadores

Agora você pode compartilhar o link:

**LinkedIn:**
- Vá para seu perfil
- Clique em "Adicionar seção"
- Selecione "Projetos"
- Cole o link: `https://simonegabionetta.github.io/projeto-freelancer-testes-sbtm/`

**Email:**
> "Realizei testes exploratórios em uma aplicação de vagas do LinkedIn, identificando 18 defeitos críticos. Veja o dashboard interativo: https://simonegabionetta.github.io/projeto-freelancer-testes-sbtm/"

---

## ❓ Dúvidas Comuns

### "Não consigo acessar o site"
- Aguarde 5 minutos (GitHub Pages pode demorar)
- Verifique se a branch `gh-pages` foi criada
- Recarregue a página (Ctrl+F5)

### "O site mostra 404"
- Verifique se a pasta `dist/` foi copiada corretamente
- Confirme que o arquivo `index.html` está na raiz

### "Os estilos/imagens não carregam"
- Verifique se todos os arquivos foram copiados
- Recarregue a página (Ctrl+Shift+R para limpar cache)

---

## 🎉 Pronto!

Seu dashboard profissional está online e pronto para impressionar recrutadores!

**Dica**: Adicione este projeto ao seu LinkedIn e GitHub profile para aumentar sua visibilidade no mercado de QA.
