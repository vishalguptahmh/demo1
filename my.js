function myalert(message) {
    alert(message);
}

function scrolltoBottom(){
    scrollTo(0,document.body.scrollHeight);
}

function scrolltoService() {
    scrolltoID("ourServicesID")
}
function scrolltoProcess() {
    scrolltoID("ourProcessID")
}
function scrolltoID(id) {
    document.getElementById(id).scrollIntoView();
}