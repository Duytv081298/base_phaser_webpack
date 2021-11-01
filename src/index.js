import Phaser from 'phaser';
import PlayScene from './scene/play';
import PreloadScene from './scene/preloas';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [PreloadScene, PlayScene]
};



  FBInstant.initializeAsync()
    .then(() => {
      new Phaser.Game(config);
    }
    );