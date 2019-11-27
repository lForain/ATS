import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class ProductBasketList extends React.Component{
  // constructor( props ){
  //   super( props );
  // }

  render(){
    return(
      <div className="col s10 offset-s1">         

          <List className="">
            <ListItem alignItems="flex-start">
              
              <ListItemAvatar>
                <Avatar alt="Product Image" src="" />
              </ListItemAvatar>
              
              <ListItemText
                primary="Pequena descricao do produto..."
                secondary={
                <React.Fragment>
                <Typography component="span" variant="body2" className="" color="textPrimary" >
                  Quantidade de produtos adicionados aqui nesse carrinho
                </Typography>
                </React.Fragment> }
              />
              <Divider variant="inset" component="li" />
            </ListItem>
          </List>
      </div>

    )

  }

}

export default ProductBasketList;
