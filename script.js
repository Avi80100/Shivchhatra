function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    }

// Slide Show code

var images = ["i19.jpg", "i23.jpg", "i22.jpg", "i4.jpg",];
var imgindex = 0;

function setImageSize(){
    var img = document.getElementById("img");
    if(!img) return;

    var screenWidth = window.innerWidth;

    if(screenWidth > 768){
        // PC view
        img.style.width = "100%";
        img.style.height = "350px";   // PC वर लांब
        img.style.objectFit = "cover";
    }else{
        // Mobile view
        img.style.width = "100%";
        img.style.height = "350px";   // Mobile वर barobar
        img.style.objectFit = "cover";
    }
}

function startfun(){
    var img = document.getElementById("img");
    if(!img) return;

    img.src = images[imgindex];
    imgindex++;

    if(imgindex >= images.length){
        imgindex = 0;
    }
}

window.addEventListener("load", function(){
    setImageSize();     // size set
    startfun();         // first image
    setInterval(startfun, 1800);
});

window.addEventListener("resize", setImageSize); // orientation change support


















 function buyNow(event) {
            let product = event.target.parentElement;
            let name = product.getAttribute("data-name");
            let price = product.getAttribute("data-price");

            document.getElementById("productName").textContent = name;
            document.getElementById("productPrice").textContent = price;

            document.getElementById("buyForm").style.display = "block";
        }

        function closeForm() {
            document.getElementById("buyForm").style.display = "none";
        }

        function submitOrder() {
            let name = document.getElementById("customerName").value;
            let address = document.getElementById("customerAddress").value;
            let phone = document.getElementById("customerPhone").value;

            if (name === "" || address === "" || phone === "") {
                alert("Please fill all the fields.");
                return;
            }

            alert(`Thank you, ${name}! Your order has been placed.`);
            closeForm();
        }


        // Marathi English Switch Button
        

        