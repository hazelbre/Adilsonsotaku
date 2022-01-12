const productImages = document.querySelectorAll(".product-images img");
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('checked');
        item.classList.add('checked');
        checkedBtn =i;
    })
})
