     document.addEventListener("DOMContentLoaded", start);

     let filter = "alle";
     let farve = 0;
     let form = 0;

     function start() {
         console.log("hej");
         document.querySelector("#ny_farve").addEventListener("click", newColor);

         document.querySelector("#ny_form").addEventListener("click", newShape);

     }
     // document.querySelector("#farve_tilbage").addEventListener("click", farve2);

     function newColor() {
         farve++;
         console.log(farve);
         color();
     }

     function prevColor() {
         farve--;
         console.log(farve);
         color();
     }


     function color() {
         if (farve == 0) {
             console.log("farve1");
             document.querySelector("#farve_tilbage").removeEventListener("click", prevColor);
             document.querySelector("#sticker").classList.add("farve1");
             document.querySelector("#sticker").classList.remove("farve2");
         } else if (farve == 1) {
             document.querySelector("#farve_tilbage").addEventListener("click", prevColor);
             document.querySelector("#sticker").classList.remove("farve1");
             document.querySelector("#sticker").classList.add("farve2");
             document.querySelector("#sticker").classList.remove("farve3");
             document.querySelector("#ny_farve").addEventListener("click", newColor);
         } else if (farve == 2) {
             document.querySelector("#sticker").classList.remove("farve2");
             document.querySelector("#sticker").classList.add("farve3");
             document.querySelector("#ny_farve").removeEventListener("click", newColor);
         }
     }



     function newShape() {
         form++;
         console.log(form);
         shape();

     }


     function prevShape() {
         form--;
         console.log(form);
         shape();

     }

     function shape() {
         if (form == 0) {
             document.querySelector("#prev_form").removeEventListener("click", prevShape);
             document.querySelector("#sticker").classList.add("form1");
             document.querySelector("#sticker").classList.remove("form2");
         } else if (form == 1) {
             console.log("form1");
             document.querySelector("#prev_form").addEventListener("click", prevShape);
             document.querySelector("#sticker").classList.remove("form1");
             document.querySelector("#sticker").classList.add("form2");
             document.querySelector("#sticker").classList.remove("form3")
             document.querySelector("#ny_form").addEventListener("click", newShape);

         } else if (form == 2) {
             console.log("form1");

             document.querySelector("#sticker").classList.remove("form2");
             document.querySelector("#sticker").classList.add("form3");
             document.querySelector("#ny_form").removeEventListener("click", newShape);

         }
     }



     //
     //
     //
     //     function farve2() {
     //         document.querySelector("#sticker").classList.remove("farve2");
     //         document.querySelector("#sticker").classList.add("farve1");
     //         start();
     //     }
     //
     //
     //     function farve3() {
     //         document.querySelector("#sticker").removeAttribute("class");
     //
     //         document.querySelector("#sticker").classList.remove("farve2");
     //         document.querySelector("#sticker").classList.add("farve3");
     //     }
