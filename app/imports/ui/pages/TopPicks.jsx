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
                  title={'Veggie Salad'}
                  hours={'The Sistah'}
                  description={'Delicious salad.'}
                  numReviews={27}
                  numLikes={75}
              />
              <FoodCard
                  image={'http://www.iwi.center/wp-content/uploads/2018/04/food.jpg'}
                  title={'Different Veggie Salad'}
                  hours={'The Sistah'}
                  description={'Better salad.'}
                  numReviews={1000}
                  numLikes={750}
              />
              <FoodCard
                  image={'http://www.iwi.center/wp-content/uploads/2018/04/food.jpg'}
                  title={'Best Veggie Salad'}
                  hours={'The Sistah'}
                  description={'Even better salad.'}
                  numReviews={2}
                  numLikes={1}
              />
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default TopPicks;
