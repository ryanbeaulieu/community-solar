import React, {Component} from 'react';
import {Typography, TextField, Button, Card, CardHeader, CardContent, Avatar} from '@material-ui/core';

import {Zipcode} from '../../components/Zipcode/Zipcode';

export class Home extends Component {

    render() {
        return (
            <>
            <section className="bg-gray">
            <div className="container">
              <img src="https://images.clickfunnels.com/62/bae865699b44579d7555506741cea5/csa-logo-new.png" style={{display: "flex", margin: "0 auto 2.5rem auto"}} />
              <Typography variant="h3" component="h1" style={{maxWidth: "40ch", marginLeft: "auto", marginRight: "auto"}} align="center">Save 10% on annual electric costs by enrolling in your local Community Solar Farm</Typography>
              <Typography variant="subtitle1" component="div" align="center">Enter your zip code below to see if you're eligible.</Typography>
              <Zipcode />
            </div>
          </section>
          <section>
            <div className="container">
              <Typography variant="h2" align="center">How it works</Typography>
              <div className="row">
                <div className="column quarter">
                  <img className="png-icon" src="./images/pre-screen.png" loading="lazy" />
                  <Typography variant="h4" component="div" color="primary" align="center">Step 1</Typography>
                  <Typography varinat="body1"><strong>Pre-screening</strong> - fill out the quick survey to see if you qualify for Community Solar</Typography>
                </div>
                <div className="column quarter">
                  <img className="png-icon" src="./images/conversation-chat.png" loading="lazy" />
                  <Typography variant="h4" component="div" color="primary" align="center">Step 2</Typography>
                  <Typography varinat="body1"><strong>Initial Consultation</strong> - if you qualify for community solar, our energy-saving experts will reach out to you by email or phone to discuss the next steps.</Typography>
                </div>
                <div className="column quarter">
                  <img className="png-icon" src="./images/piggy-bank.png" loading="lazy" />
                  <Typography variant="h4" component="div" color="primary" align="center">Step 3</Typography>
                  <Typography varinat="body1"><strong>Saving</strong> - expect 10% off your annual electric costs at NO cost to you</Typography>
                </div>
                <div className="column quarter">
                  <img className="png-icon" src="./images/business-deal.png" loading="lazy" />
                  <Typography variant="h4" component="div" color="primary" align="center">Step 4</Typography>
                  <Typography varinat="body1"><strong>Referral</strong> - take advantage of our referral system. Refer anyone you know to take advantage of the 10% off electricity cost!</Typography>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray">
            <div className="container">
            <Typography variant="h3" component="h2" align="center" style={{maxWidth: "55ch", marginLeft: "auto", marginRight: "auto"}}>Have the savings benefits of solar without the unnecessary cost of solar panels</Typography>
              <div className="row">
                <div className="column third">
                  <img className="png-icon" src="./images/annual-savings.png" loading="lazy" />
                  <Typography variant="body1">Save up to 10% on annual electricity costs</Typography>
                </div>
                <div className="column third">
                  <img className="png-icon" src="./images/no-cancellation-fees.png" loading="lazy" />
                  <Typography variant="body1">Save up to 10% on annual electricity costs</Typography>
                </div>
                <div className="column third">
                  <img className="png-icon" src="./images/no-solar-panels.png" loading="lazy" />
                  <Typography variant="body1">Save up to 10% on annual electricity costs</Typography>
                </div>
                <div className="column third">
                  <img className="png-icon" src="./images/no-signup-fees.png" loading="lazy" />
                  <Typography variant="body1">Save up to 10% on annual electricity costs</Typography>
                </div>
                <div className="column third">
                  <img className="png-icon" src="./images/stay-with-utility.png" loading="lazy" />
                  <Typography variant="body1">Save up to 10% on annual electricity costs</Typography>
                </div>
                <div className="column third">
                  <img className="png-icon" src="./images/clean-energy.png" loading="lazy" />
                  <Typography variant="body1">Save up to 10% on annual electricity costs</Typography>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <Typography variant="h2" component="h4" align="center">A Trusted Provider</Typography>
              <Typography variant="body1">Community Solar Authority is helping small business owners save money on their electricity bills during these tough times we are all facing. Choosing to go with Community Solar will save you up to 10% off your electricity cost at absolutely NO cost to you. </Typography>
            </div>
          </section>
          <section className="bg-gray">
            <div className="container">
              <Typography variant="h2" component="h3" align="center">Here's what others are saying</Typography>
              <div className="row">
                <div className="column third">
                  <Card>
                    <CardHeader avatar={<Avatar className="card-avatar" imgProps={{loading: "lazy"}} alt="Jessica" src="https://images.clickfunnels.com/38/b51754458c4daf8ffc150338b3c6e2/woman-2_1x.png" />}></CardHeader>
                    <CardContent>
                      <Typography variant="h5" component="div">"When they said it was free, I was skeptical. Turns out, it was the TRUTH. I am now saving 10% on my annual electricity costs!"</Typography>
                    </CardContent>
                    <Typography variant="body1" align="center">- Jessica R.</Typography>
                  </Card>
                </div>
                <div className="column third">
                  <Card>
                    <CardHeader avatar={<Avatar imgProps={{loading: "lazy"}} className="card-avatar" alt="Kathy" src="https://images.clickfunnels.com/fe/f580aa069b4c00b6d78d41f7bab682/woman-1_1x.png" />}></CardHeader>
                    <CardContent>
                      <Typography variant="h5" component="div">""Easy is what I expected and that's exactly what we got."</Typography>
                    </CardContent>
                    <Typography variant="body1" align="center">- Jessica R.</Typography>
                  </Card>
                </div>
                <div className="column third">
                  <Card>
                    <CardHeader avatar={<Avatar imgProps={{loading: "lazy"}} className="card-avatar" alt="Brian" src="https://images.clickfunnels.com/d0/69fa4ee9f441b9b720f54a1ad77d9f/man_1x.png" />}></CardHeader>
                    <CardContent>
                      <Typography variant="h5" component="div">"The $100 referral fee has generated me an extra $1,000 in 45 days on top of the 10% I save on my electric!"</Typography>
                    </CardContent>
                    <Typography variant="body1" align="center">- Jessica R.</Typography>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <section className="ready-to-save">
            <div className="background-overlay">
              <div className="container">
                <Typography variant="h2" component="h5" color="inherit" style={{maxWidth: "45ch", marginLeft: "auto", marginRight: "auto", textShadow: "0 0 10px rgba(0,0,0,0.75)"}} align="center">Ready to Save? Not only your wallet -- but the planet, too?</Typography>
                <Typography variant="subtitle1" align="center" color="inherit">Join the millions of small business owners who subscribed to community solar and save!</Typography>
                <Zipcode />
              </div>
            </div>      
          </section>
          </>
        )
    }
}