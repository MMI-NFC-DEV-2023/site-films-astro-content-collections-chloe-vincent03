import {defineCollection, reference, z} from "astro:content";
import {glob} from "astro/loaders";


const personne = defineCollection({
    loader: glob({base:"src/data/personne", pattern: "**/*.md"}),
    schema: z.object({
        nom: z.string(),
        lieuNaissance: z.string(),
        dateNaissance: z.date(),
        dateDeces: z.date().optional(),
        nationalite: z.string(),
        profession: z.array(z.enum(["acteur", "réalisateur", "scénariste", "producteur" ])).optional(),
    })

});

const films = defineCollection({
    loader: glob({base:"src/data/films", pattern: "**/*.md"}),
    schema: z.object({
        titre : z.string(),
        dateSortie: z.date(),
        realisateur: reference("personne").optional(),
    })
});


export const collections = {personne, films};