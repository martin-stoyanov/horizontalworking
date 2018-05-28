import React from 'react';
import { Stack, Box, Image, Text, Layer, Anchor } from 'grommet';
import Layout from '../components/layout';

class GalleryItem extends React.Component {
  constructor() {
    super();
    this.state = {
      layer: false,
    };
  }
  render() {
    const { imageURL, imageCaption } = this.props;
    const onClose = () => this.setState({
      layer: false,
    });
    const { layer } = this.state;
    let imageLayer;
    if (layer) {
      imageLayer = (
        <Layer modal={true} full={false} position='center' onClickOutside={onClose}>
          <Image fit='cover' src={imageURL} onClick={onClose} />
        </Layer>
      );
    }
    return (
      <Box>
        <Stack anchor='bottom'>
          <Box pad={{ vertical: 'medium' }}>
            <Anchor
              onClick={() => this.setState({ layer: true })}
            >
              <Image style={{ width: '400px' }} src={imageURL} />
            </Anchor>
          </Box>
          <Box>
            <Text margin='medium'textAlign='center' color='light-1' size='large'>{imageCaption}</Text>
          </Box>
        </Stack>
        {imageLayer}
      </Box>
    );
  }
}

class Gallery extends React.Component {
  render() {
    return (
      <Layout>
        <Box direction='row' wrap='true' gap='medium' justify='center' pad='large'>
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Conference.jpg' imageCaption='HoWo Conference 2016, Ubud, Bali' />
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Master.jpg' imageCaption='Dr.U, Directionatii' />
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/millenials.jpg' imageCaption='Millenials and Horizontal Studies' />
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/Surfer_Style.jpg' imageCaption='Horizontal Working - Surfer Style' />
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/French_Arrogance.jpg' imageCaption='Extreme Horizontal Working (French Arrogance)' />
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/First_Steps.jpg' imageCaption='Yoga instructor into Horizontal Working' />
          <GalleryItem imageURL='http://www.horizontalworking.com/static/media/uploads/gallery/Horizontal_Working_Overload.jpg' imageCaption='Horizontal winner of Chess world championships' />
        </Box>
      </Layout>
    );
  }
}

export default Gallery;
