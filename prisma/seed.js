import "dotenv/config";
import { prisma } from "../src/config/db.js";

const creatorId = process.env.SEED_USER_ID;

const movies = [
    {
        title: "The Silent Horizon",
        overview:
            "A former astronaut living in isolation discovers a mysterious signal from deep space that could change humanity’s understanding of the universe.",
        releaseYear: 2019,
        genres: ["Sci-Fi", "Drama"],
        runtime: 118,
        posterUrl: "https://example.com/posters/silent-horizon.jpg",
        createdBy: creatorId,
    },
    {
        title: "Crimson Chase",
        overview:
            "A relentless detective hunts a notorious criminal mastermind through the streets of a neon-lit city.",
        releaseYear: 2021,
        genres: ["Action", "Thriller"],
        runtime: 105,
        posterUrl: "https://example.com/posters/crimson-chase.jpg",
        createdBy: creatorId,
    },
    {
        title: "Echoes of Yesterday",
        overview:
            "A woman revisits her childhood home and uncovers long-buried secrets that reshape her family history.",
        releaseYear: 2018,
        genres: ["Drama", "Mystery"],
        runtime: 112,
        posterUrl: "https://example.com/posters/echoes-yesterday.jpg",
        createdBy: creatorId,
    },
    {
        title: "Pixel Warriors",
        overview:
            "A group of gamers are mysteriously transported into the world of their favorite retro video game.",
        releaseYear: 2022,
        genres: ["Adventure", "Comedy", "Fantasy"],
        runtime: 97,
        posterUrl: "https://example.com/posters/pixel-warriors.jpg",
        createdBy: creatorId,
    },
    {
        title: "Frozen Divide",
        overview:
            "Scientists in Antarctica uncover an ancient organism trapped beneath the ice that threatens global survival.",
        releaseYear: 2020,
        genres: ["Sci-Fi", "Horror", "Thriller"],
        runtime: 110,
        posterUrl: "https://example.com/posters/frozen-divide.jpg",
        createdBy: creatorId,
    },
    {
        title: "The Last Symphony",
        overview:
            "A struggling composer gets one final chance to perform a masterpiece that could redefine his career.",
        releaseYear: 2017,
        genres: ["Drama", "Music"],
        runtime: 124,
        posterUrl: "https://example.com/posters/last-symphony.jpg",
        createdBy: creatorId,
    },
    {
        title: "Midnight Heist",
        overview: "A crew of expert thieves plans the most daring museum robbery ever attempted.",
        releaseYear: 2023,
        genres: ["Crime", "Thriller"],
        runtime: 108,
        posterUrl: "https://example.com/posters/midnight-heist.jpg",
        createdBy: creatorId,
    },
    {
        title: "Beyond the Valley",
        overview:
            "A young traveler embarks on a journey across breathtaking landscapes to find a legendary hidden city.",
        releaseYear: 2016,
        genres: ["Adventure", "Fantasy"],
        runtime: 115,
        posterUrl: "https://example.com/posters/beyond-valley.jpg",
        createdBy: creatorId,
    },
    {
        title: "Digital Shadows",
        overview:
            "A cybersecurity expert uncovers a massive conspiracy hidden deep within the internet.",
        releaseYear: 2024,
        genres: ["Tech", "Thriller"],
        runtime: 102,
        posterUrl: "https://example.com/posters/digital-shadows.jpg",
        createdBy: creatorId,
    },
    {
        title: "Golden Summer",
        overview:
            "During one unforgettable summer, a group of friends discovers love, loss, and the meaning of growing up.",
        releaseYear: 2015,
        genres: ["Romance", "Drama"],
        runtime: 99,
        posterUrl: "https://example.com/posters/golden-summer.jpg",
        createdBy: creatorId,
    },
];

const main = async () => {
    console.log("Seeding movies...");

    for (const movie of movies) {
        await prisma.movie.create({ data: movie });
        console.log(`Created movie: ${movie.title}`);
    }
    console.log("Seeding Completed!!");
};

main()
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
