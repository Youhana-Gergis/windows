let lis = document.querySelectorAll("ul li")
lis.forEach((li) => {
    li.addEventListener("click" ,(e) => {
        console.log(e.currentTarget.dataset.color)
    })
});
$(document).ready(function(){
    $('#fit').click(function(){
        $('.colors').fadeIn();
    });
});