alert('working');

document.querySelector('button').addEventListener('click',getRapName);

async function getRapName(){
    try{
    const res = await fetch('http://localhost:8000/api/rappers');
    const data = await res.json();

    console.log(data);
    }catch(err){
        console.log(err);
    }
}