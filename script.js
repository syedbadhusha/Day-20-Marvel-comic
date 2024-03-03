const container = document.createElement('div')
container.className='container';
container.id = 'mainContainer';

const row = document.createElement('div')
row.className='row'

const title = document.createElement('h1')
title.className='title';
title.id='title'
title.innerHTML="MARVEL COMIC LIST"

//////   Finction to fetch comic content link and display in collumn

async function displayData(){
    const fetchAPI = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b099a8fa70d7ba1722757cfcb9e49b33&hash=dbfde17fe546abbea05365ad975024e7')
    const fetchAPIJson = await fetchAPI.json()
    var res = fetchAPIJson.data.results
    
    for(i=0;i<res.length;i++){
        if(res[i].images[0]){
            var col = document.createElement('div')
            col.className='col col-md-4'
            col.id = 'comicContent'
            col.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${res[i].images[0].path}.${res[i].images[0].extension}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="subTitle">TITLE</p>
                <p class="ctext">${res[i].title}</p>
                </div>
            </div>`
            row.append(col);
        }
    }
}
displayData()
container.append(title,row);
document.body.append(container);