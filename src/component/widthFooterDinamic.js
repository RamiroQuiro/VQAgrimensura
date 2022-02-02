const d= document, w=window;

export default function scrollToElement(btn) {
    const $scrollbtn= d.querySelector(btn);

    w.addEventListener('scroll', e =>{

        console.log(w.pageXOffset)
    })
    d.addEventListener('click', e =>{})

   
}
