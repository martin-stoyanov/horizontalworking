import React from 'react';
import { Box, Paragraph, Heading, Image } from 'grommet';

const Footer = () => (
  <Box>
    <Box align='center' pad='xsmall' background='dark-2'>
      <Heading margin='small' level='3'>www.horizontalworking.com</Heading>
      <Paragraph style={{ maxWidth: '500px' }}>The Horizontal Working (HoWo) association is dedicated to the adoption,
      promotion and funding of the horizontal working movement.
      </Paragraph>
      <Box direction='row'>
        <a style={{ maxWidth: '50%' }} href='https://bufferapp.com/add?url=http://www.horizontalworking.com&text=Horizontal Working News'>
          <img style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/buffer.png' alt='Buffer' />
        </a>
        <a style={{ maxWidth: '50%' }} href='http://www.horizontalworking.com/mailto:?Subject=Horizontal Working News&Body=I%20saw%20this%20and%20thought%20of%20you!%20 http://www.horizontalworking.com'>
          <img style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/email.png' alt='Email' />
        </a>
        <a href='http://www.facebook.com/sharer.php?u=http://www.horizontalworking.com'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/facebook.png' alt='Facebook' />
        </a>
        <a href='https://plus.google.com/share?url=http://www.horizontalworking.com'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/google.png' alt='Google+' />
        </a>
        <a href='http://www.linkedin.com/shareArticle?mini=true&url=http://www.horizontalworking.com'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/linkedin.png' alt='LinkedIn' />
        </a>
        <a href='http://reddit.com/submit?url=http://www.horizontalworking.com&title=Horizontal Working News'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/reddit.png' alt='buffer' />
        </a>
        <a href='https://twitter.com/share?url=http://www.horizontalworking.com&text=Horizontal%20Working%20News&hashtags=horizontalworking'>
          <Image style={{ maxWidth: '50%' }} src='https://simplesharebuttons.com/images/somacro/twitter.png' alt='buffer' />
        </a>
      </Box>
    </Box>
    <Box align='center' background='dark-1'>
      <Paragraph>Copyright (c) 2018 HoWo Intl.</Paragraph>
    </Box>
  </Box>
);

export default Footer;
