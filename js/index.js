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

console.log(data.data);
};

const handleNodeBlogs = async (categoryId) => {
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const cardContainer = document.getElementById('card-container')
    const data = await response.json();
    data.data.forEach((videos)=> {
        console.log(videos);
 const div = document.createElement("div")
        div.innerHTML= `  
        <div class="card card-compact w-96 bg-base-100 shadow-xl h-[400px]">
        <img class="h-52" src=${videos.thumbnail} alt="">
                    <div class="card-body">
                   <div class="flex flex-row gap-3">
                    <img class="profile_image" src= ${videos.authors[0].profile_picture} alt="">
                    <div>
                        <div class="flex flex-row">
                            <h2 class="card-title font-bold">${videos.title}</h2>
                            
                            <img class="h-6 w-6" src=${videos.others.verified } alt="">
                        </div>
                        <h4 class="text-gray-400">${videos.authors[0].profile_name} alt</h4>
                        <p class="text-gray-400">${videos.others.views} </p>
                        <p class="text-gray-400 position-absolute ">${videos.others.posted_date} </p>
                        </div>
                   </div> 
                  </div>
        
</div>`;
        cardContainer.appendChild(div);
    });

   
    console.log(data.data)
};

handleCategory();