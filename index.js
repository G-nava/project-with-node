import fetch from 'node-fetch';
import express from 'express'

// const express = require('express');
const app = express();
const port = 3000;

app.get('/',(request,response)=>{
  response.send('Building...');
});

app.get('/products',(request,response)=>{
  response.json([
    {
      name: 'electronic board',
      reference: '01',
      price: 1000

    },
    {
      name: 'screen',
      reference: '02',
      price: 1500

    }
  ]);
});

app.get('/products/:id',(request, response)=>{
  const {id} = request.params;
  response.json({
    id,
    name: 'screen',
    reference: '02',
    price: 1500
  })
})

app.get('/categories/:categoryid/products/:productsid',(request,response)=>{
  const {categoryid, productsid} = request.params;
  response.json({
    categoryid,
    productsid,
    name: 'screen',
    reference: '02',
    price: 1500
  })
})


// Query params -> ?
app.get('/users',(request,response)=>{
  const {limit,offset} = request.query;
  if (limit && offset) {
    response.json({
      limit,
      offset
    })
  }else{
    response.send('There is not parameter...')
  } // http://localhost:3000/users?limit=10&offset=20
})

// app.get('/new-route',(request,response)=>{
//   response.send("I'm a diferent route...");
// });




// const getData = async ()=>{
//   try {
//     const data = await (await fetch(URLAPI)).json();
//     return data;
//   } catch (err) {
//     console.error();('Error',err);
//   }
// }


app.listen(port,()=>{
  console.log(`Listening in port ${port}`);
})



const use = [
  {id: 1, name: 'user_1'},
  {id: 2, name: 'user_2'},
  {id: 3, name: 'user_3'},
  {id: 4, name: 'user_4'},
  {id: 5, name: 'user_5'},
  {id: 6, name: 'user_6'},
  {id: 7, name: 'user_7'},
  {id: 8, name: 'user_8'},
  {id: 9, name: 'user_9'},
  {id: 10, name: 'user_10'},
  {id: 11, name: 'user_11'},
  {id: 12, name: 'user_12'},
  {id: 13, name: 'user_13'},
  {id: 14, name: 'user_14'}
]


// _________________________________________________________


app.get('/use',(request,response)=>{
  const page = request.query.page
  const limit = request.query.limit

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const usersPage = use.slice(startIndex,endIndex);
  response.json(usersPage)
});



// _____________________________________________________
const URLAPI = 'https://rickandmortyapi.com/api/character';

app.get('/character', async (request,response)=>{
  const data = await (await fetch(URLAPI)).json();
  response.json(data)
});

app.get('/character/:id', async (request,response)=>{
  const {id} = request.params;
  const result = await (await fetch( `${URLAPI}?page=${id}`)).json();
  response.json(result)
})
// _____________________________________________________


//  SINGLE RESPONSABILITY PRINCIPLE




