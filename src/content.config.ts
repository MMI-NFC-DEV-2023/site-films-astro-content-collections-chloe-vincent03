import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";


const personne = defineCollection({
    loader: glob({base:"src/data/personne", pattern: "**/*.md"}),
    schema: z.object({
        nom: z.string(),
        lieuNaissance: z.string(),
        dateNaissance: z.date(),
        dateDeces: z.date().optional(),
        nationalite: z.string(),
    })

});

export const collections = {personne};