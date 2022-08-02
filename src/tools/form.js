
const leabeDynamic = (element) => {
    const nodo = element.target
    if(nodo.value.trim() != ''){
      nodo.previousElementSibling.setAttribute('class','label-active');
    }else{
      nodo.previousElementSibling.removeAttribute('class');
      nodo.value = '';
    }
    nodo.onblur = () => {
        if(nodo.value != ''){ nodo.value = nodo.value.trim() }
    }
}

export default leabeDynamic;
