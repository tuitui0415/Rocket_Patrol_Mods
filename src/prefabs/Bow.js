// Rocket prefab
class Bow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isShooting = false;      // track rocket's firing status
        this.moveVelocity = 2;         // pixels per frame
        this.sfxBow = scene.sound.add('sfx_rocket')  // add rocket sfx
    }

    update() {
        // left/right movement
        if(!this.isShooting) {
            if(keyA.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveVelocity;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveVelocity;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyW) && !this.isShooting) {
            this.isShooting = true;
            this.sfxBow.play();
        }
        // if fired, move up
        if(this.isShooting && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveVelocity;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isShooting = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
