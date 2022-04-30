import { Card as Card2, Button as Button2 } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Card = (props) => {
  return (
    <div>
      <Card2 sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.shortdescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button2 size="small">Share</Button2>
          <Button2 size="small">Learn More</Button2>
        </CardActions>
      </Card2>
    </div>
  );
};
