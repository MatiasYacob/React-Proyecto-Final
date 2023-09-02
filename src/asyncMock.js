const products =[
    {
        id:'1',
        name:'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description:'Descripcion de iphone'

    },
    {
        id:'2', 
        name:'Samsung S21',
        price: 800,
        category:'celular',
        img:'https://imgs.search.brave.com/we0WULoafNZxW2hT9Fz3QMr-K1S51ZLTWrSjp3OJRnw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/c2Ftc3VuZy1nYWxh/eHktYTM0LmpwZw',
        stock:22,
        description:'Descripcion de Samsung'

    },
    {
        id:'3', 
        name:'Ipad 8Va Generacion',
        price: 1200,
        category:'Tablet',
        img:'https://imgs.search.brave.com/fml2uWRZwjO1I1AQZdLNRQvAILSm3YJIqE-mROyRFPg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFjc3RhdGlvbi5j/b20uYXIvaW1nL3By/b2R1Y3Rvcy8yNTYy/LTEuanBn',
        stock:5,
        description:'Descripcion de Ipad'

    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (itemId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === itemId.toLowerCase()))

        }, 500)

    })

};