//Loading animation
window.addEventListener("load", () => {const load = document.querySelector(".load");

load.classList.add("load-hidden");

load.addEventListener("transitioned", () =>{ document.body.removeChild("load");
})
})

const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');




const down = downloadBtn.addEventListener('click',e=>{
    e.preventDefault();// Stops default settings
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
    console.log(fileInput.value);

});

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let fetchURL = URL.createObjectURL(file);//Creates a url of the file
        let tag = document.createElement('a');
        tag.href = fetchURL;
         tag.download = url.replace(/^.*[\\\/]/, '');
         document.body.appendChild(tag);
         console.log(fetchURL);
         tag.click();
         tag.remove();
         URL.revokeObjectURL(fetchURL);
        
    }).catch(()=>{
        alert('Failed to download');
      
    })
}



downloadBtn.addEventListener('keydown',()=>{
    down(event);
})//On clicking enter the file starts to download
