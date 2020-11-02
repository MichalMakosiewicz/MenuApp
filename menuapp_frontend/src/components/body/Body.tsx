import React, {useEffect, useState} from 'react';
import {CardComponent} from '../card/CardComponent';
import {CardModel} from '../../models/card'
import {DishModel} from '../../models/dish'
import {ColDef, DataGrid, RowParams} from '@material-ui/data-grid';
import "./Body.css";
import {Dialog} from "@material-ui/core";

export function Body() {
    const [selectedCard, setSelectedCard] = useState();
    const [cards, setCards] = useState([]);
    const [dishes, setDishes] = useState<DishModel[]>([]);
    const [cardsDishAmount] = useState<any>({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch('http:///127.0.0.1:8000/menu/api/cards/')
            .then(response => response.json())
            .then(data => {
                const cards = data.map((card: any) => new CardModel(card));
                console.log(cards)
                setCards(cards);
                cards.forEach((card: CardModel) => {
                    cardsDishAmount[card.id] = card.dish.length;
                })
            })
        fetch('http:///127.0.0.1:8000/menu/api/dishes/')
            .then(response => response.json())
            .then(data => {
                const dishes = data.map((dish: any) => new DishModel(dish));
                setDishes(dishes);
            })
    }, [])

    const openMenu = (rowData: RowParams) => {
        setSelectedCard(rowData.data)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const columns: ColDef[] = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'title', headerName: 'Title', width: 400},
        {field: 'create_date', headerName: 'Create Date', width: 120},
        {field: 'update_date', headerName: 'Update Date', width: 120},
        {
            field: 'dishes',
            headerName: 'Dishes',
            width: 100,
            sortable: true,
            valueGetter: (params) => {
                const dishId = params.getValue("id");
                // @ts-ignore
                return `${cardsDishAmount[dishId]}`
            }
        },
    ];

    return (
        <div className="root-body">
            <DataGrid onRowClick={(rowData: RowParams) => openMenu(rowData)} rows={cards} columns={columns}
                      pageSize={10}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <CardComponent card={selectedCard} dishes={dishes}/>
            </Dialog>
        </div>
    );
}