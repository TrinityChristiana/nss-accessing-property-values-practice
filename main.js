const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

/* Output the following value to the console.

Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album. */

let name = beatles.members[1].name;
let startDate = beatles.history.formed;
let endDate = beatles.history.disbanded;
let dateBorn = beatles.members[1].birth;
let tourName = beatles.albums[3];


console.log(
`
${name} was in the Beatles from ${startDate} to ${endDate}. He was born in ${dateBorn}. He contributed heavily to the ${tourName} Album.
`
);

