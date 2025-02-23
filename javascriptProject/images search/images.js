
const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("search-box");
const shresult=document.getElementById("serh-result");
const showMore=document.getElementById("more-btn");
const accessKey="ek_dTryQwGeLTgNwMG8Xg3e4uSfhLnJqG-97u86YDrc";
let keywords=" ";
let page = 1;
async function searchImages(){
    keywords = searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data =await response.json();
    if (page===1){
        shresult.innerHTML ="";
    }

    const result =data.results;

    result.map((result)=>{
        const image=document.createElement('img');
        image.src = result.urls.small;
        const links =document.createElement('a');
        links.href = result.links.html;
        links.target = "_blank";
        links.appendChild(image);
        shresult.appendChild(links);


    });
    showMore.style.display ="block";


};
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
});
showMore.addEventListener("click",(e)=>{
    page++;
    searchImages();});
