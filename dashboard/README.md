# Dashboard Interativo - QA Testes Exploratórios

Este diretório contém o código-fonte do dashboard web interativo que apresenta os resultados dos testes exploratórios de forma visual e intuitiva.

## 🚀 Características

- **Gráficos Interativos**: Visualizações de defeitos por severidade, módulo e timeline de sessões
- **Filtros Dinâmicos**: Filtre defeitos por severidade (Críticos, Médios, Baixos)
- **Download de Dados**: Exporte os dados em Excel ou CSV
- **Design Responsivo**: Interface profissional com paleta Data-Driven Minimalism
- **Dados em Tempo Real**: Integrado com a planilha de defeitos

## 📋 Estrutura

```
dashboard/
├── client/                 # Frontend React + Tailwind
│   ├── src/
│   │   ├── pages/         # Componentes de página
│   │   ├── components/    # Componentes reutilizáveis
│   │   └── index.css      # Estilos globais
│   ├── public/            # Arquivos estáticos
│   └── index.html         # HTML principal
├── package.json           # Dependências do projeto
└── server.ts              # Servidor Express (opcional)
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Passos

1. **Instalar dependências**
```bash
cd dashboard
npm install
# ou
pnpm install
```

2. **Executar em desenvolvimento**
```bash
npm run dev
# ou
pnpm dev
```

O dashboard estará disponível em `http://localhost:3000`

3. **Build para produção**
```bash
npm run build
# ou
pnpm build
```

## 📊 Dados

Os dados dos defeitos estão em `../artifacts/defeitos.xlsx` e são carregados automaticamente no dashboard.

### Estrutura dos Dados

Cada defeito contém:
- **ID**: Identificador único (BUG-001, BUG-002, etc.)
- **Título**: Descrição breve do defeito
- **Severidade**: Low, Medium, High
- **Módulo**: Sessão de teste (Sessão 001-009)
- **Prioridade**: Baixa, Média, Alta

## 🎨 Design

O dashboard utiliza o design **Data-Driven Minimalism** com:
- Paleta: Verde profundo (#3d8d3d), Branco, Cinza escuro
- Tipografia: IBM Plex Sans
- Framework: React 19 + Tailwind CSS 4
- Gráficos: Recharts

## 📱 Responsividade

O dashboard é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔗 Deploy

### GitHub Pages

Para fazer deploy no GitHub Pages:

1. Atualize o `package.json` com o repositório correto
2. Execute: `npm run build`
3. Habilite GitHub Pages nas configurações do repositório
4. Selecione a branch `master` e pasta `/dashboard/dist`

### Outras Plataformas

O dashboard pode ser deployado em:
- Vercel
- Netlify
- Railway
- Render
- Manus (com suporte nativo)

## 📝 Customização

Para adicionar novos defeitos, edite o array `allDefects` em `client/src/pages/Home.tsx`.

## 📄 Licença

Este projeto é parte do portfólio profissional de Simone Monteiro Gabionetta.
