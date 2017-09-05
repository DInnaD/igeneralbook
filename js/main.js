// Listen for form submit
document.getElementById('form').addEventListener('submit', saveBookmark);

//Generate id
let id = generate_id(){
let bookmark = {};

     bookmark.name: siteName,
     bookmark.url: siteUrl,
     bookmark.id: id
     for
     
  }
// Save Bookmark

let form = document.getElementById('form')
form.getElementsByClassName('name')
[input#siteName.form-control.name, siteName: input#siteName.form-control.name, name: input#siteName.form-control.name]
form.getElementsByClassName('name')[0].value
""
form.getElementsByClassName('name')[0].value
"232321"



function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }
/*function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
  var siteUrl =document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)){
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }*/

  /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

   bookmarksResults.innerHTML += '<div class="well">' +
    '<h3>' + name + phone + '<div class="toggle">' + '<div class="content">' + email + url + '</div>' +
    ' <a class="toggler" class="btn btn-danger" href="#">More</a> ' + '</div>' +
    ' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
    ' <a onclick="editBookmark(\'' + name + phone + email + url + '\')" target="_blank" class="btn btn-danger" href="#">Edite</a> ' +
    ' <a onclick="deleteBookmark(\'' + phone + email + url + '\')" class="btn btn-danger" href="#">Delete</a> ' +
    '</h3>' +
    '</div>';
  }
}
function search() {
    var input, a, i, div, filter;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementById('bookmarksResults');
    
    for(i=0; i<div.length; i++){
        a = div[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            div[i].style.display = "";
        }
        else{
            div[i].style.display = "none";
        }
    }
}
/*function getOne() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var div = document.createElement("div");
        div.innerHTML = "<a href=\"#\">" + key + "</a>";
        document.getElementById("bookmarksResults").appendChild(div);

    }
}*/
// Validate Form
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}
