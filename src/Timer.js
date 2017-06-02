import React, {Component} from 'react';


class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker,1000);
  }



  ticker(){

    this.setState({clock: this.props.start - Date.now()
    });
    console.log(Date.now());
  }

  constructor(props){
    super(props);

    this.state = {
      clock: 0,
    };
    this.ticker = this.ticker.bind(this);
  }

  render(){

    var newDate = new Date(this.state.clock);
    var days = (Math.ceil(newDate.getTime() / (3600 * 24 * 1000))); 
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();
    return(

      <div>
      <p>You have been in this side since:</p><br/>

      <span>{days}:{hours}:{minutes}:{seconds}</span>
      <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
