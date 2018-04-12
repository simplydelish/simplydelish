import { Grid } from 'semantic-ui-react';
import React from 'react';
import NavBar from '../components/NavBar';
import FoodCard from '../components/FoodCard';

class FoodsAvailable extends React.Component {
  render() {
    return (
        <div>
          <NavBar links={[{ title: 'Home', href: '#' }, { title: 'Page 1', href: '#' },
            { title: 'Page 2', href: '#' }]}></NavBar>
          <Grid centered>
            <Grid.Row>
              <FoodCard
                  image={'https://image.flaticon.com/icons/svg/45/45332.svg'}
                  title={'The Sistah'}
                  hours={'Monday thru Friday: 10:00am -  2:00pm \n Holmes Hall '}
                  description={'Serves Korean-inspired local cuisine.'}
                  numReviews={27}
                  numLikes={75}
              />
              <FoodCard
                  // eslint-disable-next-line
                  image={'http://hackmeatsv.foodtechconnect.com/files/2012/10/Square-Logo-1-300x300.jpg'}
                  title={'(Not) The Sistah'}
                  hours={'Opening/Closing based on star alignment'}
                  description={'Sometimes serves Korean-inspired local cuisine.'}
                  numReviews={42}
                  numLikes={42}
              />
              <FoodCard
                  image={'https://image.flaticon.com/icons/svg/45/45332.svg'}
                  title={'The Sistah'}
                  hours={'Monday thru Friday: 10:00am -  2:00pm \n Holmes Hall '}
                  description={'Serves Korean-inspired local cuisine.'}
                  numReviews={27}
                  numLikes={75}
              />
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default FoodsAvailable;
