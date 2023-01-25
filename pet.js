

        let petImg = document.getElementById("imgClickAndChange");
        let intervalId;
        intervalId = setTimeout(() => {
            document.getElementById("imgClickAndChange").src = "saddog1.png";
            clearInterval(intervalId);
        }, 300000);
        var username;
        var count = 0;
        // function c(){
        //     count=count+1;
        //     console.log(count);
        // }
        petImg.addEventListener("click", function () {
            count++;
            if (count == 1) {
                changeImage();
            }
            if (count > 1) {
                DisplayName(username);
            }
        });

        

        function changeImage() {
            event.preventDefault();

            username = prompt("What is your name?");
            var x = document.getElementById("hi1");
            x.style.display = "none";
            document.getElementById("name").innerHTML = username;
            var y = document.getElementById("hi2");
            y.style.display = "block";
            document.getElementById("imgClickAndChange").src = "happydog.png";
            // onclick="DisplayName(username)";

        }
        function DisplayName(username) {
            document.getElementById("name2").innerHTML = username;
            var x = document.getElementById("hi1");
            x.style.display = "none";
            var x1 = document.getElementById("hi2");
            x1.style.display = "none";
            var x2 = document.getElementById("hi3");
            x2.style.display = "block";
            var x3 = document.getElementById("payment");
            x3.style.display = "block";
            let x4= document.getElementById("imgClickAndChange");
            x4.style.display = "none";
        }

        var form = document.querySelector("form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let cakeDonuts = document.getElementById("cake-donuts").value;
            let bakedDonuts = document.getElementById("baked-donuts").value;
            if (cakeDonuts.toLowerCase() == 'dozen') {
                cakeDonuts = 12;
            }
            if (bakedDonuts.toLowerCase() == 'dozen') {
                bakedDonuts = 12;
            }
            if (isNaN(cakeDonuts)) {
                alert("Enter valid number of cake donuts or 'dozen'");
                return;
            }
            if (isNaN(bakedDonuts)) {
                alert("Enter valid number of baked donuts or 'dozen'");
                return;
            }
            cakeDonuts = parseInt(cakeDonuts);
            bakedDonuts = parseInt(bakedDonuts);
            let minutes = cakeDonuts * 0.5 + bakedDonuts * 0.4;
            let subtotal = (cakeDonuts * 50) + (bakedDonuts * 30);
            let tax = subtotal * 0.185;
            let total = subtotal + tax;
            document.getElementById("minutes").value =minutes;
            document.getElementById("subtotal").value = subtotal;
            document.getElementById("tax").value = tax;
            document.getElementById("total").value = total;
        });

        function next() {
            window.location.href = "thanks.html";
        }

