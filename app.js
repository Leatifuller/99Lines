const button = document.querySelector('button');
button.addEventListener('click', function() {
     let friendsArr = ["Tia", "Larry", "Dea", "Love", "Destiny"];
   
    for (let i=0; i<friendsArr.length; i++) {
        let friendDiv=document.createElement('div');
        friendDiv.className='friend';
       
        let friendH4=document.createElement('h4');
        friendH4.innerText=friendsArr[i].toUpperCase();
        friendDiv.appendChild(friendH4);
        
        for (let j=99; j>0; j--) {
            let paragraph =document.createElement('p');
        
       if (j==2){
       paragraph.innerText= j + " lines of code in the file, " + j + " lines of code; " + friendsArr[i] + " strikes one out, clears it all out, 1 line of code in the file";

        } else if (j==1) {
        paragraph.innerText= j + " line of code in the file, " + j + " line of code; " + friendsArr[i] + " strikes one out, clears it all out, no more lines of code in the file";

        }else {
        paragraph.innerText= j + " lines of code in the file, " + j + " lines of code; " + friendsArr[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file";

        }
friendDiv.appendChild(paragraph);
    }
    document.body.appendChild(friendDiv);
    }
});