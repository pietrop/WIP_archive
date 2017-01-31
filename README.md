# WIP website 

Whistle Blower interview project website. 

is using a modified version of the demo version of the [autoEdit][autoedit] github page.


To generate the demo page

```
npm run make_js
```

<!--   "make_js": "browserify lib/app/app.js > nwjs/app.js", could be changed to 

  "make_js": "browserify lib/app/app.js > nwjs/app.js", -->

and then to move it into the `docs` folder for github pages 

```
npm run make_demo
```

This copies the content of `'./nwjs'` in `'./docs'` so that it can run as standalone static html site using github pages, without the need for backend (faster loadtime).

### To add a new video 
To add new video of interviews with transcription:

- To generate the video transcription json, use [autoEdit][autoEdit], and in export options chose Json.
- Also export the video webm preview or make mp4 video preview using [miro converter][miroConverter]
- Modify the json to add url to where you are hosting the video. `videoOgg`
- also add an audio file `audioFile`
- add thumnail image in json + link to where you hosting image. using as key `thumbnail`
- add vimeo id to json. eg if url is [https://vimeo.com/128977725](https://vimeo.com/128977725) then the id is `128977725`.
- modify the `./nwjs/demo_transcription.json` file and add it to the array. 

<!-- could store videos and images in assets, but make the side heavier -->

<!-- if you have transcriptions as SRT can use srt parser converter module to make json -->


## Consideration

It's a backbone app, so in theory it could even connect to a server side app, eg in rails or other framework, that could serve the content to it. 


## To do 

- [X] modify welcome page //add trailer
- [ ] modify index page 
- [ ] modify show page
- [ ] Add contact page 
- [ ] change id for transcript/interview URL so that it can persist, eg don't use CID but use ID instead.
- [ ] change so that the video files are mp4 made with miro converter 


<!-- Consider connecting to a google spreadsheet for backend. (similar to prototype made for niels before?) -->

<!-- consider making autoEdit script that takes transcriptions in database of autoEdit2 and makes the demo_transcription.json file with it. -->


<!-- Links -->

[autoEdit]: www.autoedit.io
[miroConverter]: https://www.macupdate.com/app/mac/33832/miro-video-converter