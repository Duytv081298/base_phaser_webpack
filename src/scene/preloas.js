import Phaser from 'phaser';


export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('logo', 'assets/logo.png');

        const isProd = process.env.FB_ENV || process.env.NODR_ENV == 'production';
        this.load.on('progress', value => {
            isProd && FBInstant.setLoadingProgress(value * 100);
        })
        this.load.once('complete', () => {
            if (isProd) {
                FBInstant.startGameAsync()
                    .then(() => {
                        this.startGame()
                    })
            } else this.startGame()

        })
    }
    startGame() {
        this.scene.start('PlayScene')
    }
}