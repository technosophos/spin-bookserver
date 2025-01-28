import { ResponseBuilder } from "@fermyon/spin-sdk";

let books = [
    {
        title: "Dead Souls",
        author: "Nokolai Gogol"
    },

    {
        title: "We Were Eight Years In Power",
        author: "Ta-Nehisi Coates"
    },
    {
        title: "The Little Drummer Girl",
        author: "John Le Carré"
    },
    {
        title: "My Ántonia",
        author: "Willa Cather"
    },
    {
        title: "Haroun and the Sea of Stories",
        author: "Salman Rushdie"
    },
    {
        title: "The Bird King",
        author: "G. Willow Wilson"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien"
    }
]

export async function handler(req, res) {
    let todaysBook = (new Date()).getDay();
    res.send(JSON.stringify(books[todaysBook]));
}
