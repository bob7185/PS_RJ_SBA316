// caching one elemnt by ID 
const info_form = document.getElementById('feedback_form');
console.log(info_form);


//  caching elements using query selector all 
const labels = document.body.querySelectorAll('label');


// requirement iterating over a collection of element
for (let label of labels)
{
    label.style.color = 'white'
    label.style.cursor ='pointer';

}

//1st event listener

info_form.addEventListener('submit', e=> {
    e.preventDefault();

})