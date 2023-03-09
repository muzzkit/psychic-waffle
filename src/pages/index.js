import Head from 'next/head';
import Script from 'next/script'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Input,
  Image
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function CallToActionWithAnnotation() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('On this billboard anyone who pays maximum money will have his message written on the billboard. So how much will you bid currentAmount is')
  let amountRef = useRef(null);
  let messageRef = useRef(null);
  let emailRef = useRef(null);

  // console.log(Blockonomics, 'hye');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newAmount = amountRef?.current?.value;
    let newMessage = messageRef?.current?.value;
    let email = emailRef?.current?.value;

    if (newAmount > amount) {
      Promise.resolve(Blockonomics.widget({
        uid: '990a4a2c295c4608',
        msg_area: 'bitcoinpay',
        email: email,
        amount: newAmount
      })).then(() => {
        setAmount(newAmount)
        setMessage(newMessage)
      }).catch((err) => console.log(err))
    } else {
      alert('Please Increase the amount')
    }
  }
  return (
    <>
      {/* <Script src="https://blockonomics.co/js/pay_widget.js" /> */}
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Internet <br />
            <Text as={'span'} color={'yellow.400'}>
              Bitcoin BillBoard
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            {message} <br /> current amount is {amount}
          </Text>


          <form onSubmit={handleSubmit}>
            <Input type="number" placeholder='How much are you paying' ref={amountRef} required />
            <Input type="text" placeholder='Your Message' ref={messageRef} />
            <Input type="email" placeholder='Your Email' ref={emailRef} />

            <button id="pay" type="submit"><img width='160' src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png" /></button>
          </form>
          <div id="bitcoinpay"></div>

          {/* <a href="" className="blockoPayBtn" data-toggle="modal" data-uid='5050f416cadc45b4'> */}
          {/* <Image width='160' src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png" /></a> */}

        </Stack>
      </Container>
    </>
  );
}






