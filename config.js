var path               = require("path");
// var ffmpegPath        = require('ffmpeg-static').path;
// var ffprobePath       = require('ffprobe-static').path;

module.exports = {
  serverUrl: '',
  appName: 'WIP',
  ffmpegPath: path.join(process.cwd(),"bin","ffmpeg"),
  ffprobePath: path.join(process.cwd(),"bin","ffprobe"),
};
