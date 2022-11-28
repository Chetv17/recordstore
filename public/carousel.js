// jQuery for SHOW page photo carousel

$(() => {

  let numberOfImages = $('.carouselImages').children().length - 1;
  let currentImg = 0;

  $('#previousbtn').on('click', () => {
        $('.carouselImages').children().eq(currentImg).css('display', 'none');
        if (currentImg > 0) {
          currentImg--
        } else {
          currentImg = numberOfImages;
        }
       $('.carouselImages').children().eq(currentImg).css('display', 'block');
    })

    $('#nextbtn').on('click', () => {
        $('.carouselImages').children().eq(currentImg).css('display', 'none');
        if (currentImg < numberOfImages) {
          currentImg++
        } else {
          currentImg = 0;
        }
       $('.carouselImages').children().eq(currentImg).css('display', 'block');
    })



});
