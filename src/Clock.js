import React, {Component} from "react";

class Clock extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
    }

    getTimeUntil(deadline)
    {
        const time = Date.parse(deadline) - Date.parse(new Date());
        this.setState({
            seconds : Math.floor((time/1000)%60),
            minutes : Math.floor((time/1000/60)%60),
            days : Math.floor(time/(1000*60*60*24)),
            hours :Math.floor(time/(1000*60*60)%24)
        });
    }

    adjustZero(num)
    {
        return  (num < 10) ?  '0' + num : num;
    }

    componentWillUnmount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline),1000)
    }

    render(){
        return(
            <div>
            <div className = "clockDays">{this.adjustZero(this.state.days)} days</div>
            <div className = "clockHours">{this.adjustZero(this.state.hours)} hours</div>
            <div className = "clockMinutes">{this.adjustZero(this.state.minutes)} minutes</div>
            <div className = "clockSeconds">{this.adjustZero(this.state.seconds)} seconds</div>
          </div>
        );
    }
}

export default Clock;