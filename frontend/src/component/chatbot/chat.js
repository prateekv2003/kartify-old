import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

const steps=[
    {
      id: '1',
      message: 'Welcome buddy, I am here to help you !!!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}! Please enter your number.',
      trigger: 'num',
    },
    {
      id: 'num',
      user: true,
      trigger: '4',
      validator: (value) => {
        if (isNaN(value)) {
          return 'value must be a number';
        } else if (value < 0) {
          return 'value must be positive';
        } else if (value > 9999999999 || value < 1000000000) {
          return 'Please enter only 10 digit number';
        }

        return true;
      },
    },
    {
      id: '4',
      message: 'Thank you for your info, How can I help you?',
      trigger: 'op',
    },
    {
      id: 'op',
      options: [
        { value: 'product', label: 'Check Available Products', trigger: '5' },
        { value: 'order', label: 'Steps to order a product', trigger: '6' },
      ],
    },
    {
      id: '5',
      message: 'This section is pending',
    },
    {
      id: '6',
      message: 'Follow the following steps to order a product:',
      trigger: 'order1',
    },
    {
      id: 'order1',
      message: '1. Login as user on the website',
      trigger: 'order2',
    },
    {
      id: 'order2',
      message: '2. Go to product section and choose your product',
      trigger: 'order3',
    },
    {
      id: 'order3',
      message: '3. Click on ADD TO CART for that product',
      trigger: 'order4',
    },
    {
      id: 'order4',
      message: '4. Click on proceed to buy',
      trigger: 'order5',
    },
    {
      id: 'order5',
      message: '5. Enter your current address',
      trigger: 'order6',
    },
    {
      id: 'order6',
      message: '6. Complete your payment by using your Debit/Credit card',
      trigger: 'order7',
    },
    {
      id: 'order7',
      message: '7. Congratulations your product is on the way. Now just enjoy our superfast delivery service',
      trigger: 'ans',
    },
    {
      id: 'ans',
      message: 'I hope this information is helpful.',
      trigger: 'ask',
    },
    {
      id: 'ask',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'again' },
        { value: 'no', label: 'No', trigger: 'sorry' },
      ],
    },
    {
      id: 'again',
      message: 'Do you want some another help?',
      trigger: 'update-question',
    },
    {
      id: 'sorry',
      message: 'Sorry, I will try to help you next time.',
      trigger: 'end-message',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: 'What?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'product', label: 'Check Available Products', trigger: '5' },
        { value: 'order', label: 'Steps to order a product', trigger: '6' },
      ],
    },
    {
      id: 'end-message',
      message: 'Thank you for your time! See you next time.',
      end: true,
    }
];

const config = {
    floating: true,
};

class EchatBot extends Component {
  render() {
    return (
      <ChatBot
      headerTitle1="Speech Recognition"
      recognitionEnable={true}
      // headerTitle2="Speech Synthesis"
      // speechSynthesis={{ enable: true, lang: 'en' }}
        

      steps={steps}
        {...config}
      />
    );
  }
}

export default EchatBot;