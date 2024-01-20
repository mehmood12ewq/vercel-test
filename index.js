import express from 'express';
import bodyParser from 'body-parser';
// import axios from 'axios';
// import getLyrics from './lib/getLyrics';
// import getSong from './lib/getSong';
// import cors from 'cors';
// import searchSong from './lib/searchSong';
// import getSongById from './lib/getSongById';
// app.use(cors());

// app.use(bodyParser.json());

// app.post("/", async (req, res) => {
//   const options = {
//     apiKey: Yny99Mqbsyxy3DuCRiRwSbr9wsukez9PjwChD8Iv1wQ0JDQIe2YFdH9HFBmxoYE2,
//     title: req.body.song,
//     artist: req.body.artist,
//     optimizeQuery: true,
//   };
//   try{
//     const song = await searchSong(options);
//       let perfectMatch = [];
    
//       let suggest = []; 
//       for(let i = 0; i < song.length; i++){
//         if(song[i].title.startsWith(req.body.song)){
//           console.log("perfect match song title : ", song[i].title);
//           perfectMatch.push(song[i]);
//         }else{
//           suggest.push(song[i]);
//         }
//       }
    
//       console.log("perfect match : ", perfectMatch);
//       let songs = perfectMatch.concat(suggest);
//       console.log("song : ");
//       console.log("song original array : ", song);
    
//       console.log("Final array: ", songs);
      
//       res.json(songs);
//   }catch(error){
//     res.json({error: "No songs found that match your search request...."})
//   }
// });

// app.post("/lyrics", async (req, res) => {
//   console.log("req.body : ", req.body);
//   console.log("song id : ",req.body.songId);
//   const options = {
//     id: req.body.songId,
//     apiKey: Yny99Mqbsyxy3DuCRiRwSbr9wsukez9PjwChD8Iv1wQ0JDQIe2YFdH9HFBmxoYE2,
//     title: req.body.song,
//     artist: req.body.artist,
//     optimizeQuery: true,
//   };
//   let id = req.body.songId;
//   let apiKey =  Yny99Mqbsyxy3DuCRiRwSbr9wsukez9PjwChD8Iv1wQ0JDQIe2YFdH9HFBmxoYE2;
//   try{
//     const song = await getSongById(id, apiKey);
//     console.log(song);
//     res.json(song);
//   }catch(e){
//     res.json("error: No such song");
//     console.log(e);
//   }
// })


const app = express();
const port = 9000;

app.use('/',(req,res)=>{
    res.json({message: "Hello from Api"});
})
app.listen(port,()=>{
    console.log(`Starting Server on Port ${port}`)
})
