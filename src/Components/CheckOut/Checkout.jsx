import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Checkout.css'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { pink } from '@mui/material/colors'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Button } from '@mui/material'

function Checkout(props) {
  const cart = [
    { name: 'mai', price: '22 $', quantity: '1', category: 'clothes' },
  ]
  let [otherChecked, setOtherChecked] = useState(false)

  const handleChangeRadio = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'other') {
      setOtherChecked(true)
    } else {
      setOtherChecked(false)
    }
  }

  return (
    <>
      <div className="checkout">
        <div className="container">
          <Row>
            <Col xs={12} md={7}>
              <form>
                {/* name */}
                <Row>
                  <Col xs={6}>
                    <TextField
                      className="textField"
                      id="filled-basic"
                      label="First Name"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                  <Col xs={6}>
                    <TextField
                      className="textField"
                      id="filled-basic"
                      label="Last Name"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                </Row>

                {/* email & address1,2  (full width)*/}
                <div className="address">
                  <TextField
                    className="textField"
                    fullWidth
                    id="filled-basic"
                    label="you@example.com"
                    variant="filled"
                    type="email"
                  />
                  <TextField
                    className="textField"
                    fullWidth
                    id="filled-basic"
                    label="Address 1"
                    variant="filled"
                    type="text"
                  />
                  <TextField
                    className="textField"
                    fullWidth
                    id="filled-basic"
                    label="Address 2"
                    variant="filled"
                    type="text"
                  />
                </div>
                {/*country,city,state */}
                <Row>
                  <Col xs={4}>
                    <TextField
                      className="textField"
                      id="filled-basic"
                      label="Country"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                  <Col xs={4}>
                    <TextField
                      className="textField"
                      id="filled-basic"
                      label="City"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                  <Col xs={4}>
                    <TextField
                      className="textField"
                      id="filled-basic"
                      label="zip code"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                </Row>
                <hr />
                {/* check box (save)*/}
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: pink[100],
                          '&.Mui-checked': {
                            color: pink[400],
                          },
                        }}
                      />
                    }
                    label="Shipping address is the same as my billing address"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: pink[100],
                          '&.Mui-checked': {
                            color: pink[400],
                          },
                        }}
                      />
                    }
                    label="Save my information"
                  />
                </FormGroup>
                <hr />
                {/* radio (payment method) */}
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Payment
                  </FormLabel>
                  <RadioGroup
                    onChange={handleChangeRadio}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Credit card"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Credit card"
                      control={
                        <Radio
                          sx={{
                            color: pink[100],
                            '&.Mui-checked': {
                              color: pink[400],
                            },
                          }}
                        />
                      }
                      label="Credit card"
                    />
                    <FormControlLabel
                      value="Debit card"
                      control={
                        <Radio
                          sx={{
                            color: pink[100],
                            '&.Mui-checked': {
                              color: pink[400],
                            },
                          }}
                        />
                      }
                      label="Debit card"
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Radio
                          sx={{
                            color: pink[100],
                            '&.Mui-checked': {
                              color: pink[400],
                            },
                          }}
                        />
                      }
                      label="Other"
                    />
                    {/* other method input */}
                    <TextField
                      className="payMethod"
                      id="filled-basic"
                      label="payment method"
                      variant="filled"
                      type="text"
                      style={{
                        display: otherChecked ? 'inline-block' : 'none',
                      }}
                    />
                  </RadioGroup>
                </FormControl>
                <hr />
                {/* card information */}
                <Row>
                  <Col xs={6}>
                    {' '}
                    <TextField
                      id="filled-basic"
                      className="textField"
                      label="Name On Card"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                  <Col xs={6}>
                    {' '}
                    <TextField
                      id="filled-basic"
                      className="textField"
                      label="Credit card number"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                  <Col xs={6}>
                    <TextField
                      id="filled-basic"
                      className="textField"
                      label="Expiration"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                  <Col xs={6}>
                    {' '}
                    <TextField
                      id="filled-basic"
                      className="textField"
                      label="CVV"
                      variant="filled"
                      type="text"
                    />
                  </Col>
                </Row>

                <button type="submit" className="btn btn-primary submitData">
                  Submit
                </button>
              </form>
            </Col>
            {/* cart/////////////////////////////////////////////////// */}
            <Col xs={12} md={5}>
              <div className="cart">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">Your cart</span>
                  <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3">
                  {cart.map((ele) => (
                    <li
                      key={ele.name}
                      class="list-group-item d-flex justify-content-between lh-condensed"
                    >
                      <div>
                        <h6 class="my-0">{ele.name}</h6>
                        <small class="text-muted">{ele.category}</small>
                      </div>
                      <span class="text-muted">
                        {ele.price}x
                        <span style={{ color: 'var(--main-color)' }}>
                          {ele.quantity}
                        </span>
                      </span>
                    </li>
                  ))}

                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                  </li>
                </ul>

                <form class="card p-2">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promo code"
                    />
                    <div class="input-group-append">
                      <button type="submit" class="btn btn-secondary">
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Checkout
