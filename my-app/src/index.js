import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Segment, Grid, List, Icon, Dropdown } from 'semantic-ui-react';



  class TopImage extends React.Component {
    render() {
      return (

            <Image style={{marginTop: '20px'}} className="eslogo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91e47ed1-8400-4c67-815f-7a4ba626767e/d5792eu-384542ad-5377-49d7-8a98-1c6b5926fef5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxZTQ3ZWQxLTg0MDAtNGM2Ny04MTVmLTdhNGJhNjI2NzY3ZVwvZDU3OTJldS0zODQ1NDJhZC01Mzc3LTQ5ZDctOGE5OC0xYzZiNTkyNmZlZjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ag4AGkUrPO_w6HhwoNmUrU0r1fbsl6uIlEjfPEnisSg" size="medium" centered />

      )
    }
  }

  class TopMenu extends React.Component {

    render() {
      return (
          <Menu borderless style={{border: "none"}}>
            <Grid container centered>
              <Grid.Row columns={12}>
              <Grid.Column>
              <Menu.Item style={{fontSize: "1.2em"}}><p>Home</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Tour</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Music + Videos</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Photos</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Dropdown item text="Links" style={{fontSize: '1.2em'}}>
                </Dropdown>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item style={{fontSize: "1.2em"}}><p>Store</p></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Dropdown item text="Follow" style={{fontSize: '1.2em'}}>
                </Dropdown>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </Menu>
      )
    }
  }

  class Backgroundimg extends React.Component {
    render() {
      return (
            <Image src="https://www.edsheeran.com/sites/g/files/g2000006291/f/201912/ed%20thumb.jpg" centered size="massive" />

      )
    }
  }

class Footer extends React.Component {
  render() {
    return (

        <div style={{backgroundColor: "grey", paddingTop: '20px', marginTop: '40px', paddingBottom: '40px'}}>
          <Container className="footerBackground" style={{paddingTop: '20px'}}>
            <Grid style={{backgroundColor: "grey"}}>
              <Grid.Row>
                <Grid.Column>
                  <List style={{textAlign: "center", color: "white", backgroundColor: "grey", fontSize: '1.2em'}}>
                    <List.Item>Website built by AE Designers</List.Item>
                    <List.Item>Follow on Social Media for more!</List.Item>
                  </List>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}

  class IslandSnow extends React.Component {

    render() {
      return (
          <div>
            <TopImage/>
            <TopMenu />
            <Backgroundimg />
            <Footer />
          </div>
      );
    }
  }

  ReactDOM.render(<IslandSnow/>, document.getElementById('root'));