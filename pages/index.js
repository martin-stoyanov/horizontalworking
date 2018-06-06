import React from 'react';
import { Box, Image, Heading, Button, Paragraph, Carousel, Stack, Text } from 'grommet';
import { Card } from 'grommet-controls';
import { CardTitle, CardContent } from 'grommet-controls/components/Card';
import { Facebook, Twitter, Google } from 'grommet-icons';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <Box direction='column' align='center'>
      <Image style={{ width: '100%', height: 'auto' }} src='https://lh3.googleusercontent.com/ln7s-kJXA_7J00s4MzSCYowWWogblB2qdB1tI21Vc0vmFPwIQHCMik8NVixjQ1oce5R6uidBBkeUsiJoNTlwklJjYZlDpK6BwVm9rMrcQK9DdZIlFmMwJFOJTwsHvd9aA0tAyG4OHf82jUHxWcMFqJjJfpMLr41Qdie9E0xtcleOuFhB2ke2Sl5d054Jx9C0SGrKkHeyLZr0zpQvh6lzxH2GKy9-mQMDYWMNGWjVTq27Ck1yAeqt5Z0H-tCWtigF7BdLRrnQaNm9AkJr7Rz__y0-P9SAe3ShzQ9sdxg0ygg9QxxqWQ7DL7sRbDLARRIa9kGzAOFV75DgR3ILO7ii39tQkuu_7eXqO0oV7OTU1yG4PWsmrzfWPWW7ew9vJVTocpYZeKndyJyppaczsOkssM4lORfoaPojhHnCirTSqN4XDTm5zsPNXdjHkKOCxy-iDepspZoXMWsBc_TP1fRzQj6REL1Wz9sZB79cG6bGqTcBv_txsB9jotymfUIHqwiunhR_Wu9K1Adfa5f1PY7ivKDlRuq2TM_unq7_tMtIeUWeciPPuc1bVySmrhKGsGg3iLrCTrpeTTJtHh4XtVqDc3vyPCg7pCUYYGa8Sx63=w1440-h456-no' />
    </Box>
    <Box align='center' gap='medium' background='dark-2' pad='medium'>
      <Heading margin='none' size='medium'>Horizontal is our natural position</Heading>
      <Paragraph style={{ maxWidth: '500px' }}>The human race was never meant to live vertically - we all started
       as horizontal creatures yet technology forced us into an awkward vertical position.
      </Paragraph>
      <Button
        label='Learn More...'
        primary='true'
        href='/history'
        color='neutral-1'
      />
    </Box>
    <Box align='center'>
      <Heading size='medium'>Our Services</Heading>
      <Box direction='row' wrap='true'>
        <Card>
          <CardTitle>
            <Twitter color='accent-3' />
          </CardTitle>
          <CardContent align='center'>
            <Heading size='small'>Horizontal Twitter</Heading>
            <Paragraph>Multiple studies have shown that horizontal people are the leaders and
              influencers in every industry. By rotating your twitter profile, we will make
              it a must-follow for every celebrity.
            </Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>
            <Facebook color='neutral-3' />
          </CardTitle>
          <CardContent align='center'>
            <Heading size='small'>Horizontal Facebook</Heading>
            <Paragraph>Since the brain of horizontal people functions at a higher speed,
              they can like and share up to 40 posts per minute. Switching to a horizontal
              Facebook page design will make your community go viral in no time.
            </Paragraph>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>
            <Google color='neutral-1' />
          </CardTitle>
          <CardContent align='center'>
            <Heading size='small'>Horizontal Google</Heading>
            <Paragraph>Massively horizontal computing is the new name in super-high performance
               computing. By simply rotating your CPU, we will allow you to train artificial
               intelligence models in nano-seconds without ever needing another GPU.
            </Paragraph>
          </CardContent>
        </Card>
      </Box>
      <Box pad='large'>
        <Carousel play='5000'>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '100%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Conference.jpg' />
            </Box>
            <Box>
              <Heading level='3' textAlign='center' color='light-1'>Horizontal Working Symposium 2016</Heading>
              <Text textAlign='center' color='light-1' size='medium'>This year we met in Ubud, where the horizontal spirit is well and alive. Other side activities included 90° yoga, sideways meditation and horizontastic dancing.</Text>
            </Box>
          </Stack>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '100%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Master.jpg' />
            </Box>
            <Box>
              <Heading level='3' textAlign='center' color='light-1'>Semi Left Style</Heading>
              <Text textAlign='center' color='light-1' size='medium'>Dr.U practcies semi-left horizontal working, as it leaves a hand available for smoking.</Text>
            </Box>
          </Stack>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '70%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/millenials.jpg' />
            </Box>
            <Box>
              <Heading level='3' textAlign='center' color='light-1'>Horizontal Learning and The Millenials</Heading>
              <Text textAlign='center' color='light-1' size='medium'>Students practicing horizontal learning achieve SAT scores higher by 200+ points compared to traditional vertical learners.</Text>
            </Box>
          </Stack>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '70%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/Surfer_Style.jpg' />
            </Box>
            <Box>
              <Heading level='3' textAlign='center' color='light-1'>The Levitating Surfer</Heading>
              <Text textAlign='center' color='light-1' size='medium'>JB uses the left horizontal levitating style to surf the world.</Text>
            </Box>
          </Stack>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '70%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/French_Arrogance.jpg' />
            </Box>
            <Box>
              <Heading level='3' extAlign='center' color='light-1'>Massively horizontal computing</Heading>
              <Text textAlign='center' color='light-1' size='medium'>With typical french arrogance, Dr Alex is bringing horizontal computing to new levels.</Text>
            </Box>
          </Stack>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '70%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/First_Steps.jpg' />
            </Box>
            <Box>
              <Heading level='3' textAlign='center' color='light-1'>Horizontal Yoga Instructor</Heading>
              <Text textAlign='center' color='light-1' size='medium'>CleG teaches horizontal yoga in Montreal between multiple DoD contracts.</Text>
            </Box>
          </Stack>
          <Stack anchor='center'>
            <Box align='center'>
              <Image style={{ width: '70%%', height: 'auto' }} src='http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Working_Overload.jpg' />
            </Box>
            <Box>
              <Heading level='3' textAlign='center' color='light-1'>World Chess Champion</Heading>
              <Text textAlign='center' color='light-1' size='medium'>Mr. Q used a horizontal playing style and won the world championships.</Text>
            </Box>
          </Stack>
        </Carousel>
      </Box>
      <Heading size='medium'>Common Questions and Answers</Heading>
      <Box direction='row' wrap='true' justify='center' pad='medium'>
        <Box>
          <Heading level='3' margin='none' style={{ maxWidth: '400px' }}>Explain horizontal working</Heading>
          <Paragraph>When the body is horizontal, the brain&#39;s left/right side has higher blood
             circulation and the brain performs at an optimal rate.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3' margin='none' style={{ maxWidth: '400px' }}>Why is a vertical position detrimental to brain activity?</Heading>
          <Paragraph>When people work in a vertical position, the blood circulation is forced out of
            their brain - making them (far) less than intelligent and easy to control/manipulate.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3' margin='none' style={{ maxWidth: '400px' }}>Why does no one speak about Horizontal Working?</Heading>
          <Paragraph>A select group of the most influencial people in the world (the Directionatii)
             keeps it a secret, so they can easily control the &#39;zombied&#39;
              vertically oriented people.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3' margin='none' style={{ maxWidth: '400px' }}>I am an artist - what horizontal working is right for me?</Heading>
          <Paragraph>You should work leaning to your left side - this will activate the
             left/artistic side of your brain
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3' margin='none' style={{ maxWidth: '400px' }}>How did Trump win the US elections?</Heading>
          <Paragraph>Visible by his hairdo, Trump is clearly spending most of his days in a
             horizontal position, leaning to his right. We had predicted back in 2011 that
              he will win the elections.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3' margin='none' style={{ maxWidth: '400px' }}>What caused the Greek crisis?</Heading>
          <Paragraph style={{ maxWidth: '400px' }}>We know Greeks spend most of their days in horizontal working - something the Directionatii could not allow to go unpunished. The economic hardships inflicted on the greek people are meant to force them to work in a vertical position.</Paragraph>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Index;
