import { Grid } from 'semantic-ui-react';
import React from 'react';
import NavBar from '../components/NavBar';
import FoodCard from '../components/FoodCard';

class TopPicks extends React.Component {
  render() {
    return (
        <div>
          <NavBar links={[{ title: 'Home', href: '#' }, { title: 'Page 1', href: '#' },
            { title: 'Page 2', href: '#' }]}></NavBar>
          <Grid centered>
            <Grid.Row>
                <FoodCard
                    image={'http://www.iwi.center/wp-content/uploads/2018/04/food.jpg'}
                    title={'The Sistah'}
                    hours={'Monday thru Friday: 10:00am -  2:00pm\n Holmes Hall'}
                    description={'Serves Korean-inspired local cuisine.'}
                    numReviews={27}
                    numLikes={75}
                />
                <FoodCard
                    image={'http://www.iwi.center/wp-content/uploads/2018/04/food.jpg'}
                    title={'The Sistah'}
                    hours={'Monday thru Friday: 10:00am -  2:00pm\n Holmes Hall'}
                    description={'Serves Korean-inspired local cuisine.'}
                    numReviews={27}
                    numLikes={75}
                />
                <FoodCard
                    image={'http://www.iwi.center/wp-content/uploads/2018/04/food.jpg'}
                    title={'The Sistah'}
                    hours={'Monday thru Friday: 10:00am -  2:00pm\n Holmes Hall'}
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

  export default TopPicks;
