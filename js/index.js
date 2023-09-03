const handleCategory = async () => {
const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
const data = await response.json();
const tabContainer = document.getElementById('tab-container');

data.data.forEach((category) =>{
    const div = document.createElement('div');
    div.innerHTML = ` <a onclick = "handleNodeBlogs('${category.category_id}')" class="tab">${category.category}</a> 
    `;
    tabContainer.appendChild(div)
});

// console.log(data.data);
};

const handleNodeBlogs = async (categoryId) => {
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";
    const data = await response.json();
    const trimedData = data.data;
    if(trimedData.length === 0){
        const noData = document.getElementById('no-data');
        noData.classList.remove('hidden')
    }
    else{
        const noData = document.getElementById('no-data');
        noData.classList.add('hidden')
    }
    console.log(trimedData);
    const imgIcon = ' <img class="h-6 w-6 img" src="./blue.jpg" alt="">'
    
    trimedData.forEach((videos)=> {
        // console.log(videos);
let time = videos.others.posted_date; 
let hours = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);

let formattedTime = `${hours} hrs and ${minutes} min ago`;

console.log(videos.others.posted_date)

console.log(formattedTime)
 const div = document.createElement("div")
        div.innerHTML= `  
        <div class="card card-compact  bg-base-100 shadow-xl h-[370px]">
        <img class="h-52" src=${videos.thumbnail} alt="">
                    <div class="card-body">
                   <div class="flex flex-row gap-3">
                    <img class="profile_image" src= ${videos.authors[0].profile_picture} alt="">
                    <div>
                    <h4 class=" card-title font-bold">${videos.title} alt</h4>
                        <div class="flex flex-row">
                            <h2 class="text-gray-400">${videos.authors[0].profile_name}</h2>
                            
                           ${videos.authors[0].verified === true? imgIcon : ''}
                        </div>
                        
                        <p class="text-gray-400">${videos.others.views} </p>
                        <p class=" position absolute -mt-[120px] ml-56 text-gray-400 bg-black"> ${ videos.others.posted_date  ? formattedTime : '' } </p>
                        </div>
                   </div> 
                  </div>
        
</div>`;
        cardContainer.appendChild(div);
    });


    // console.log(data.data)
};
const blogsButton = document.getElementById('blogs-button');
const blogsDiv = document.getElementById('blogs-div');
blogsButton.addEventListener("click",function(){
    window.location.href = "blogs.html";
});

handleCategory();
handleNodeBlogs("1000")