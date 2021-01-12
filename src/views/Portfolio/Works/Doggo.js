import React from 'react';
import WorkDetails from './WorkDetails';

function Doggo(props) {
    return (
        <div>
            <WorkDetails 
                title="DogGo"
                gif="doggo.gif"
                gifName="doggo gif"
                description="A fully functioning, responsive Ecommerce Site created with the MERN Stack."
                github="https://github.com/echosit/DogGO"
                site="https://doggo-ecommerce.herokuapp.com"
                technologies="ReactJS/Redux, NodeJS/Express, MongoDB, Mongoose, JSON, BcryptJS, Paypal API"
                li1="Payment integration with PayPal and credit card"
                li2="User and Admin registration and login; allows Users and Admin to edit profile information"
                li3="Admin-only menu allows admin to update, add, and delete product information, as well as, to delete or select Delivered on orders"
                li4="Users can add items to cart, checkout, and place an order; after an order is placed, their order is saved to the Orders screen"
            />
        </div>
    );
}

export default Doggo;