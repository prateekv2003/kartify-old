import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import pic from "../chatbot/botLogo.jpg";

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
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
          {
            return true;
          }
        else
          {
            return 'Please input alphabet characters only.';
          }
     },
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
      message: 'Currently we have following products: ',
      trigger: 'prod1',
      // options: [
      //   {value: 'laptop', label: 'Laptop', trigger: 'again'},
      //   {value: 'footwear', label: 'Footwear', trigger: 'again'},
      //   {value: 'tops', label: 'Tops', trigger: 'again'},
      //   {value: 'attire', label: 'Attire', trigger: 'again'},
      //   {value: 'smartphone', label: 'Smartphone', trigger: 'again'},
      //   {value: 'camera', label: 'Camera', trigger: 'again'},
      // ]
    },
    {
      id: 'prod1',
      message: 'Laptop',
      trigger: 'prod2',
    },
    {
      id: 'prod2',
      message: 'Footwear',
      trigger: 'prod3',
    },
    {
      id: 'prod3',
      message: 'Tops',
      trigger: 'prod4',
    },
    {
      id: 'prod4',
      message: 'Attire',
      trigger: 'prod5',
    },
    {
      id: 'prod5',
      message: 'Smartphone',
      trigger: 'prod6',
    },
    {
      id: 'prod6',
      message: 'Camera',
      trigger: 'buy-message',
    },
    {
      id: 'buy-message',
      message: 'Please visit our \'Product Page\' to explore more.',
      trigger: 'ans',
    },
    {
      id: '6',
      message: 'Follow the following steps to order a product:',
      trigger: 'order1',
    },
    {
      id: 'order1',
      message: '1. Login as user on the website',
      trigger: 'ok1',
    },
    {
      id: 'ok1',
      options: [
        { value: 'skip', label: 'Skip', trigger: 'skip-message' },
        { value: 'next', label: 'Next', trigger: 'order2' },
      ],
    },
    {
      id: 'order2',
      message: '2. Go to product section and choose your product',
      trigger: 'ok2',
    },
    {
      id: 'ok2',
      options: [
        { value: 'skip', label: 'Skip', trigger: 'skip-message' },
        { value: 'next', label: 'Next', trigger: 'order3' },
      ],
    },
    {
      id: 'order3',
      message: '3. Click on ADD TO CART for that product',
      trigger: 'ok3',
    },
    {
      id: 'ok3',
      options: [
        { value: 'skip', label: 'Skip', trigger: 'skip-message' },
        { value: 'next', label: 'Next', trigger: 'order4' },
      ],
    },
    {
      id: 'order4',
      message: '4. Click on proceed to buy',
      trigger: 'ok4',
    },
    {
      id: 'ok4',
      options: [
        { value: 'skip', label: 'Skip', trigger: 'skip-message' },
        { value: 'next', label: 'Next', trigger: 'order5' },
      ],
    },
    {
      id: 'order5',
      message: '5. Enter your current address',
      trigger: 'ok5',
    },
    {
      id: 'ok5',
      options: [
        { value: 'skip', label: 'Skip', trigger: 'skip-message' },
        { value: 'next', label: 'Next', trigger: 'order6' },
      ],
    },
    {
      id: 'order6',
      message: '6. Complete your payment by using your Debit/Credit card',
      trigger: 'ok6',
    },
    {
      id: 'ok6',
      options: [
        { value: 'skip', label: 'Skip', trigger: 'skip-message' },
        { value: 'next', label: 'Next', trigger: 'order7' },
      ],
    },
    {
      id: 'order7',
      message: '7. Congratulations, your product is on the way. Check your email for the invoice of the product. Now just enjoy our superfast delivery service',
      trigger: 'ans',
    },
    {
      id: 'skip-message',
      message: 'Great! You already know the process.',
      trigger: 'loop',
    },
    {
      id: 'ans',
      message: 'I hope this information was helpful.',
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
      message: 'Do you need any more assistance?',
      trigger: 'update-question',
    },
    {
      id: 'sorry',
      message: 'Sorry, Please contact us for your query through the following helpline numbers: 022-90826328/29.',
      trigger: 'again',
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
      message: 'What I can do for you?',
      trigger: 'op',
    },
    {
      id: 'end-message',
      message: 'Thank you for your time! Nice to talk to you.',
      trigger: 'loop'
    },
    {
      id: 'loop',
      message: 'If you need my help next time just click \'Need Help\' given below',
      trigger: 'need-help'
    },
    {
      id: 'need-help',
      options: [
        {value: 'help', label:'Need Help', trigger: 'update-yes'}
      ],
    }
];

const config = {
    floating: true,
};


class EchatBot extends Component {

  render() {
    return (
      <ChatBot
      // headerTitle1="Speech Recognition"
      // recognitionEnable={true}
      // headerTitle2="Speech Synthesis"  
      // speechSynthesis={{ enable: true, lang: 'en' }}  
      handleEnd={this.handleEnd}  
      botAvatar= {pic}    

      steps={steps}
        {...config}
      />
    );
  }
}

export default EchatBot;