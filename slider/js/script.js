// Get slider items | Array.from
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'))
// console.table(sliderImages) check
// لازم نجيب عدد العناصر إلي جوا هذه المصفوفة 
var slidesCount = sliderImages.length

// بدنا نجيب أول صورة منشان نبدأ بالتنقل منها 
var currentSlide = 1
// slide Number Element 
var slideNumberElement = document.getElementById('slide-number')
// previous and Next Buttons
var nextButton = document.getElementById('next')
var prevButton = document.getElementById('prev')

// Handel click on Previous and Next Buttons
nextButton.addEventListener('click',nextSlide)
prevButton.addEventListener('click',prevSlide)

// Create The Main UL Element
var paginationElement = document.createElement('ul')
// set id on creates on element 
paginationElement.setAttribute('id','pagination-ul')

// create list items beased in slides count
for (let i=1 ; i<=slidesCount;i++){
    // create the li
    var paginationItem = document.createElement('li')
    // set custom Attribute 
    paginationItem.setAttribute('data-index',i)

    // Set item content
    paginationItem.appendChild(document.createTextNode(i))
    
    // append items to the main ul list
    paginationElement.appendChild(paginationItem)

}
// add the created ul Elemment to the page 
document.getElementById('indicators').appendChild(paginationElement)

//  Get the new created ul 
var paginationCreatedUL = document.getElementById('pagination-ul')

// Get pagination items | Array.from
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

// loop through All Bullets Items
for(var i=0 ; i<paginationsBullets.length;i++){
        paginationsBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'))
        theChecker()
    }
}

// trigger  the checker functoin 
theChecker()

// Next slide function
function nextSlide(){

    if(nextButton.classList.contains('disabled')){
        // Do Nothing
        return false
    }else{
        currentSlide++
        theChecker()
        console.log('next')
    }
}
// prev slide function
function prevSlide(){
    
    if(prevButton.classList.contains('disabled')){
        // Do Nothing
        return fasle
    }else{
        currentSlide--
        theChecker()
        console.log('prev')
    }
}
// create the checker function 
function theChecker(){

    // set the slide number
    slideNumberElement.textContent = 'Slide #'+(currentSlide)+ ' of '+(slidesCount)
    // remove all active classes of images
    removeAllActive()

    // set active on current slide 
    sliderImages[currentSlide -1].classList.add('active')

    // set active class on current pagination item 
    paginationCreatedUL.children[currentSlide -1].classList.add('active')
    

    //  check if current slide is the first 
    if(currentSlide == 1){

        // add disapled class on pervious button 
        prevButton.classList.add('disabled')

    }else{

        // remove disapled class from pervious button 
        prevButton.classList.remove('disabled')
    }

    //  check if current slide is the last
    if(currentSlide == slidesCount){

        // add disapled class on next button 
        nextButton.classList.add('disabled')

    }else{

        // remove disapled class from next button 
        nextButton.classList.remove('disabled')
    }
}

//  Remove all active classes from images and pagination bullets
function removeAllActive(){
    //  loop through images
    sliderImages.forEach(function (img){
        img.classList.remove('active')
    })

// loop through pagination bullets
paginationsBullets.forEach(function(bullet){
    bullet.classList.remove('active')
})
}