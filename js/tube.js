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
    const handleLoadContent = (categoryId) => {
        console.log(categoryId);
    }
handleCategory()