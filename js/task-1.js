const list = document.getElementsByClassName('item');



console.log(`Number of categories ${list.length}`)


const titles = document.querySelectorAll('h2');





titles.forEach((title) => {

    const categoryName = title.textContent;

    console.log(categoryName);

    const categoriesLength = title.parentElement.querySelectorAll("ul > li").length;


    console.log(categoriesLength);
})

















