var searchInput = $('.menu__search-input')
var searchButton = $('.menu__search-submit')
var removeImagesButton = $('.menu__remove-button')
var sGrid = $('.s-grid')

$(function () {
  $(removeImagesButton).click(function () {
    $('.s-grid').empty()
  })
})

$(function () {
  $(searchButton).click(function () {
    var searchValue = searchInput.val()
    $.get('https://api.giphy.com/v1/gifs/search', {
      q: searchValue,
      rating: 'g',
      api_key: 'GEPfdWxRIh6AMZeIDP1p14PQcZHZPqZB'
    }).then(function (response) {
      var totalResults = response.data.length
      var randomIndx = Math.floor(Math.random() * totalResults)
      if (totalResults) {
        gifUrl = response.data[randomIndx].images.original.url
        var grid = $('.s-grid') 
        var newBox = $('<div>', { class: 'grid__box' })
        var newGif = $('<img>', { src: gifUrl, class: 'box__img' })
      }
      newBox.append(newGif)
      sGrid.append(newBox)
    })
    searchInput.val('')
  })
})
