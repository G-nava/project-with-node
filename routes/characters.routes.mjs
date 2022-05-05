//  SINGLE RESPONSABILITY PRINCIPLE
import fetch from 'node-fetch';

import express from 'express'
const router = express.Router();




const URLAPI = 'https://rickandmortyapi.com/api/character';

router.get('/', async (request,response)=>{ // /character
  const data = await (await fetch(URLAPI)).json();
  response.json(data)
});

router.get('/rick', async (request,response)=>{
  const data = await (await fetch(`${URLAPI}/1`)).json();
  response.json(data)
});



router.get('/:id', async (request,response)=>{
  const {id} = request.params;
  const result = await (await fetch( `${URLAPI}?page=${id}`)).json();
  response.json(result)
})

export default router;
