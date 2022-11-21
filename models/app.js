const express = require('express');

$(() => {

  let numberOfImages = $('.images').children().length - 1;
  let currentImg = 0;

  $('#previousbtn').on('click', () => {
        $('.images').children().eq(currentImg).css('display', 'none');
        if (currentImg > 0) {
          currentImg--
        } else {
          currentImg = numberOfImages;
        }
       $('.images').children().eq(currentImg).css('display', 'block');
    })

    $('#nextbtn').on('click', () => {
        $('.images').children().eq(currentImg).css('display', 'none');
        if (currentImg < numberOfImages) {
          currentImg++
        } else {
          currentImg = 0;
        }
       $('.images').children().eq(currentImg).css('display', 'block');
    })



});
