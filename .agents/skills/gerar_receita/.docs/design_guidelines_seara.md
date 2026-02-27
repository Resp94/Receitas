# Guia de Design UI/UX Inspirado em "Seara Minha Receita"

Este documento detalha os padrões visuais, componentes e identidade extraídos do site "Seara Minha Receita" para servir como guia de design base para o nosso aplicativo.

## 1. Identidade Cromática (Cores)
O design utiliza uma paleta vibrante e "apetitosa", focada em tons quentes.

*   **Cor Primária (Marca):** Laranja Vibrante (`#FF5300`) - Usado em botões principais, cabeçalhos e ícones de destaque.
*   **Cor Secundária:** Terracota/Laranja Escuro (`#CE5032`) - Utilizado em títulos (`h2`, `h3`) para criar contraste sem perder o calor da marca.
*   **Cores de Suporte (Categorias):**
    *   **Aves:** Laranja avermelhado.
    *   **Peixes:** Azul teal.
    *   **Suínos:** Magenta/Rosa escuro.
    *   **Bovinos:** Vermelho clássico.
*   **Fundo e Texto:**
    *   **Fundo principal:** Branco (`#FFFFFF`).
    *   **Texto do corpo:** Cinza muito escuro/Preto suave (`#1A1A1A`) com opacidade variada (ex: `rgba(255, 255, 255, 0.9)` em fundos escuros).
    *   **Branco puro:** Usado em textos sobre fundos coloridos e campos de busca.

## 2. Tipografia
O aplicativo utilizará uma fonte principal consistente que entrega modernidade e legibilidade.

*   **Fonte Principal:** **Lufga** (Sans-serif) ou uma alternativa semelhante (ex: *Inter*, *Outfit*, *Manrope*).
*   **Estilos:**
    *   **Títulos:** Peso **Bold (700)**, em cores como o Terracota ou Branco (em banners).
    *   **Corpo de Texto:** Peso **Regular (400)**, tamanho base de **18px**, com bom espaçamento entre linhas (line-height) para uma leitura confortável das receitas.
    *   **Botões e Inputs:** Peso **Semibold (600)**, geralmente com tamanho de **13px a 14px**.

## 3. Componentes e Estilos de UI

### Botões
Os botões seguem um padrão minimalista com cantos suavemente arredondados.
*   **Botão Primário:**
    *   **Cor de Fundo:** Laranja (`#FF5300`).
    *   **Texto:** Branco.
    *   **Borda:** Raio de **2px** (border-radius: 2px - quase reto, mas com leve suavização).
    *   **Hover:** Leve escurecimento da cor de fundo (ex: `#E04A00`) ou adição de sombra suave (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`).
*   **Botão Secundário/Outline:**
    *   **Fundo:** Transparente ou Branco.
    *   **Borda:** **0.8px** a **1px** sólida na cor Laranja.
    *   **Texto:** Laranja.
    *   **Hover:** Fundo laranja super claro com texto laranja escuro.
*   **Pílulas (Badges / Tags):**
    *   Utilizadas para categorias, filtros e tags de receitas.
    *   **Bordas:** Totalmente arredondadas (`border-radius: 100px` ou `9999px`).

### Campos de Entrada (Search Bar & Inputs)
*   **Formato:** Estilo pílula (Pill-shaped, totalmente arredondado).
*   **Estilo:** Fundo transparente com borda de **1.6px** sólida (branca no cabeçalho escuro/sobreposto, ou cinza claro/laranja em fundo branco).
*   **Ícones:** Ícone de lupa minimalista alinhado à direita ou esquerda.

### Cards de Receita
*   **Layout base:** Imagem de destaque grande ocupando a parte superior.
*   **Bordas:** Arredondadas (ex: `border-radius: 8px` ou `12px`).
*   **Overlay/Texto:** Texto em branco posicionado sobre a imagem (com um sutil gradiente escuro de fundo para leitura) ou logo abaixo em um cartão de fundo limpo (branco).
*   **Interatividade:** Botão de "favorito" (ícone de coração) em formato circular, geralmente flutuando sobre a imagem da receita no canto superior direito.

## 4. Popups e Notificações (Toasts)
*   **Banners de Aviso/Consentimento (ex: Cookies):**
    *   **Localização:** Fixado no rodapé da tela.
    *   **Estilo:** Fundo cinza claro ou branco, com sombra (`box-shadow`) para destacar do conteúdo rolante.
    *   **Ações:** Botões alinhados à direita, seguindo o padrão primário (Ação principal) e secundário (Configurações/Cancelar).
*   **Toasts de Notificação (ex: "Receita Salva"):**
    *   Estilo Flutuante, com fundo escuro e texto branco, ou fundo branco com borda lateral na cor de status (Laranja ou Verde).
    *   Aparição e desaparecimento com micro-animações (Fade-in e Slide-up).
*   **Menus Dropdown / Modais:**
    *   Seguem um estilo "limpo", com fundo branco.
    *   Itens de lista com links em preto que mudam para laranja no hover.

## 5. Elementos Gráficos Gerais
*   **Gradientes:** Uso de gradientes lineares de laranja para dar profundidade a cabeçalhos ou fundos de seções de destaque.
*   **Espaçamento (Whitespace):** Design "arejado". Utilizar grandes áreas de respiro (padding e margin generosos) entre as seções de receitas para não sobrecarregar o usuário visualmente.
*   **Ícones:** Utilizar famílias de ícones com traços finos e arredondados, mantendo a consistência visual com a fonte principal.
