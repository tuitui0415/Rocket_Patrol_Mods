//Yunhan Wei
//Project: Hunting
//4/18/22
//Project took ~12 hours
//Source: All did myself

//Points Breakdown
//Redesign the game's artwork,UI and sound [60]
//Simultaneous two-player mode[30]
//create a new sapceship type with new artworks that's smaller, moves faster ,and worth more points[20]

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT,keyA,keyW,keyD;