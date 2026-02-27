---
name: gerar receita
description: Gera um arquivo markdown (.md) de receita seguindo o padrão estruturado do projeto, incluindo frontmatter e seções de ingredientes e modo de preparo.
---

# Skill: Gerar Receita

Esta skill é usada para criar novas receitas no formato Markdown (`.md`) para o projeto, garantindo que todas sigam a mesma estrutura e frontmatter.

## Modelo de Referência
O arquivo deve ser gerado seguindo exatamente esta estrutura de frontmatter e corpo de texto:

```yaml
---
titulo: [Nome da Receita]
descricao: [Breve descrição chamativa da receita]
imagem: [Caminho da imagem, ex: /images/nome-da-receita.png]
tempo_preparo: [Tempo, ex: 1h 30min]
porcoes: [Rendimento, ex: 6 pessoas]
categoria: [Categoria, ex: bovinos, aves, sobremesas]
tags: [[Tag 1], [Tag 2], [Tag 3]]
---

## Ingredientes

* [Quantidade] de [Ingrediente]
* [Quantidade] de [Ingrediente]

## Modo de Preparo

1. **[Passo 1]:** [Descrição do passo].
2. **[Passo 2]:** [Descrição do passo].
```

## Instruções de Execução

1. **Reunir Informações:** Se o usuário não fornecer todos os detalhes da receita (título, descrição, tempo, porções, categoria, ingredientes e passos), você pode inferir os dados que faltam com base no nome do prato ou pedir confirmação ao usuário.
2. **Formatação:** 
   - O `titulo` deve ser bem capitalizado.
   - O nome do arquivo a ser salvo deve ser em formato kebab-case (ex: `nome-da-receita.md`) e preferencialmente salvo no diretório `src/content/receitas/`.
   - A `imagem` deve seguir o padrão de caminho absoluto a partir do public, geralmente `/images/nome-do-arquivo.png` ou `.jpg`.
3. **Escrita do Arquivo:** Utilize a ferramenta `write_to_file` para criar o arquivo fornecendo o conteúdo estruturado gerado.
4. **Confirmação:** Informe ao usuário que a receita foi criada com sucesso, mencionando o local onde o arquivo foi salvo.
