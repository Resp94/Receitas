# Documentação do Aplicativo de Receitas

Este documento serve como a fonte da verdade para o funcionamento, estrutura e design do aplicativo de receitas. Ele deve ser utilizado como contexto para qualquer nova implementação ou modificação no projeto.

## 1. Visão Geral
O aplicativo é uma plataforma de catálogo de receitas desenvolvida com o framework **Astro**. O objetivo é oferecer uma experiência visualmente rica, performática e fácil de manter, utilizando arquivos Markdown como fonte de dados (CMS local).

## 2. Tecnologias Principais
- **Astro**: Framework principal para geração de sites estáticos e dinâmicos.
- **TypeScript**: Para tipagem e segurança do código.
- **Markdown / MDX**: Para armazenamento e estruturação das receitas.
- **Astro Content Layer (Content Collections)**: Para gerenciamento e validação dos dados das receitas.
- **Vanilla CSS**: Para estilização seguindo os guias de design.

## 3. Estrutura do Projeto
- `/src/content/receitas/`: Diretório que contém os arquivos `.md` de cada receita.
- `/src/pages/`:
    - `index.astro`: Página principal que lista as receitas.
    - `receitas/[id].astro`: Rota dinâmica para exibir os detalhes de uma receita específica.
- `/src/components/`: Componentes reutilizáveis (Cards, Header, Footer, etc.).
- `/src/layouts/`: Layouts base do site.
- `/src/styles/`: Arquivos CSS globais e tokens de design.
- `.agents/skills/gerar_receita/`: Skill personalizada para o assistente IA gerar novos arquivos de receita no formato correto.

## 4. Estrutura de Dados (Receitas)
Todas as receitas devem seguir o schema definido em `src/content.config.ts`. O frontmatter do arquivo Markdown deve conter:

```yaml
---
titulo: "Nome da Receita"
descricao: "Uma breve descrição da receita."
imagem: "URL da imagem ou caminho local"
tempo_preparo: "Ex: 45 min"
porcoes: "Ex: 4 porções"
categoria: "Ex: Aves, Peixes, Suínos, Bovinos"
tags: ["Tag1", "Tag2"]
---
```

O conteúdo abaixo do frontmatter deve seguir a estrutura:
1. **Ingredientes**: Lista em tópicos.
2. **Modo de Preparo**: Lista numerada ou em tópicos.

## 5. Funcionalidades Detalhadas
- **Listagem Dinâmica**: A página inicial lê automaticamente todos os arquivos em `src/content/receitas/` e exibe cards com imagem, título e tempo de preparo.
- **Busca e Filtros**: Na página inicial as receitas podem ser filtradas simultaneamente por:
    - **Busca por Título**: Case-insensitive, utilizando o input no cabeçalho.
    - **Categorias e Tags**: Clicando nos botões abaixo do campo de busca.
- **Páginas de Detalhe**: Cada receita gera uma URL única baseada no nome do arquivo. A página exibe a imagem em destaque, informações de tempo/porções e as instruções completas.
- **Geração Assistida**: O assistente Antigravity possui uma "Skill" (`gerar_receita`) que permite criar novas receitas instantaneamente seguindo este padrão, garantindo que o frontmatter esteja sempre correto.

## 6. Identidade Visual (Design System)
O design é inspirado no portal "Seara Minha Receita", com foco em tons quentes e legibilidade.

- **Cores**:
    - **Primária**: Laranja Vibrante (`#FF5300`) - Botões e destaques.
    - **Secundária**: Terracota (`#CE5032`) - Títulos.
    - **Categorias**: Cores específicas para Aves, Peixes, Suínos e Bovinos.
- **Tipografia**: Uso de fontes modernas (como Lufga ou Inter) com foco em line-height generoso para leitura.
- **Componentes**: Cards com bordas arredondadas, botões minimalistas e uso extensivo de "pills" (tags arredondadas) para categorias.

## 7. Como Adicionar uma Receita
### Via Assistente (Recomendado)
Peça ao assistente: *"Gere uma receita de [NOME DA RECEITA] usando a skill de gerar receita."*

### Manualmente
1. Crie um arquivo `.md` em `src/content/receitas/` (ex: `bolo-de-cenoura.md`).
2. Adicione o frontmatter obrigatório.
3. Escreva os ingredientes e o modo de preparo.
4. Salve e o Astro atualizará automaticamente a lista e criará a nova página.

---
*Última atualização: 25/02/2026*
