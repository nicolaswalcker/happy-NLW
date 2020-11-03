//create map
const map = L.map("mapid").setView([-18.692581,-40.403741], 15);

//create tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// upload de fotos

function addPhotoField() {
  // pegar o container de fotos #id=images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se o campo está vazio, se sim não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar novo container de imagens
  newFieldContainer.children[0].value = "";

  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

// seleção do botao sim e não

function toggleSelect(event) {
  // retirar a classe .active
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });
  // colocar a classe .active

  const button = event.currentTarget;
  button.classList.add("active");

  // atualizar input hidden com o valor selecionado

  const input = document.querySelector('[name="open_on_weekends"]');

  // verificar se sim ou nao

  input.value = button.dataset.value;
}
//validar se o mapa foi marcado
function validate(event){
  input = document.querySelector('[name="lng"]').value;
  if (input == ""){
    event.preventDefault();
    alert("Você deve selecionar um ponto no mapa");
    } else {
      return;
    }
}



