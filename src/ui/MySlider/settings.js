const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1205,
      settings: {
        slidesToShow: 4.1,
        infinite: false,
        swipeToSlide: true,
        speed: 500,
        dots: false,
      },
    },

    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3.8,
        infinite: false,
        centerMode: false,
        swipeToSlide: true,
        speed: 100,
        centerPadding: "60px",
        dots: false,
      },
    },

    {
      breakpoint: 714,
      settings: {
        slidesToShow: 4,
        infinite: true,
        swipeToSlide: true,
        slidesToScroll: 0,
        speed: 100,
        centerPadding: "60px",
        dots: false,
      },
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 3.2,
        initialSlide: 2,
        infinite: false,
        swipeToSlide: true,
        dots: false,
        speed: 100,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 546,
      settings: {
        slidesToShow: 2.7,
        infinite: false,
        swipeToSlide: true,
        dots: false,
        speed: 100,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 468,
      settings: {
        centerPadding: "60px",
        slidesToShow: 2.4,
        infinite: false,
        swipeToSlide: true,
        speed: 100,
        dots: false,
      },
    },
    {
      breakpoint: 432,
      settings: {
        centerPadding: "60px",
        slidesToShow: 2.3,
        infinite: false,
        swipeToSlide: true,
        speed: 100,
        dots: false,
      },
    },
    {
      breakpoint: 353,
      settings: {
        slidesToShow: 2.1,
        infinite: false,
        swipeToSlide: true,
        speed: 100,
        centerPadding: "60px",
        dots: false,
      },
    },

    {
      breakpoint: 321,
      settings: {
        slidesToShow: 2,
        infinite: false,
        swipeToSlide: true,
        speed: 100,
        centerPadding: "60px",
        dots: false,
      },
    },

    {
      breakpoint: 305,
      settings: {
        slidesToShow: 1.5,
        infinite: false,
        swipeToSlide: true,
        speed: 100,
        centerPadding: "60px",
        dots: false,
      },
    },
  ],
};

export default settings;
