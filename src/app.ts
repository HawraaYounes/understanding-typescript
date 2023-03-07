const form=document.querySelector('form')!;
const addresInput=document.querySelector("address")! as HTMLInputElement;
function searchAddress( e: Event){
    e.preventDefault();
    const address=addresInput.value;
}
form.addEventListener("submit",searchAddress);