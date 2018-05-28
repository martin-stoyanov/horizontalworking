import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import Link from 'next/link';

const Header = () => (
  <Box direction='row' pad='medium' align='center' justify='between' background='dark-2'>
    <Box direction='row' justify='left' gap='small'>
      <Heading margin='none' level='3'>Horizontal Working</Heading>
      <Text size='xsmall'>The world&#8217;s best kept secret</Text>
    </Box>
    <Box direction='row' justify='right' gap='small'>
      <Link href='/'><Button>Home</Button></Link>
      <Link href='/history'><Button>History</Button></Link>
      <Link href='/gallery'><Button>Gallery</Button></Link>
    </Box>
  </Box>
);

export default Header;
