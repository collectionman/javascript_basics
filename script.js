//  Change the text of header when  is clicked.
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!') ;
}
//

// Switched beetwen two images when clicked.  
var currentImage = document.querySelector( 'img' ) ;
currentImage.onclick = function() {
    var source = currentImage.getAttribute( 'src' ) 
    if ( source === 'images/image1.jpg' ) {
        currentImage.setAttribute( 'src', 'images/image2.jpg' ) ;
        currentImage.setAttribute( 'alt', 'image2' ) ;
    } else {
        currentImage.setAttribute( 'src', 'images/image1.jpg' ) ;
        currentImage.setAttribute( 'alt', 'image1' ) ;
    }
}
//


// Showing a prompt message on the browser, then the user
// enter his name and the 'localStorage' from WebStorage API object
// save it by the 'name' key.
var button = document.querySelector('button') ;
var pharagraph = document.querySelector('p') ;

function setUserName() {
    var userName = prompt('Please enter your name.') ;
    localStorage.setItem('name', userName) ; // We use localStorage's setItem() function to create and store a data item called 'name'
    pharagraph.textContent = 'Mozilla is cool, ' + userName ;
}

if( !localStorage.getItem( 'name' ) ) {
    setUserName() ;
} else {
    var storedName = localStorage.getItem( 'name' ) ; 
    pharagraph.textContent = 'Mozilla is cool, ' + storedName ;
}

button.onclick = function() {
    setUserName() ; // executed when the button is clicked
}
//
//
//
