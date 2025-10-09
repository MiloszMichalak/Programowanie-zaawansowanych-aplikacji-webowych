import { Component } from 'react';
import Header from "../Components/Header/Header"
import Subtitle from "../Components/Subtitle/Subitle"
import './SalonSamochodowy.css'
import CarCard from '../Components/CarCard/CarCard';
import logo from '../../public/companyLogo.png'
import Audi from './../assets/Audi.jpg'
import BMW from './../assets/BMW.jpg'
import Mercedes from './../assets/Mercedes.jpg'
import Jeep from './../assets/Jeep.jpg'
import RangeRover from './../assets/RangeRover.jpg'
import Ford from "./../assets/Ford.jpg"
import Nissan from "./../assets/Nissan.jpg"
import Opel from "./../assets/Opel.jpg"
import Seat from "./../assets/Seat.jpg"
import Volkswagen from "./../assets/Volkswagen.jpg"
import Footer from '../Components/Footer/Footer';

export default class SalonSamochodowy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new: [
        {brand: "Audi", image: Audi},
        {brand: "BMW", image: BMW},
        {brand: "Mercedes", image: Mercedes},
        {brand: "Jeep", image: Jeep},
        {brand: "Range Rover", image: RangeRover},
      ],
      used: [
        {brand: "Volkswagen", image: Volkswagen},
        {brand: "Ford", image: Ford},
        {brand: "Opel", image: Opel},
        {brand: "Seat", image: Seat},
        {brand: "Nissan", image: Nissan},
      ]
    }
  }
  render() {
    return (
        <div>
            <Header companyName="Szybki Samochód"/>
            <img src={logo} alt='logo firmy'/>
            <div className='container'>
              <div className='left'>
                <Subtitle type="nowe"/>
                {this.state.new.map((car) => (
                  <CarCard brand={car.brand} image={car.image}/>
                ))}
              </div>
              <div className='right'>
                <Subtitle type="używane"/>
                {this.state.used.map((car) => (
                  <CarCard brand={car.brand} image={car.image}/>
                ))}
              </div>
            </div>
            <Footer openTime="8:00" closeTime="18:00"/>
        </div>
    )
  }
}

