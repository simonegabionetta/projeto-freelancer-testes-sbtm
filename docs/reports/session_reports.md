# Relatórios de Sessão - Teste Exploratório (SBTM)

Este documento contém os relatórios das 11 sessões de testes exploratórios realizados na aplicação de Visualizador de Vagas.

---

## Resumo Executivo
- **Total de Sessões**: 11
- **Bugs Encontrados**: 15 (sendo 10 Críticos)
- **Tempo Total de Teste**: 7 horas
- **Testadora**: Simone Monteiro Gabionetta

---

## Sessão 001: Layout da Tela de Login
- **Data/Hora**: 14/11 - 22:40h
- **Módulo**: Login
- **Charter**: Explore a Funcionalidade de Login com a ferramenta DevTools para descobrir se o software lida bem com diversas resoluções de tela.
- **Duração**: 20 minutos
- **Notas**:
    - (I) Consegui diminuir a tela sem quebra de layout, porém observei que os campos e-mail e senha possuem espaçamento menor com relação ao espaçamento do lado esquerdo e desalinhado com botão entrar.
    - (II) O texto logo abaixo do botão entrar está desalinhado e também possui o espaçamento maior do lado direito.
- **Riscos**: Formulário saindo do viewport, campos desalinhados, botão login não clicável.
- **Defeitos**:
    1. O campo e-mail e senha possuem espaçamento menor do lado direito com relação ao lado esquerdo do formulário.
    2. O texto abaixo do botão “Entrar” está desalinhado.

---

## Sessão 002: Validação de Dados e Segurança no Login
- **Data/Hora**: 14/11 - 23:00h
- **Módulo**: Login
- **Charter**: Explore a Funcionalidade de Login com Heurísticas de Testes de Strings (Injeção de SQL, Caracteres especiais, Em branco, Espaços) para descobrir se o software valida corretamente os dados de entrada e vulnerabilidades.
- **Duração**: 40 minutos
- **Notas**:
    - (I) Ao digitar o e-mail com um espaço inicial, o login foi permitido.
    - (II) O campo senha não possui limite visual de caracteres. Mensagens de validação com idioma diferente da tela.
    - (III) Sem limitação ou bloqueio após várias tentativas de senha.
    - (IV) Persistência de login ao fechar e abrir o navegador com a mesma URL.
- **Defeitos**:
    1. Login permitido com espaço inicial no e-mail.
    2. Mensagens de validação em idioma incorreto.
    3. Falta de bloqueio de tentativas de senha.
    4. Comportamento confuso ao clicar na seta de voltar do navegador.
    5. Persistência de login via URL.

---

## Sessão 004: API e Status Codes (DevTools)
- **Data/Hora**: 15/11 - 10h
- **Módulo**: Login
- **Charter**: Explore a Funcionalidade de Login com a Heurística VADER + DevTools (Network) para avaliar status code, payload e verbos HTTP.
- **Duração**: 60 minutos
- **Notas**:
    - (I) Requisição de login usa método POST e HTTPS (Seguro).
    - (II) Login com credenciais válidas retorna status 302 (Redirecionamento).
    - (III) **Crítico**: Login com credenciais inválidas retorna status 200 OK, quando deveria ser 401 Unauthorized.
- **Defeitos**:
    1. Login com credenciais inválidas retorna 200 em vez de 401.

---

## Sessão 005: Filtros do Dashboard (CRUD)
- **Data/Hora**: 15/11 - 14h
- **Módulo**: Dashboard
- **Charter**: Explore a funcionalidade de Filtros com Heurísticas Gerais de CRUD para descobrir se os filtros são aplicados corretamente.
- **Duração**: 60 minutos
- **Notas**:
    - (I) Filtro de valor aleatório (ex: 10000000000 ou -1) ignora a busca e traz todos os 543 registros.
    - (II) Filtro de salário médio é ignorado para valores altos.
- **Defeitos**:
    1. Filtro de Salário Máximo é Ignorado para Valores Altos e negativos.
    2. Filtro de Salário Médio é ignorado para Valores altos e zerados.

---

## Sessão 006: Responsividade do Dashboard
- **Data/Hora**: 14/11 - 15:00h
- **Módulo**: Dashboard
- **Charter**: Explore a Funcionalidade de filtros e exibição de dados com DevTools para verificar diversas resoluções.
- **Duração**: 25 minutos
- **Defeitos**:
    1. Quebra de layout em resolução 1920px.
    2. Falta de barra de rolagem horizontal em resolução 1366px.
    3. Quebra de layout e falta de barra de rolagem horizontal em resolução 1024px.

---

## Sessão 007: Qualidade do Código (UI/HTML)
- **Data/Hora**: 15/11 - 16:00h
- **Módulo**: Dashboard
- **Charter**: Explore a Funcionalidade da tela com Heurísticas de Testes de UI (Botões, Validação HTML/CSS).
- **Duração**: 60 minutos
- **Notas**:
    - (I) Validação HTML: charset não declarado, `<title>` ausente e `<head>` duplicado.
- **Defeitos**:
    1. HTML com charset não declarado, `<title>` ausente e `<head>` duplicado.

---

## Sessão 008: Acessibilidade (Axe DevTools)
- **Data/Hora**: 15/11 - 17:00h
- **Módulo**: Dashboard
- **Charter**: Explore a acessibilidade da página (rótulos, foco, contraste) usando Axe DevTools.
- **Duração**: 25 minutos
- **Defeitos**:
    1. Contraste insuficiente no link “Próxima »” da paginação (falha WCAG 2.1 AA).

---

## Sessão 009: Performance (Lighthouse)
- **Data/Hora**: 15/11 - 17:30h
- **Módulo**: Dashboard
- **Charter**: Explore a performance web e comportamento dos filtros usando Lighthouse.
- **Duração**: 25 minutos
- **Notas**:
    - (I) Delay perceptível na execução de JS. Long tasks travando interações.
- **Defeitos**:
    1. Lentidão na execução de JavaScript no dashboard.
    2. Main-thread sobrecarregada.
    3. JavaScript não minificado.
    4. Carregamento de JS legado desnecessário.
