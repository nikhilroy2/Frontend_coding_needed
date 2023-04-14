// Play sound on keydown in text/tel/email fields
document.querySelectorAll("input[type='text'], input[type='tel'], input[type='email']").forEach(function (field) {
    field.addEventListener("keydown", function () {
        var audio = new Audio("../media/sound_effect.mp3");
        audio.play();
    });
});

// Play sound on salary < $20k selection
document.getElementById("salary1").addEventListener("change", function () {
    var audio = new Audio("../media/sound_effect.mp3");
    audio.play();
});

// Change image source on mouseover, restore on mouseout for interested in checkboxes
const images = document.querySelectorAll('.image');

// Set data-hover-src attribute for each image tag
document.querySelector('[for=studio] .image').setAttribute('data-hover-src', 'https://img.freepik.com/free-vector/student-bedroom-dormitory-with-bunk-bed-desk-chair_88138-1025.jpg?w=1480&t=st=1681411255~exp=1681411855~hmac=6e1bdc263b114547f9103cc79c51037c7ae8b239abc9fde850f9eaedf4fff17a');
document.querySelector('[for=one-bedroom] .image').setAttribute('data-hover-src', 'https://img.freepik.com/free-vector/student-bedroom-dormitory-with-bunk-bed-desk-chair_88138-1025.jpg?w=1480&t=st=1681411255~exp=1681411855~hmac=6e1bdc263b114547f9103cc79c51037c7ae8b239abc9fde850f9eaedf4fff17a');
document.querySelector('[for=two-bedroom] .image').setAttribute('data-hover-src', 'https://img.freepik.com/free-vector/student-bedroom-dormitory-with-bunk-bed-desk-chair_88138-1025.jpg?w=1480&t=st=1681411255~exp=1681411855~hmac=6e1bdc263b114547f9103cc79c51037c7ae8b239abc9fde850f9eaedf4fff17a');


images.forEach(image => {
    const originalSrc = image.src;
    const hoverSrc = image.getAttribute('data-hover-src');
    image.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    image.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });
});



// Highlight label on focus, remove highlight on blur for text/tel/email fields
document.querySelectorAll("input[type='text'], input[type='tel'], input[type='email']").forEach(function (field) {
    var label = document.querySelector("label[for='" + field.id + "']");
    field.addEventListener("focus", function () {
        label.classList.add("highlight");
    });
    field.addEventListener("blur", function () {
        label.classList.remove("highlight");
    });
});

// Prevent default submit functionality and display form data in alert pop-up
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var employer = document.getElementById("employer").value;
    var salary = document.querySelector("input[name='salary']:checked").value;
    var interested = [];
    document.querySelectorAll("input[name='interested']:checked").forEach(function (checkbox) {
        interested.push(checkbox.value);
    });
    var data = "Name: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nCurrent Employer: " + employer + "\nSalary: " + salary + "\nInterested in: " + interested.join(", ");
    alert(data);
});
