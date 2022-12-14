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
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    prevArrow: $(".prev-slide3"),
    nextArrow: $(".next-slide3"),
    autoplay: true,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  $.ajax({
    url: "./gallery_grid",
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpg|jpe?g|png|gif)$/)) {
            let div = document.createElement("div");
            div.className = `card span-3 c-5`;
            div.style = `background-image: url(./${val})`;
            grid.append(div);
          }
        });
    },
  });
});

var map = L.map("map").setView([-6.087700843811035, 39.24043273925781], 16);

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var polygon = L.polygon([
  [-6.0869, 39.239],
  [-6.086767320046641, 39.24113007429308],
  [-6.088132867316903, 39.24132319332665],
  [-6.088452916956269, 39.239692410376506],
])
  .addTo(map)
  .bindPopup("We're here!");

let grid = document.querySelector("#grid");

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
