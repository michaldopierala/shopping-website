import React from 'react'
import products from '../../data/products.json'


// export default function ImgButtons({ imgUrl }) {
//     return (
//         <div>

//             {imgUrl.map((item, index) => { return <button key={index} onClick={() => goToSlide(index+2)} ><img src={item} /> </button> })}


//         </div>
//     )
// }


export default function ButtonGroup( { img, next, previous, goToSlide, ...rest }) {
    // export default function ButtonGroup( props) {

const { carouselState: { currentSlide } } = rest;
    // console.log(img)
    return (
        <div className='ButtonGroup'>
            {/* {img.map((item, index) => <button key={index} className={currentSlide - 2 === index ? 'active' : ''} onClick={() => goToSlide(index + 2)}><img src={item.imgUrl} alt='image' /> </button>)} */}
{/* <div>test </div> */}
{/* <button onClick={() => goToSlide( 2)} > item 1 </button>
<button onClick={() => goToSlide( 2)} > item 2 </button> */}
            {img.map((item, index) => <button key={index} className={currentSlide - 2 === index ? 'active' : ''} onClick={() => goToSlide(index + 2)}><img src={item} alt='image' /> </button>)}



            {img.map((item, index) =>  console.log(item))}

        </div>
    )
}
