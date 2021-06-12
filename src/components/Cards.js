import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import CardItemImage1 from '../images/img-9.jpg';
import CardItemImage2 from '../images/img-2.jpg';
import CardItemImage3 from '../images/img-3.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>NOS SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage1}
              text='Nous vous rachetons vos crédits au meilleur taux du marché.'
              label='Rachat de crédit'
              path='/services/rachat'
            />
            
            <CardItem
              src={CardItemImage2}
              text='Nous proposons une assurance emprunteur des plus intéressantes.'
              label='Assurance emprunteur'
              path='/sign-up'
            />
            <CardItem
              src={CardItemImage3}
              text='Venez vous renseigner sur nos crédits immobiliers ! Vous serez agréablement surpris. '
              label='Crédit immobilier'
              path='/sign-up'
              
            />
          </ul>
          {/*path='/services/creditimmobilier' A REMETTRE DANS LES PATHS PRECEDENTS*/}
          {/*path='/services/assuranceemprunteur' A REMETTRE DANS LES PATHS PRECEDENTS*/}
          {/*
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage3}
              text='Set Sail in the Caribbean and Discover Sunken Ships'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={CardItemImage4}
              text='Experience soccer on a remote Norwegian island'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={CardItemImage8}
              text='Ride through the Sahara Desert on a guided tour'
              label='Adrenaline'
              path='/services'
            />
            
          </ul>
          */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
