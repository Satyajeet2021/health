import React from "react";



class Car extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.State({ 
        title: 'This is the first test',
         }); 
   }
    render() {
      return <div>
        <p>
        {/* {this.state.title} */}
        test
        </p>
        </div>;
    }
  }

  export default Car;