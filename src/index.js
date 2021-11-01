import Phaser from 'phaser';
import PlayScene from './scene/play';
import PreloadScene from './scene/preloas';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [PreloadScene, PlayScene]
};



if (process.env.FB_ENV || process.env.NODR_ENV == 'production') {
  FBInstant.initializeAsync()
    .then(() => {
      new Phaser.Game(config);
    }
    );
} else {
  new Phaser.Game(config);
}