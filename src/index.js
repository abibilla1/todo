import React from "react";
import ReactDom from 'react-dom'


// const Hello = () => {
//     const style = {
//         color: 'red',
//         fontSize: '15px',
//         backgroundColor: 'green',
//
//     }
//     return (
//         <div>
//             <h1 className='text-center' style={style}>React first App</h1>
//             <p>it is good news</p>
//             <div className='form-group'>
//                 <label htmlFor='Username'>Usename</label>
//                 <input type="text" name='username' id='Username'/>
//             </div>
//         </div>
//     )
// }


const Blog = (props) => {
    return (
        <div>
            <div className="card" style={{width:'200px',fontSize: '20px',display:'inline-block'}}>
                <img className="card-img-top"
                     src="https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
                     alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}Some quick example text to build on the card title and make up the bulk
                            of
                            the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
)
}

ReactDom.render(
    <div style={{display:"flex"}}>
        <Blog title='Delisious cake'/>
        <Blog t = 'it is a good cake'/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
    </div>
,document.getElementById('root'))
