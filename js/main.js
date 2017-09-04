// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName =document.getElementById('siteName').value;
 var sitePhone =document.getElementById('sitePhone').value;
  var siteEmail =document.getElementById('siteEmail').value;
 var siteUrl =document.getElementById('siteUrl').value;
  
    if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  
  var bookmark = {
    name: siteName,
    phone: sitePhone,
    email: siteEmail,
    url: siteUrl
  }
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
// EDIT Bookmark
function editBookmark(e, phone, email, url){
   // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === !null){
    // Init array
    var bookmarks = [];
    
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
//del
// Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].phone == phone || bookmarks[i].email == email || bookmarks[i].url == url){
      // Remove from array
      bookmarks.splice(i, 1);
    }
 // Re-set back to localStorage
 // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   
  // Get form values
  var siteName1 =document.getElementById('siteName1').value;
  var sitePhone1 =document.getElementById('sitePhone1').value;
  var siteEmail1 =document.getElementById('siteEmail1').value;
  var siteUrl1 =document.getElementById('siteUrl1').value;
  /*if(!validateForm(siteName, sitePhone, siteEmail, siteUrl)){
    return false;
  }*/
  var bookmark = {
    name: siteName1,
    phone: sitePhone1,
    email: siteEmail1,
    url: siteUrl1
  }
/* 
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */
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
function deleteBookmark(phone, email, url){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop throught bookmarks
  for(var i =0;i < bookmarks.length;i++){
    if(bookmarks[i].phone == phone || bookmarks[i].email == email || bookmarks[i].url == url){
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
  for(let i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var phone = bookmarks[i].phone;
  
    var email = bookmarks[i].email;
    var url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+ phone+                                   
                                  ' <a id="toggler" target="_blank" href="'++'" href="#">More</a> ' +
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="editBookmark(\''+name+phone+email+url+'\')" target="_blank" class="btn btn-danger" href="#">Edite</a> ' +
                                  ' <a onclick="deleteBookmark(\''+phone+email+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
                              
  }
}
function search() {
    var input, a, i, div, ul, li, filter;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    div = document.getElementById('bookmarksResults');
    ul = document.getElementById('ul');
    li = div.ul.getElementsByTagName('li');
    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}
// Validate Form
function validateForm(siteName, sitePhone, siteEmail, siteUrl){
  if(!siteName || !sitePhone ||!siteEmail || !siteUrl){
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
