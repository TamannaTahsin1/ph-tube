const handleCategory = async () =>{
   const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
   const data = await res.json();
   const categories = data.data;
   console.log(categories);

   const btnContainer = document.getElementById('btn-container');
   categories.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML =
    `<button class="btn hover:bg-red-700">${category.category}</button>`;
    btnContainer.appendChild(div)
   });
}
handleCategory()