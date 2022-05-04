//  SINGLE RESPONSABILITY PRINCIPLE
import fetch from 'node-fetch';
import express from 'express'

const router = express.Router();


// const character = []



const URLAPI = 'https://rickandmortyapi.com/api/character';

router.get('/character', async (request,response)=>{
  const data = await (await fetch(URLAPI)).json();
  response.json(data)
});



router.get('/character/:id', async (request,response)=>{
  const {id} = request.params;
  const result = await (await fetch( `${URLAPI}?page=${id}`)).json();
  response.json(result)
})

module.exports = router;
