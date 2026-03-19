# Projeto Freelancer de Testes Exploratórios - Visualizador de Vagas

![Freelance](https://img.shields.io/badge/Tipo-Freelancer-blue?style=for-the-badge)
![Testing](https://img.shields.io/badge/Metodologia-SBTM-green?style=for-the-badge)
![Bugs](https://img.shields.io/badge/Bugs%20Críticos-10-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

## Visão Geral

Este repositório documenta um **projeto freelancer de testes exploratórios** executado para o mentor **Júlio de Lima**. O trabalho consistiu na aplicação de **Testes Exploratórios Baseados em Sessão (SBTM)** em uma aplicação web de visualização de vagas extraídas do LinkedIn.

O foco principal foi a identificação e documentação de **bugs críticos**, vulnerabilidades de segurança e problemas de usabilidade/layout. Este projeto exemplifica a aplicação de metodologias profissionais de QA em um cenário real de desenvolvimento.
#


## Resumo dos Resultados

| Métrica | Resultado |
|:--- |:--- |
| **Total de Sessões** | 11 sessões de teste |
| **Bugs Encontrados** | 15 defeitos |
| **Bugs Críticos** | 10 (67% do total) |
| **Tempo de Execução** | 7 horas |
| **Técnica Principal** | SBTM (Session-Based Test Management) |
| **Foco** | Vulnerabilidades de segurança e usabilidade |

## 🛠️ Ferramentas e Heurísticas

Para a descoberta dos defeitos, foram aplicadas diversas técnicas e ferramentas:
*   **Heurísticas**: VADER, CRUD, Testes de Strings, Heurísticas de UI.
*   **Ferramentas**: DevTools (Network, Application, Lighthouse), Axe DevTools (Acessibilidade), HTML Checker.
*   **Segurança**: Testes de Injeção de SQL e persistência de sessão.

## Estrutura do Repositório

-   [`/docs/reports/`](./docs/reports/session_reports.md): Relatórios detalhados de cada uma das 11 sessões de teste.
-   [`/artifacts/`](./artifacts/defect_log.md): Planilha completa de reporte de defeitos com severidade e descrição.

## Destaques de Defeitos Críticos

1.  **Vulnerabilidade de Autenticação (BUG-007)**: Status Code 200 retornado para credenciais inválidas em vez de 401 Unauthorized. Falha crítica na API de login.
2.  **Segurança - Força Bruta (BUG-005)**: Falta de bloqueio após múltiplas tentativas de senha, permitindo ataques de força bruta.
3.  **Segurança - Persistência de Sessão (BUG-006)**: Login permanece ativo ao acessar a URL diretamente após fechar o navegador.
4.  **Validação de Entrada (BUG-003)**: Sistema aceita e-mail com espaços iniciais, indicando falta de sanitização.
5.  **UX/Segurança**: Mensagens de erro em idioma incorreto, dificultando o entendimento do usuário.

---

## Informações do Projeto

- **Testadora**: Simone Monteiro Gabionetta
- **Mentor/Supervisor**: Júlio de Lima
- **Tipo**: Projeto Freelancer (Remunerado)
- **Autorização**: Autorizado pelo cliente para publicação pública
- **Período**: 14-15 de Novembro

---

*Este repositório serve como documentação profissional de um projeto freelancer de testes, demonstrando aplicação prática de metodologias SBTM, identificação de vulnerabilidades críticas e comunicação clara de achados de teste.*

