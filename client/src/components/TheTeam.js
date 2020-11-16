import React from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import Moran from '../pictures/team/Moran.jpg'
import Asaf from '../pictures/team/Asaf.jpg'
import Itay from '../pictures/team/Itay.jpg'


const TheTeam = () => (
    <div>
        <h1>Our Team</h1>
        <Grid columns={3} padded>
            <Grid.Column>
                <Card>
                    <Image src= {Itay} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Itay</Card.Header>
                        <Card.Meta>
                            <span className='date'>Developer</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card>
                    <Image src= {Moran} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Moran</Card.Header>
                        <Card.Meta>
                            <span className='date'>Developer</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Card>
                    <Image src= {Asaf} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Asaf</Card.Header>
                        <Card.Meta>
                            <span className='date'>Developer</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>

    </div>
)

export default TheTeam;