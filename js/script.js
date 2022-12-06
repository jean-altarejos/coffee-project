//contact us form validator
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");

const contactForm = document.querySelector(".contactForm");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const msgValue = msg.value.trim();

    if(fullNameValue === ''){
        //show error
        //add error class
        setErrorFor(fullName, 'Name cannot be blank');
    } else {
        setSuccessFor(fullName);
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (msgValue === ''){
        setErrorFor(msg, 'Message box cannot be blank');
    } else {
        setSuccessFor(msg);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}


//Google Map API
function initMap(){
    var options = {
      zoom: 8,
      center: {lat: 37.5665, lng: 126.9780},
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    //Array of Markers

    var markers = [
        {
            coords: {lat: 37.5665, lng: 126.9780},
            content: '<h1>Seoul, South Korea</h1>'
        },
        {
            coords:{lat: 37.4563, lng: 126.7052},
            content: '<h1>Incheon, South Korea</h1>'
        },
        {
            coords:{lat: 37.6584, lng: 126.8320},
            content: '<h1>Goyang, South Korea</h1>'
        }
    ];

    //loop through markers
    for(var i = 0; i < markers.length; i++){
        addMarker(markers[i]);
    }

    function addMarker(props){
        var marker = new google.maps.Marker({
        position: props.coords,
        map:map,
        });

        //Check Content
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
          });
      
          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
    }
}