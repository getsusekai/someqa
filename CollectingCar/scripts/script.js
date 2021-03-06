const frontWheels = 249978006;
const backWheels = 249978003;
const bumper = 249978007;
const frontBody = 249978005;
const backBody = 249978004;

let div = document.createElement('div');
div.className = "wid"
function addCar() {
    div.innerHTML = `<img id="car" src="https://cdn1.radikalno.ru/uploads/2020/11/1/80fbe6890ea018b5d854cc342cc607aa-full.jpg" usemap="#carMap" alt="car">
    <map id="carMap" name="carMap">
        <area target="" alt="frontWheel" title="frontWheel" onclick="addProduct(frontWheels)" href="#" coords="175,222,215,235,245,262,256,301,248,338,223,369,179,383,142,372,113,344,98,306,105,267,125,245,146,229" shape="poly">
        <area target="" alt="backWheel" title="backWheel" onclick="addProduct(backWheels)" href="#" coords="543,225,588,240,614,277,617,313,605,348,583,367,554,379,514,374,484,354,464,321,467,285,477,251,507,230" shape="poly">
        <area target="" alt="bumper" title="bumper" onclick="addProduct(bumper)" href="#" coords="44,230,22,238,19,260,29,271,42,277" shape="poly">
        <area target="" alt="bumper" title="bumper" onclick="addProduct(bumper)" href="#" coords="46,279,99,279,97,321,65,323,35,317,25,299,29,285" shape="poly">
        <area target="" alt="bumper" title="bumper" onclick="addProduct(bumper)" href="#" coords="255,276,461,277,461,322,257,321" shape="poly">
        <area target="" alt="bumper" title="bumper" onclick="addProduct(bumper)" href="#" coords="623,279,681,276,696,291,694,306,679,320,649,321,621,321" shape="poly">
        <area target="" alt="bumper" title="bumper" onclick="addProduct(bumper)" href="#" coords="660,233,683,233,689,247,686,268,676,272,667,259" shape="poly">
        <area target="" alt="frontBody" title="frontBody" onclick="addProduct(frontBody)" href="#" coords="46,275,46,249,53,216,76,191,97,173,124,161,164,154,199,131,235,84,275,50,337,30,367,27,362,275,252,275,237,257,215,233,185,219,167,218,132,231,115,252,100,275" shape="poly">
        <area  target="" alt="backBody" title="backBody" onclick="addProduct(backBody)" href="#" coords="369,20,420,24,462,31,504,43,565,81,615,126,645,183,657,232,665,258,673,274,622,276,580,232,553,222,523,221,496,233,473,255,464,276,368,274" shape="poly">
    </map>`
    document.body.prepend(div);
}
addCar();

function addProduct (id) {
    Ecwid.Cart.addProduct(id)
}

Ecwid.OnCartChanged.add(function(){
    Ecwid.Cart.get(function(cart) {
        let ids = [];
        for (let item of cart.items) {
            ids += item.product.id
        }
        if (ids.includes(frontWheels) && ids.includes(backWheels) && ids.includes(bumper) && ids.includes(frontBody) && ids.includes(backBody)) {
            collectedCar()
        } else {
            addCar()
        }
    });
})

function collectedCar () {
    div.innerHTML = "<p>You have collected the car!</p>"
}
