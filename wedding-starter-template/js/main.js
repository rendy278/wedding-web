simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 12, // required
  day: 9, // required
  hours: 7, // Default is 0 [0-23] integer
  minutes: 50, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});
window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("window-scrool", window.scrollY > 80);
});
function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}
$(window).on("load", () => {
  let slideindex = $(".slide.active").index();
  const slideLen = $(".slide").length;
  function slideShow() {
    $(".slide").removeClass("active").eq(slideindex).addClass("active");
    if (slideindex == slideLen - 1) {
      slideindex = 0;
    } else {
      slideindex++;
    }
  }
  setInterval(slideShow, 3000);
});

$(document).ready(() => {
  $(".toogle").click(function () {
    // Toggle tampilan navbar
    $(".header .nav ul").slideToggle();
  });
  peopleFilter($(".filter-btn.active").attr("data-target"));
  $(".filter-btn").click(function () {
    if (!$(this).hasClass("active")) {
      peopleFilter($(this).attr("data-target"));
    }
  });
  function peopleFilter(target) {
    $(".filter-btn").removeClass("active");
    $('.filter-btn[data-target="' + target + '"]').addClass("active");
    $(".people-item").hide();
    $('.people-item[data-category="' + target + '"]').fadeIn();
  }
  $(document).ready(() => {
    $(".gallery-popup .gp-img").css("max-height", "500px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    // Fungsi untuk menampilkan gambar pada popup
    function displayImage(index) {
      const largeImageSrc = $(".gallery-item")
        .eq(index)
        .find("img")
        .attr("data-large");
      $(".gallery-popup .gp-img").attr("src", largeImageSrc);
      $(".gp-counter").text(`${index + 1}/${totalGalleryItems}`);
    }

    // Saat gallery-item di-klik
    $(".gallery-item").click(function () {
      itemIndex = $(this).index();
      $(".gallery-popup").addClass("open");
      displayImage(itemIndex);
    });

    // Saat tombol close di-klik
    $(".gp-close").click(function () {
      $(".gallery-popup").removeClass("open");
    });

    // Saat tombol prev di-klik
    $(".prev").click(function () {
      if (itemIndex > 0) {
        itemIndex--;
        displayImage(itemIndex);
      }
    });

    // Saat tombol next di-klik
    $(".next").click(function () {
      if (itemIndex < totalGalleryItems - 1) {
        itemIndex++;
        displayImage(itemIndex);
      }
    });
  });
  var currentYear = new Date().getFullYear();

  // Menetapkan tahun saat ini ke dalam elemen dengan id "currentYear"
  $("#currentYear").text(currentYear);
});
