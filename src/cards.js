import React from 'react';


const Cards = () => {
    // assert(deck != null, 'Deck cannot be null');

    const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const deck1 = [10, 11, 12, 13, 14]

    const players = [
        { Name: 'You', Hand: [] },
        { Name: 'Me', Hand: [] },
        { Name: 'Dupree', Hand: [] }
    ]

    const dealAll = () => {

        for (let i = 0; i < deck.length; i++) {

            for (let j = 0; j < players.length; j++) {
                let card = deck.pop();
                players[j].Hand.push(card)
            }
            return players;
        }
    };

    const shuffleDeck = () => {
        var i = deck.length, j, temp;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = deck[j];
            deck[j] = deck[i];
            deck[i] = temp;
        }
        console.log(deck);
    }


    return (
        <div>
            {/* {shuffleDeck()} */}
            {dealAll()}
        </div>
    )

};

export default Cards;
