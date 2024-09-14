let inp=document.getElementById("inp");
let btn=document.getElementById("btn");

// // btn.addEventListener('click', showData)
// async function getproduct()

// {
//         let movies=await fetch("https://www.omdbapi.com/?s=don&apikey=db59cec3");
//         movies=await movies.json()
//         // console.log(product); 
//         let movie=document.getElementById("main")
//         movies.Search.map((mv)=>
//         {
//         return movie.innerHTML+=
//             `<div class="cards">
//                 <h3>${mv.Title}</h3>
//                 <br>
//                 <img src="${mv.Poster}" alt="">
//                 <br><h4>${mv.Year}</h4>
//             </div>`
//         })
// }
// getproduct()


async function showData(){
    let movies=await fetch(`https://www.omdbapi.com/?s=${inp.value}&apikey=db59cec3`);
        movies=await movies.json()
        let movie=document.getElementById("main")
        // console.log(movies.Search);
        try {
                movie.innerHTML="";
                movies.Search.map((mv)=>
                    {
                    return movie.innerHTML+=
                        `<div class="cards">
                            <h3>${mv.Title}</h3>
                            <img src="${mv.Poster}" alt="">
                            <h4>${mv.Year}</h4>
                        </div>`
                    })

            // console.log("hi");
        } 
        catch (error) {
            movie.innerHTML = error.message
        }
}