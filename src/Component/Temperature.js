import React, { PureComponent } from 'react'
import Weather from './Wether';
import '../style/style.css'
export class Temperature extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            late:'',
            lang:'',
            Temp:'',
            TempText:'', 
            iconSrc:'',
            isLoaded:false
        }
    }
    GetCoordinates = () => 
    {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( position => {    
                this.setState({
                    late : position.coords.latitude,
                    lang : position.coords.longitude,
                })
            })
        }
    }
    GetTemp = async() => {
        const {late , lang} = this.state;
        const apiCall = await fetch (`https://api.weatherapi.com/v1/current.json?key=0f9056c2334d40e093c190649212401&q=${late},${lang}`)
        const response = await apiCall.json();
        this.setState({
            isLoaded: true,
            Temp : response.current.temp_c,
            TempText: response.current.condition.text,
            iconSrc: response.current.condition.icon,
        }, ()=>console.log(response));
    };
    componentDidUpdate()
    {
        this.GetTemp();  
    }
    componentDidMount()
    {
        this.GetCoordinates();
    }
    render() {
        const {Temp , TempText , iconSrc , isLoaded} = this.state;        
        let view;
        if (isLoaded === false)
        {   
            view =  <div className="d-flex justify-content-center align-items-center allow-box"><h2 className="text-center">Allow Your Location First</h2></div>
        }
        else
        {
            if (Temp === '' || TempText === '' || iconSrc === '') {
                view = <div className="d-flex justify-content-center align-items-center allow-box"><h2>Your Browser Does not Support This Application</h2></div>
            }
            else {
                view = <div><Weather Temp={Temp} TempText={TempText} iconSrc={iconSrc}></Weather></div>    
            }
        }
        return (
            <div>
                {view}
            </div>
        )
    }
}
export default Temperature

