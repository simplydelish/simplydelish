import React from 'react';
import { Container, Form, Grid } from 'semantic-ui-react';
import AddVendorHeader from '../components/AddVendorHeader';

const priceoptions = [
  { key: '$', text: '$', value: '$' },
  { key: '$$', text: '$$', value: '$$' },
  { key: '$$$', text: '$$$', value: '$$$' },
];

const cityoptions = [
  { key: 'Hawaii', text: 'Hawaii', value: 'Hawaii' },
];

/** A simple static component to render some text for the landing page. */
export default class AddVendor extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const paddFix = { paddingBottom: "155px" };
    const backColor = { backgroundColor: "#ffc40c" };
    return (
        <div style={backColor}>
          <AddVendorHeader/>
          <Container>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Vendor name' placeholder='Vendor name'/>
                <Form.Input fluid label='Phone number' placeholder='___ - ____ - _____'/>
                <Form.Select fluid label='Pricing' options={priceoptions} placeholder='Pricing'/>
              </Form.Group>

              <Form.Input fluid label='Address' placeholder='Address'/>

              <Form.Group widths='equal'>
                <Form.Input fluid label='City' placeholder='City'/>
                <Form.Select fluid label='State' options={cityoptions} placeholder='State'/>
                <Form.Input fluid label='Zip Code' placeholder='Zip Code'/>
              </Form.Group>


              <Grid columns={4}>
                <Grid.Column>
                  <Form.Group grouped>
                    <label>Delivery: </label>
                    <Form.Field label='Yes' control='input' type='radio' name='htmlRadios'/>
                    <Form.Field label='No' control='input' type='radio' name='htmlRadios'/>
                  </Form.Group>

                  <Form.Group grouped>
                    <label>Accepts Credit Cards: </label>
                    <Form.Field label='Yes' control='input' type='radio' name='htmlRadios'/>
                    <Form.Field label='No' control='input' type='radio' name='htmlRadios'/>
                  </Form.Group>
                </Grid.Column>

                <Grid.Column>
                  <Form.Group grouped>
                    <label>Wifi: </label>
                    <Form.Field label='Yes' control='input' type='radio' name='htmlRadios'/>
                    <Form.Field label='No' control='input' type='radio' name='htmlRadios'/>
                  </Form.Group>

                  <Form.Group grouped>
                    <label>Alcohol: </label>
                    <Form.Field label='Yes' control='input' type='radio' name='htmlRadios'/>
                    <Form.Field label='No' control='input' type='radio' name='htmlRadios'/>
                  </Form.Group>
                </Grid.Column>

                <Grid.Column>
                  <Form.Group grouped>
                    <label>Take Out: </label>
                    <Form.Field label='Yes' control='input' type='radio' name='htmlRadios'/>
                    <Form.Field label='No' control='input' type='radio' name='htmlRadios'/>
                  </Form.Group>

                  <Form.Group grouped>
                    <label>Parking: </label>
                    <Form.Field label='Private Lot' control='input' type='radio' name='htmlRadios'/>
                    <Form.Field label='Street' control='input' type='radio' name='htmlRadios'/>
                  </Form.Group>
                </Grid.Column>

                <Grid.Column>
                  <Form.Group grouped>
                    <label>Good For: </label>
                    <Form.Field label='Breakfast' control='input' type='checkbox'/>
                    <Form.Field label='Lunch' control='input' type='checkbox'/>
                    <Form.Field label='Dinner' control='input' type='checkbox'/>
                  </Form.Group>

                </Grid.Column>
              </Grid>
              <br></br>
              <div style={paddFix}>
                <Form.Button fluid>SUBMIT</Form.Button>
              </div>
            </Form>
          </Container>
        </div>
    );
  }
}
