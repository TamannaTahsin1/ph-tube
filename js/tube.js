const handleCategory = async () =>{
   const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
   const data = await res.json();
   const categories = data.data;
   console.log(categories);
    // for buttons
   const btnContainer = document.getElementById('btn-container');
   categories.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML =
    `<button onclick="handleLoadContent('${category.category_id}')" class="btn hover:bg-red-700">${category.category}</button>`;
    btnContainer.appendChild(div)
   });
}

    //adding content in card
    const handleLoadContent = async (categoryId) => {
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
        const data = await res.json();
        const trimmedData = data.data;

        const cardContainer = document.getElementById('card-container')
        cardContainer.innerHTML = "";
        trimmedData.forEach((news) =>{
            const div= document.createElement('div')
            div.innerHTML = 
            `<div class="card md:w-80 md:h-80 lg:w-96 lg:h-96 bg-base-100 shadow-xl m-5 ">
            <figure><img src="${news?.thumbnail}" alt="card" class="w-96"/>          
            <p class="absolute flex justify-center md:top-20 lg:top-44 lg:left-56 bg-gray-400 rounded-xl text-black text-xs w-28 font-semibold">${secondsToHour(news?.others?.posted_date)}</p>           
            </figure>
            <div class="card-body">
                <div class="card-footer flex mt-2 gap-4">
                    <div class="w-12 ">
                        <img src="${news?.authors[0].profile_picture}" class="rounded-full w-10 h-10" />
                    </div>
                    <h2 class="card-title text-left">${news?.title}</h2>                      
                </div>
                <div class="ml-16 flex">
                    <p>${news?.authors[0].profile_name}</p>
                    <p>${news.authors[0].verified ? '<img src="./img/var.svg" class="mr-28 ">' : " "}</p>                  
                </div>
                <p class="ml-16">${news?.others?.news}</p>
          </div>
    </div>`;
    cardContainer.appendChild(div);
        });
    }
        
    // sorting

handleCategory()
handleLoadContent(1000)

// function for time
const secondsToHour = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    let formattedTime = '';

    formattedTime += (hours > 0) ? hours + ' hrs ' : '';
    formattedTime += (minutes > 0) ? minutes + ' min ' : '';
    
    return formattedTime;
  }
  

