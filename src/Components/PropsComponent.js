// Props Class Component (METHOD-1)
import React, { Component } from "react";

class PropsComponent extends Component{
    render() {
        return (
             <div>
                <p>Method1</p>
                <h1>PropsComponent</h1>
                <p>this method is call props {this.props.methodName} </p>
            <p>___________________________________________________________</p>
             </div>
        );
    }
}
export default PropsComponent;

// Props Functional Component    (METHOD-2)

// import React from "react";
// const PropsComponent = (props) => {
//     return(
//         <div>
//             <h1>Functional Props Component</h1>
//                 <p>Method 2</p>
//             <p>This method is called props {props.methodName2} </p>
//             <pre>{JSON.stringify(props)} </pre>
//                 <p>Id value= {props.id1}</p>
//                 <p>Id value={props.id2}</p>
//                 <pre>{JSON.stringify(props)}</pre>
//             <p>___________________________________________________________</p>
//         </div>
//     );
// }
// export default PropsComponent;

//MEHTOD - 3

// import React from "react";

// const PropsComponent = (props) =>{
// const {name,age} = props;
// return(
//     <div>
//          <h1>Functional Props Component</h1>
//          <p>Method3</p>
//         <p>name: {name}</p>
//         <p>age: {age}</p>
//         <p>___________________________________________________________</p>

//     </div>
// );
// }
// export default PropsComponent;
