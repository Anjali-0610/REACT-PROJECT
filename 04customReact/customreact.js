
// function customRender(reactElement,main){
       
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     main.appendChild(domElement)
// }



function customRender(reactElement,main)
{
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const p in reactElement.props)
    {
        if(p==='children')continue;
        domElement.setAttribute(p,reactElement.props[p])
    }
    main.appendChild(domElement)
}


const reactElement ={
    type:'a',       /*teels th etype of element i.e anchor tag here*/
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}



const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)