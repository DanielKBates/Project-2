$("#searchBtn").on("click", function(event) {
    event.preventDefault
    var searchValue = $("#searchText").val().trim()
    console.log(searchValue)
    var symbol = searchValue.split(", ")
    console.log(symbol)
    console.log(symbol[1])
    window.location = "/quote/" + symbol[1]
})
