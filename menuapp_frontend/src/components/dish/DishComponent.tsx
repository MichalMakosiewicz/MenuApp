import React, {useEffect} from 'react';
import {DishModel} from '../../models/dish';
import {CardModel} from '../../models/card';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./DishComponent.css"


interface DishComponentInterface {
    dish: DishModel;
}

export function DishComponent(props: DishComponentInterface) {

    const {dish} = props;

    useEffect(() => {
        console.log(dish);
    }, [])

    const isVegan = () => {
        if (dish.is_vegan) {
            return "VEGAN";
        } else {
            return "";
        }
    }

    return (
        <div>
            <Card className='root'>
                <CardContent>
                    <div className="title">
                        <Typography className="title" variant="h5" gutterBottom>
                            {dish.name}
                        </Typography>
                        <div className="vegan-text">
                            {isVegan()}
                        </div>
                    </div>
                    <Typography component="h1">
                        {dish.description}
                    </Typography>
                    <img src={dish.photo}/>
                    <div className="create-update">
                        <Typography>
                            creation date: {dish.add_date}
                        </Typography>
                        <Typography>
                            update date: {dish.update_date}
                        </Typography>
                    </div>
                    <div className="price">
                        <Typography>
                            preparation time: {dish.preparation_time} min
                        </Typography>
                        <Typography variant="h5">
                            {dish.price},-
                        </Typography>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}