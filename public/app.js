$(document).ready(function () {
  $(".carousel-mobile1").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    prevArrow: $(".prev-slide"),
    nextArrow: $(".next-slide"),
  });
  window.onresize = function () {
    $(".carousel-mobile1").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      prevArrow: $(".prev-slide"),
      nextArrow: $(".next-slide"),
    });
  };
  $(".carousel1").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
  $(".carousel-mobile2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    prevArrow: $(".prev-slide2"),
    nextArrow: $(".next-slide2"),
  });
  $(".carousel2").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    autoplay: true,
    autoplaySpeed: 6000,
  });
  $(".carousel-reviews").slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  });
});

//leeflet script

var map = L.map("map").setView([-6.087700843811035, 39.24043273925781], 16);

// let timer = setInterval(() => {
//   for (let i = 0; i <= 12; i++) {
//     setTimeout(() => {
//       map.setZoom(5 + i);
//     }, 400 * i);
//   }
// }, 5000);

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// var marker = L.marker([-6.087700843811035, 39.24043273925781])
//   .addTo(map)
//   .bindPopup("Farm");
// .openPopup();

// var circle = L.circle([-6.0878, 39.241], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 300,
// })
//   .addTo(map)
//   .bindPopup("I am a circle.");

var polygon = L.polygon([
  // [-6.0869, 39.239],
  // [-6.0869, 39.2407],
  // [-6.0878, 39.2405],
  // [-6.0878, 39.2403],
  [-6.0869, 39.239],
  [-6.086767320046641, 39.24113007429308],
  [-6.088132867316903, 39.24132319332665],
  [-6.088452916956269, 39.239692410376506],
])
  .addTo(map)
  .bindPopup("We're here!");

// var popup = L.popup()
//   .setLatLng([51.513, -0.09])
//   .setContent("I am a standalone popup.")
//   .openOn(map);

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// }

//map.on("click", onMapClick);
// map.on("mouseover", () => {
//   clearInterval(timer);
// });

//grid

let grid = document.querySelector("#grid");

for (let i = 0; i < 158; i++) {
  let div = document.createElement("div");
  div.className = `card span-${i % 3 || (i < 11 ? 3 : 1)} c-${i % 5 || 5}`;
  div.style = `background-image: url(./gallery_grid/img${i}.jpg)`;
  grid.append(div);
}

function expand() {
  if (btn.innerHTML == "Click to see more exciting photos!") {
    grid.style.maxHeight = "initial";
    btn.innerHTML = "Hide";
  } else {
    grid.style.maxHeight = "1200px";
    btn.innerHTML = "Click to see more exciting photos!";
  }
}

let btn = document.querySelector("#expand");
btn.addEventListener("click", expand);
