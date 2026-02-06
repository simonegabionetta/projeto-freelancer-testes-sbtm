# Registro de Defeitos - Visualizador de Vagas

Este documento contém a lista detalhada de defeitos encontrados durante as sessões de testes exploratórios.

| ID | Título do Defeito | Severidade | Módulo | Descrição Resumida |
|:---|:---|:---|:---|:---|
| BUG-001 | Espaçamento irregular no formulário de login | Baixa | Login | Campos de e-mail e senha com desalinhamento lateral. |
| BUG-002 | Texto abaixo do botão "Entrar" desalinhado | Baixa | Login | Elementos de texto não seguem o alinhamento do botão principal. |
| BUG-003 | Login permitido com espaço inicial no e-mail | Média | Login | Sistema não realiza o trim no campo de e-mail antes da validação. |
| BUG-004 | Mensagens de validação em idioma incorreto | Média | Login | Feedback do sistema aparece em idioma diferente do padrão da página. |
| BUG-005 | Falta de bloqueio de tentativas de senha | **Crítica** | Login | Vulnerabilidade a ataques de força bruta por falta de rate limiting. |
| BUG-006 | Persistência de sessão insegura via URL | **Crítica** | Login | Acesso direto via URL permite manter logado após fechar navegador. |
| BUG-007 | Status Code 200 para credenciais inválidas | **Crítica** | Login | API retorna sucesso (200) em vez de erro de autenticação (401). |
| BUG-008 | Filtro de Salário Máximo ignora valores extremos | Média | Dashboard | Valores muito altos ou negativos retornam a lista completa. |
| BUG-009 | Quebra de layout em resolução 1920px | Média | Dashboard | Elementos da interface se sobrepõem ou quebram em telas grandes. |
| BUG-010 | Falta de barra de rolagem horizontal (1366px) | Média | Dashboard | Impossibilidade de visualizar todos os dados da tabela em telas médias. |
| BUG-011 | Erros estruturais no HTML (Charset/Title) | Baixa | Geral | Ausência de meta tags essenciais e cabeçalhos duplicados. |
| BUG-012 | Baixo contraste na paginação (WCAG) | Média | Dashboard | Link "Próxima" não atende aos requisitos de acessibilidade. |
| BUG-013 | Performance: Long Tasks no JavaScript | Média | Dashboard | Execução pesada de JS trava a interação do usuário no dashboard. |
| BUG-014 | JS Legado e não minificado | Baixa | Geral | Aumento desnecessário no tempo de carregamento e parsing. |
| BUG-015 | Quebra de layout em 1024px | Média | Dashboard | Interface inutilizável em resoluções de tablets/telas pequenas. |

---
*Nota: A severidade foi definida com base no impacto direto na segurança (Crítica), funcionalidade (Média) ou estética/usabilidade (Baixa).*
