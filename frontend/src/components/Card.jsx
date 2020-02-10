import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import StarRateIcon from '@material-ui/icons/StarRate';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardModal from "./CardModal.jsx";
import styles from "./Card.module.scss";

export const JtrayCard = ({ text, snapshot }) => {
  const [open, setOpen] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  let admin = false
  return (
    <div>
      <Card className={snapshot.isDragging ? styles.move : styles.static}>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          action={admin ? <CardModal /> : <div onClick={() => setFavorite(!favorite)} className={favorite ? styles.starfavorite : styles.star}></div>}
        />

        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
