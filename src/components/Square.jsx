// import React, { Component} from 'react'
import React from 'react'

// class Square extends Component {
    
    
//     // state = {
//     //     mark: null, 
//     //     // mark2: null, 
//     // }

//     // handleClick(){
//     //     this.setState({mark: 'X'}); 
//     // }

//     render() {
//         const { mark, eventoClick } = this.props; 
//         // const { mark, mark2 } = this.state; 
//         return (
//         <button className="square" onClick={eventoClick}>
//           {mark}
//         </button>
//       );
//     }
//   }

// Lo Anterior puede ser un componente puro
const Square = props => {
    const { mark, eventoClick } = props; 
    return (
        <button className="square" onClick={eventoClick}>
            {mark}
        </button>
    );
}

export default Square;

