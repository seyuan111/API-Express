const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

let rappers = {
    'Lil Baby':{
    'name': 'Dominique Armani Jones',
    'age': 26,
    'Birthplace': 'Atlanta, GA',
    },
    'Drake':{
        'name': 'Aubrey Drake Graham',
        'age': 34,
        'Birthplace': 'Ontario, Canada',
    },
    'Lil Mosey':{
        'name': 'Lathan Moses Stanley Echols',
        'age': 19,
        'Birthplace': 'Mountlake Terrace, Washington State',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/rappers/:rapperName', (request,response) => {
    const rapName = request.params.rapperName
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});