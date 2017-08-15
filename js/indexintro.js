/**
 * Created by mengruzhang on 7/10/17.
 */

function myFunction() {
    var imgArray = document.getElementsByTagName('img');
    for (var i = 0; i < imgArray.length; i++) {
        imgArray[i].addEventListener('mouseover', function () {
            this.classList.add('activated');
        });
    }
}
window.addEventListener('DOMContentLoaded', myFunction);

