import React from 'react';
import Test from './Test';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class ProductCard extends React.Component{

  constructor( props ){
    super( props );

    this.state = {
      name: "Nome Produto!",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qtdEstoque: 0,
      qtdAdicionarCarrinho: 0,
      imgSrc: "",
      categories: [ "camisa", "piercing" ]

    };


  }

  render(){
    // const useStyles = makeStyles({
    //   card: {
    //     maxWidth: 345,
    //   },
    //   media: {
    //     height: 140,
    //   },
    // });

    // const classes = useStyles();

    return(
      <div>

        <Card>
          <CardActionArea >
            <CardMedia
              // image={ this.state.imgSrc }
              image = ""
              title="Product Image"
            />
        
          </CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">  
              { this.state.name }
              {/* Nome do produto */}

            </Typography>
        
            <Typography variant="body2" color="textSecondary" component="p">
              { this.state.description }
              
              <hr></hr>
              Quantidade em Estoque: { this.state.qtdEstoque }
            </Typography>
                    
            <CardActions>
              <Icon onclick="funcao de decrementar qtdAdicionarCarrinho" >remove_circle</Icon>
              { this.state.qtdAdicionarCarrinho }
              <Icon onClick="funcao de incrementar qtdAdicionarCarrinho" >add_circle</Icon>
              
              {/* Categorias */}
              <Chip label= { this.state.categories[0] } />
              <Chip label= { this.state.categories[1] } />
          
            </CardActions>
            <Typography variant="body2" color="textPrimary" component="p">
              <hr />
            </Typography>

          <CardActions>
            <Button size="medium" variant="contained" color="secondary" onClick="funcao de adicionar produto ao ProductBasketList"> Adicionar ao Carrinho </Button>
          </CardActions>


          </CardContent>
        </Card>


      </div>
    )
  }
}
export default ProductCard;

