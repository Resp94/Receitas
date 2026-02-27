import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const receitasCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/receitas" }),
    schema: z.object({
        titulo: z.string(),
        descricao: z.string(),
        imagem: z.string().url().or(z.string()),
        tempo_preparo: z.string(),
        porcoes: z.string(),
        categoria: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'receitas': receitasCollection,
};
