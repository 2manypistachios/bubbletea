import React from "react";
import { Field, FieldLabel, FieldBody, Label, Control, Input, Select, Button, Columns, Column, Title, Subtitle } from "bloomer";
var moment = require('moment');
moment().format();

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      drinks: [{ name: '' }],
      price: 4,
    };
  }

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  handlePrice = (evt) => {

    this.setState({})
  }
  
  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.drinks.map((drink, sidx) => {
      if (idx !== sidx) return drink;
      return { ...drink, name: evt.target.value };
    });
    
    this.setState({ drinks: newShareholders });
  }
  
  handleSubmit = (evt) => {
    
    const { name, drinks } = this.state;
    if (moment().weekday() !=3) {
      evt.preventDefault();
      alert("We're only open on Wednesdays 1-5!");
      console.log("Error: wrong week day");
      return;
    }
    if (moment().hours() < 12 || moment().hours() > 17) {
      evt.preventDefault();
      alert("We're only open Wednesdays 1-5!");
      console.log("Error: unopen hour");
      return;
    }
    alert(`Thanks for ordering ${drinks.length} drinks!`);
  }
  
  handleAddShareholder = () => {
    this.setState({ drinks: this.state.drinks.concat([{ name: '' }]) });
    this.setState({ price: this.state.price + 4});
  }
  
  handleRemoveShareholder = (idx) => () => {
    this.setState({ drinks: this.state.drinks.filter((s, sidx) => idx !== sidx) });
    this.setState({ price: this.state.price - 4});
  }

  render() {
    return (
      <form id="gform" method="GET" onSubmit={this.handleSubmit} action="https://script.google.com/macros/s/AKfycbzv-nXMAzhNAZdP8STPPmJT1b1X4uJM6Dw-eIeMEkkZ2t_qR9aB/exec">
        <h2>Open Wed 12-5!</h2>
        <Columns isVCentered>
          <Column isSize={9}>
            <Field isHorizontal>
              <FieldLabel isNormal>
                <Label>Enter your contact!</Label>
              </FieldLabel>
              <FieldBody>
                <Control>
                  <Input type="text" name="Name" placeholder='Name' />
                </Control>
                <Control>
                  <Input type="text" name="Phone" placeholder='(111) 222-3333' />
                </Control>
              </FieldBody>
            </Field>

            <Field isHorizontal>
              <FieldLabel isNormal>
                <Label>Location</Label>
              </FieldLabel>
              <FieldBody>
                <Control>
                    <Control>
                      <Input type="text" name="Place" placeholder='Room #, Building' />
                    </Control>
                </Control>
              </FieldBody>
            </Field>

            <Field isHorizontal>
              <FieldLabel isNormal>
                <Label>Chose your drink!</Label>
              </FieldLabel>
              <FieldBody>

              </FieldBody>
            </Field>
            <Field>
              {this.state.drinks.map((drink, idx) => (
              <FieldBody>
                <Control>
                  <Select name={`Drink #${idx + 1}`}
                    placeholder={`Drink #${idx + 1}`}
                    value={drink.name}
                    onChange={this.handleShareholderNameChange(idx)}>
                      <option>Milk Tea Hot</option>
                      <option>Milk Tea Cold</option>
                  </Select>
                  <Button onClick={this.handleRemoveShareholder(idx)}>X</Button>
                </Control>
              </FieldBody>
              ))}
            </Field>
            <Button onClick={this.handleAddShareholder}>Add Drink</Button>
            
            <Field isHorizontal>
              <FieldLabel isNormal>
                <Label>Chose payment</Label>
              </FieldLabel>
              <FieldBody>
                <Control name="Payment">
                  <Select>
                      <option>Venmo (USD) @Nathaniel-Duanshi</option>
                      <option>WeChat (RMB)</option>
                      <option>Cash (USD)</option>
                  </Select>
                </Control>
              </FieldBody>
            </Field>

            <Field isHorizontal>
              <FieldLabel isNormal>
                <Label>Additional Information</Label>
              </FieldLabel>
              <FieldBody>
                <Control>
                    <Control>
                      <Input type="text" name="Special" placeholder='Time or special requests' />
                    </Control>
                </Control>
              </FieldBody>
            </Field>

            <Field isHorizontal>
              <FieldLabel isNormal>
                <Label>How did you hear about us?</Label>
              </FieldLabel>
              <FieldBody>
                <Control>
                    <Control>
                      <Input type="text" name="Tracking" placeholder='...' />
                    </Control>
                </Control>
              </FieldBody>
            </Field>

            <Field isHorizontal>
              <FieldLabel /> {/* empty for spacing */}
              <FieldBody>
                  <Field>
                      <Control>
                          <Button type="submit">Submit</Button>
                      </Control>
                  </Field>
              </FieldBody>
            </Field>
        </Column>
          <Column isSize={3}>
            <Field>
              <FieldLabel>
                <Title>Price</Title>
                <Subtitle>$ {this.state.price}</Subtitle>
              </FieldLabel>
            </Field>
          </Column>
        </Columns>
        <br/> <br/>
      </form>
    );
  }
};