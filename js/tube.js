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

        trimmedData.forEach((news) =>{
            const div= document.createElement('div')
            div.innerHTML = 
            `<div class="card w-96 h-96 bg-base-100 shadow-xl m-5">
            <figure><img src="${news?.thumbnail}" alt="card" /></figure>
            <div class="card-body">
                <div class="card-footer flex mt-2 gap-2">
                    <div class="w-14 rounded-full">
                        <img src="${news.authors?.profile_picture}" />
                    </div>
                    <h2 class="card-title text-left">${news?.title}</h2>                      
                </div>
                <div class="ml-16">
                    <p>${news?.authors?.profile_name}</p>
                    <p>91k views</p>
                </div>
          </div>
    </div>`;
    cardContainer.appendChild(div);
        })
    }
handleCategory()