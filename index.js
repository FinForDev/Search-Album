let albumList = document.getElementById('albumList');
let searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keypress', async (event) => {
    if (event.key === "Enter") {
        const userInput = searchBar.value;
        const res = await fetchJsonp(`https://itunes.apple.com/search?term=${userInput}&media=music&entity=album&attribute=artistTerm&limit=200`)
        res.json().then(data => showAlbum(data.results));

        console.log(res.json())
        //res.json().then(rc=>rc )      get resultCount
        if (res.json().then(rc => rc) > 20) {

        }
    }
})
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () { alert(i); }, 1000 + i);
// }

console.log("asdf")

const showAlbum = (albums) => {

    const htmlString = albums
        .map((album) => {
            return `
            <li class="album"> 
                <p> ${album.collectionName}</p>
                <img src="${album.artworkUrl60}"></img>
            </li>
        `;
        })
        .join('');
    albumList.innerHTML = htmlString;

};



// function test_Access_Nested_Obj(){
// const a = {b:1,c:{d:[2,1]}}
// console.log(a.c)
// console.log(a.c.d[0])}
// test_Access_array_in_Nested_Obj()pp
