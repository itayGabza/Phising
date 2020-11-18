import React, { useEffect, useState }from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';
const headers = {
  'Content-Type': 'application/json'
}

const CardExampleCard = (props) => {
  const [upVote, setUpVote] = useState();
  const [downVote, setDownVote] = useState();


  useEffect(() => {
    setUpVote(props.upVote);
    setDownVote(props.downVote);
  }, []);

  const upVoteHandler = () => {
    console.log(props.id);
    const data = { imageId: props.id};
    axios.post('http://localhost:6060/image/upvote', data, {headers: headers})
    .then(res => {
      setUpVote(upVote + 1);
    })
    .catch(err => {
      console.log(err);
     
    })
  }
  const downVoteHandler = () => {
    const data = {imageId: props.id};
    axios.post('http://localhost:6060/image/downvote', data, {headers: headers})
    .then(res => {
      console.log(res);
      setDownVote(downVote +1);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  return (
    <Card>
      <Image src={props.logo} alt="logo"
        wrapped ui={false}
      />
      <Card.Content>
        <Card.Header>{props.id}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {props.author}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='thumbs up' onClick={upVoteHandler}/>
          {upVote}
        </a>
        <a>
          <Icon name='thumbs down' onClick={downVoteHandler} />
          {downVote}
        </a>
      </Card.Content>
    </Card>
  );
}


export default CardExampleCard;


/* const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
 */