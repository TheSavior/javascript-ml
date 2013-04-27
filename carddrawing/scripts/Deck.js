function Deck() {

    // Create an empty array of cards.

    this.cards = [];

    this.makeDeck = function() {

        var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
        var suits = new Array("C", "D", "H", "S");
        var i, j, k;
        var m;

        m = ranks.length * suits.length;

        // Set array of cards.

        for (j = 0; j < suits.length; j++) {
            for (k = 0; k < ranks.length; k++) {
                this.cards.push(new Card(ranks[k], suits[j]));
            }
        }
    };

    this.shuffle = function(n) {
        var i, j, k;
        var temp;

        // Shuffle the stack 'n' times.

        for (i = 0; i < n; i++) {
            for (j = 0; j < this.cards.length; j++) {
                k = Math.floor(Math.random() * this.cards.length);
                temp = this.cards[j];
                this.cards[j] = this.cards[k];
                this.cards[k] = temp;
            }
        }
    };

    this.draw = function() {
        if (this.cards.length > 0) return this.cards.shift();
        else return null;
    };

    this.cardCount = function() {
        return this.cards.length;
    };
}