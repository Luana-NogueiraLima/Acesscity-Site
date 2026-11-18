# 🏙️ AcessCity

**Tecnologia, acessibilidade e inclusão urbana.**

## 📌 Sobre o projeto

O **AcessCity** é um projeto web voltado à acessibilidade urbana, desenvolvido com o objetivo de contribuir para a construção de cidades mais inclusivas.

A plataforma busca facilitar o registro e o acompanhamento de problemas de acessibilidade, promovendo a conscientização sobre as dificuldades encontradas nos espaços urbanos.

Entre seus recursos estão o mapa de ocorrências, o registro de denúncias e o sistema de recompensas, que incentivam a participação da comunidade na identificação de barreiras urbanas.

## 🎯 Objetivos

- Promover a conscientização sobre a acessibilidade urbana.
- Facilitar o registro e a visualização de problemas de acessibilidade.
- Incentivar a participação da comunidade.
- Utilizar a tecnologia como ferramenta de inclusão social.

## 📄 Documentação de Especificação de Requisitos (ERS)

Para formalizar a engenharia de software do projeto, foi elaborada a **Especificação de Requisitos de Software (ERS)** do AcessCity, seguindo o padrão **RUP / IEEE 830**.

O documento apresenta o escopo, o público-alvo, as restrições técnicas, as interfaces e os requisitos funcionais e não funcionais do sistema.

**Documento:** [`Especificação de Requisitos de Software.pdf`](./docs/Especificação%20de%20Requisitos%20de%20Software.pdf)

### Requisitos funcionais (RF01–RF07)

- Registro de ocorrências.
- Mapa interativo e dinâmico.
- Filtros combináveis por categoria, urgência e status.
- Geolocalização automática.
- Acompanhamento do status das ocorrências.
- Sistema de gamificação e recompensas.
- Canal de contato.

### Requisitos não funcionais (RNF01–RNF09)

- Acessibilidade digital, incluindo alto contraste e suporte a leitores de tela.
- Fluxo de navegação otimizado em até três cliques.
- Responsividade para diferentes dispositivos.
- Desempenho na filtragem inferior a 500 ms.
- Conformidade com a Lei Geral de Proteção de Dados (LGPD).

## ✨ Melhoria implementada: filtros no Mapa de Ocorrências

Como evolução do projeto, foi implementado um sistema de filtros no Mapa de Ocorrências, permitindo que os usuários visualizem apenas os registros correspondentes aos critérios selecionados.

**Problema identificado:** todas as ocorrências eram exibidas simultaneamente, dificultando a localização de problemas específicos de acessibilidade.

**Funcionalidades desenvolvidas:**

- Filtro por **categoria**, **urgência** e **status**.
- Combinação de diferentes filtros simultaneamente.
- Botão **"Limpar filtros"**, para restaurar a visualização completa.
- Interface responsiva para dispositivos móveis e desktops.

**Benefício:** facilitar a identificação e a priorização de problemas de acessibilidade urbana, tornando a navegação mais prática e eficiente.

**Como utilizar:** na página do mapa de ocorrências, selecione os filtros desejados para visualizar os registros correspondentes. Para retornar à visualização completa, clique em **"Limpar filtros"**.

A implementação foi organizada por meio de uma tarefa no **Jira (ACE-2)**, desenvolvida em uma branch específica e integrada à branch `main` por meio de um **Pull Request**, antes da publicação no Render.

## 🛠️ Tecnologias e ferramentas

| Tecnologia / Ferramenta | Utilização |
|---|---|
| HTML5 | Estrutura das páginas. |
| CSS3 | Estilização e organização visual. |
| JavaScript | Funcionalidades e interatividade. |
| Git | Controle de versões. |
| GitHub | Armazenamento do código-fonte e colaboração. |
| Jira | Gerenciamento e acompanhamento de tarefas. |
| Render | Hospedagem e publicação da aplicação. |

## 📂 Estrutura do projeto

```text
Acesscity-Site/
├── docs/
│   └── Especificação de Requisitos de Software.pdf
├── index.html
├── sobre.html
├── mapa.html
├── recompensas.html
├── denuncia.html
├── contato.html
├── script.js
├── style.css
└── README.md
```

## 🌐 Acesso ao projeto

**Aplicação publicada:**

🔗 [AcessCity — Acesse o site](https://acesscity-site.onrender.com)

**Repositório GitHub:** [Acesscity-Site](https://github.com/Luana-NogueiraLima/Acesscity-Site)

## 💻 Como executar localmente

Para visualizar o projeto em sua máquina:

1. Acesse o [repositório no GitHub](https://github.com/Luana-NogueiraLima/Acesscity-Site).
2. Clone o repositório ou faça o download dos arquivos em formato ZIP.
3. Caso tenha baixado o ZIP, extraia os arquivos.
4. Abra o arquivo `index.html` em um navegador.

## ☁️ Hospedagem e deploy

O AcessCity está hospedado na plataforma **Render**, configurado como um **Static Site**, modelo adequado para aplicações desenvolvidas com HTML, CSS e JavaScript.

O repositório do GitHub está conectado ao Render, permitindo que a plataforma acesse o código-fonte e realize a publicação da aplicação conforme as configurações de deploy.

A versão publicada pode ser acessada em:

🔗 https://acesscity-site.onrender.com

## 🔄 Integração e CI/CD

O projeto utiliza ferramentas de controle de versão e hospedagem para organizar o processo de desenvolvimento e publicação.

O fluxo de integração e implantação contempla:

- **Controle de versões:** utilização do Git e GitHub para armazenar o código-fonte e registrar alterações por meio de commits.
- **Desenvolvimento organizado:** utilização de branches para desenvolver melhorias de forma independente.
- **Integração:** utilização de Pull Requests para revisar e integrar alterações à branch principal.
- **Deploy:** publicação da aplicação pelo Render, conectado ao repositório GitHub.
- **Monitoramento:** acompanhamento do status das implantações e identificação de possíveis erros pelo painel do Render.

### Fluxo de desenvolvimento

```text
Alteração no código
        ↓
Commit no GitHub
        ↓
Criação de Pull Request
        ↓
Revisão e integração na main
        ↓
Deploy no Render
        ↓
Validação da aplicação publicada
```

Esse processo contribui para uma manutenção mais organizada, facilita a integração de melhorias e permite disponibilizar novas versões da aplicação.

## 👥 Integrantes da equipe

- Beatriz Dias
- Luana Nogueira
- Luiz Felipe
- Maria Luiza
- Wemilly Camilly

## 📚 Aprendizados

O desenvolvimento do AcessCity proporcionou experiências práticas em diferentes etapas da Engenharia de Software, incluindo:

- Engenharia de requisitos e documentação técnica.
- Desenvolvimento de interfaces web com HTML, CSS e JavaScript.
- Organização e manutenção de projetos.
- Controle de versões com Git e GitHub.
- Gerenciamento de tarefas com Jira.
- Hospedagem e publicação de aplicações com Render.
- Utilização de branches e Pull Requests em fluxos de desenvolvimento.

A atividade também permitiu compreender a importância do planejamento, da documentação e da integração entre ferramentas para o desenvolvimento e a manutenção de aplicações web.

## 💙 Considerações finais

O AcessCity une tecnologia e inclusão social em uma proposta voltada à acessibilidade urbana.

Por meio do desenvolvimento, da documentação, da implementação de melhorias e da publicação da plataforma, foi possível aplicar na prática conceitos fundamentais da Engenharia de Software.

**AcessCity — Tecnologia a favor da acessibilidade.**
