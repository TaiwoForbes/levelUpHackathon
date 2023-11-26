const bell = document.getElementById('bell')
const modal = document.getElementById('modal')



bell.addEventListener('click', function () {
    modal.classList.toggle('show-links');
});

window.addEventListener('click', function (e) {
    if (!modal.contains(e.target) && !bell.contains(e.target)) {
        modal.classList.remove('show-links');
    }
});


/* User modal */

const user = document.getElementById('user')
const modal2 = document.getElementById('modal-2')

user.addEventListener('click', function () {
    modal2.classList.toggle('show-modal2');
});

window.addEventListener('click', function (e) {
    if (!modal2.contains(e.target) && !user.contains(e.target)) {
        modal2.classList.remove('show-modal2');
    }
});

/* Pricing */
const pricingBtn = document.getElementById('pricing-btn')
const pricing = document.getElementById('pricing')

pricingBtn.addEventListener('click',function(){
    pricing.classList.add('remove-pricing')
})

/* SetUp */
const arrowBtn = document.getElementById('setup-icon')
const itemsContainer = document.getElementById('items-container')


arrowBtn.addEventListener('click',function(){
    if(itemsContainer.classList.contains('hide-container')){
        
        itemsContainer.classList.remove('hide-container')
        arrowBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
    </svg>
    `
    }
    else{
        itemsContainer.classList.add('hide-container')
        arrowBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
        </svg>`
    }
})