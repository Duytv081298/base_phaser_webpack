export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.on('progress', value => {
            FBInstant.setLoadingProgress(value * 100);
        })
        this.load.once('complete', () => {
            FBInstant.startGameAsync()
                .then(() => {
                    this.startGame()
                })
        })
    }
    startGame() {
        this.scene.start('PlayScene')
    }
}