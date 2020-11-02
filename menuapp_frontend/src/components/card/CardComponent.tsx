import React, {useEffect} from 'react';
import {DishModel} from '../../models/dish';
import {CardModel} from '../../models/card';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {DishComponent} from '../dish/DishComponent';
import "./CardComponent.css"

interface CardPropsInterface {
    card: any;
    dishes: DishModel[];
}

export function CardComponent(props: CardPropsInterface) {
    const {card, dishes} = props;

    const cardDishes = card.dish.map((dish: number, index: string | number | null | undefined) => {
        if (!card.dish) {
            return [];
        }
        // @ts-ignore
        return <DishComponent key={index} dish={dishes.find(model => model.id === dish)}/>
    });

    return (
        <div>
            <Card className='root'>
                <CardContent>
                    <Typography className="title" variant="h5" gutterBottom>
                        {card.title}
                    </Typography>
                    <div className="info">
                        <Typography color="primary" variant="subtitle2">
                            last update date: {card.update_date}
                        </Typography>
                        <Typography color="primary" variant="subtitle2">
                            creation date: {card.create_date}
                        </Typography>
                    </div>
                    <br/>
                    <div className="dish-boundary">
                        {cardDishes}
                    </div>
                </CardContent>
                <br />
            </Card>
        </div>
    )
}