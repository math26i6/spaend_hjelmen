     document.addEventListener("DOMContentLoaded", start);

     let filter = "alle";
     let farve = 0;
     let form = 0;
     let texture = 0;

     function start() {
         console.log("hej");
         document.querySelector("#ny_farve").addEventListener("click", newColor);

         document.querySelector("#ny_form").addEventListener("click", newShape);

         document.querySelector("#ny_texture").addEventListener("click", newTexture);

     }




     function openNav() {
         document.getElementById("header").style.width = "250px";
         document.getElementById("container").style.marginLeft = "250px";
     }

     function closeNav() {
         document.getElementById("header").style.width = "0";
         document.getElementById("container").style.marginLeft = "0";
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
             console.log("farve=" + farve);
             document.querySelector("#farve_tilbage").removeEventListener("click", prevColor);
             document.querySelector("#sticker").classList.add("farve1");
             document.querySelector("#sticker").classList.remove("farve2");
         } else if (farve == 1) {
             console.log("farve=" + farve);
             document.querySelector("#farve_tilbage").addEventListener("click", prevColor);
             document.querySelector("#sticker").classList.remove("farve1");
             document.querySelector("#sticker").classList.add("farve2");
             document.querySelector("#sticker").classList.remove("farve3");
             document.querySelector("#ny_farve").addEventListener("click", newColor);
         } else if (farve == 2) {
             console.log("farve=" + farve);
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
         if (form == 1) {
             console.log("baggrundsfarve=" + form);
             document.querySelector("#prev_form").removeEventListener("click", prevShape);
             document.querySelector("#sticker").classList.add("cykelfarve1");
             document.querySelector("#sticker").classList.remove("cykelfarve2");

         } else if (form == 2) {
             console.log("baggrundsfarve=" + form);
             document.querySelector("#prev_form").addEventListener("click", prevShape);
             document.querySelector("#sticker").classList.remove("cykelfarve1");
             document.querySelector("#sticker").classList.add("cykelfarve2");
             document.querySelector("#sticker").classList.remove("cykelfarve3")
             document.querySelector("#ny_form").addEventListener("click", newShape);

         } else if (form == 3) {
             console.log("baggrundsfarve=" + form);

             document.querySelector("#sticker").classList.remove("cykelfarve2");
             document.querySelector("#sticker").classList.add("cykelfarve3");
             document.querySelector("#ny_form").removeEventListener("click", newShape);

         }
     }



     function newTexture() {
         texture++;
         console.log(texture);
         theTexture();

     }

     function prevTexture() {
         texture--;
         console.log(texture);
         theTexture();

     }


     function theTexture() {
         if (texture == 1) {
             console.log("mønster=" +
                 texture);
             document.querySelector("#ny_texture").addEventListener("click", newTexture);

             document.querySelector("#sticker").classList.add("tierfarve1");
             document.querySelector("#sticker").classList.remove("cykelfarve1");
             document.querySelector("#sticker").classList.remove("cykelfarve2");
             document.querySelector("#sticker").classList.remove("cykelfarve3");
             document.querySelector("#prev_texture").removeEventListener("click", prevTexture);
         } else if (texture == 2) {
             console.log("mønster=" +
                 texture);
             document.querySelector("#prev_texture").addEventListener("click", prevTexture);
             document.querySelector("#sticker").classList.add("cykelfarve1");
             document.querySelector("#sticker").classList.remove("tierfarve1");
             document.querySelector("#sticker").classList.remove("tierfarve2");
             document.querySelector("#sticker").classList.remove("tierfarve3");
             document.querySelector("#ny_texture").removeEventListener("click", newTexture);

             document.querySelector("#ny_texture").removeEventListener("click", newTexture);

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
