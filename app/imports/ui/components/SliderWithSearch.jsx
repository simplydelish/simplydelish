import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image , Grid, Search} from 'semantic-ui-react';
import { render } from 'react-dom';


export default class SliderWithSearch extends React.Component {
  constructor(){
  super();
  this.state = {
    name: 'React',
    isLoading: false,
    value: '',
    results: [],
    options: [
      {
        "id": "1",
        "title": "Sweet Dream - Da Spot",
        "description": "Strawberries, Haupia, Sorbet, Soymilk.",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg",
        "price": "$5.84"
      },
      {
        "id": "2",
        "title": "Philly Cheese Steak - Domino's Pizza",
        "description": "Tasty pizzas at a quick and convenient counter in the Paradise Palms food court.",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ehsandiary/128.jpg",
        "price": "$10.28"
      },
      {
        "id": "3",
        "title": "Hot Coffee - Dunkin' Donuts",
        "description": "High-quality beverage offerings–including freshly-brewed Hot and Iced Coffees–paired perfectly with delicious donuts, bakery good, sandwiches and more.",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/randomlies/128.jpg",
        "price": "$2.29"
      },
      {
        "id": "4",
        "title": "Chicken Chipotle Panini - Honolulu Gourmet",
        "description": "healthy, locally grown salads, sandwiches, and grab-and-go items at affordable prices.",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/primozcigler/128.jpg",
        "price": "$8.72"
      },
      {
        "id": "5",
        "title": "Tamales - Hot Tacos",
        "description": "authentic Mexican food, prepped and cooked daily from scratch offering tacos, burritos, and quesadillas with meat options like steak, chicken, marinated pork, and shredded beef.",
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/dicesales/128.jpg",
        "price": "$6.48"
      }
    ]
  };

  this.handleSearchChange = this.handleSearchChange.bind(this);
  this.resultRenderer = this.resultRenderer.bind(this);
}

handleSearchChange = (e, { value }) => {
  this.setState({ isLoading: true, value })

  setTimeout(() => {
    const re = new RegExp(this.state.value, 'i');
    const isMatch = result => re.test(result.title);

    const results = this.state.options.filter(isMatch).map(result => ({ ...result, key: result.id }));

    this.setState({
      isLoading: false,
      results: results,
    });
  }, 500)
}

resultRenderer({ id, title }) {
  return <div id={id} key={id}>{title}</div>
}
  render() {
  const { isLoading, value, results } = this.state;
    const searchAdjust = {top: "10%", zIndex: "99999", position: "absolute"};
    const marginFix = {marginTop: "-10px"};


    return (
        <div id="slider" style={marginFix}>
          <Grid celled='internally'>
            <Grid.Row>
              <Search style={searchAdjust}
                      placeholder='What do I want to eat?'
                      loading={isLoading}
                      resultRenderer={this.resultRenderer}
                      onSearchChange={this.handleSearchChange}
                      results={results}
                      value={value}
              />
            </Grid.Row>
          </Grid>
          <figure>
            <Image fluid src="/images/cw_70.png"/>
            <Image fluid src="/images/oj_70.png"/>
            <Image fluid src="/images/av_70.png"/>
            <Image fluid src="/images/b_70.png"/>
            <Image fluid src="/images/cw_70.png"/>

          </figure>
        </div>


    );
  }
}