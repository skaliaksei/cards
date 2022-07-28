import CostItem from "./CostItem";
import './Costs.css';
import Card from './Card';

function Costs(props) {
    return (
        <Card className='costs'>
            <CostItem date = {props.costs[0].date} description = {props.costs[0].description} price = {props.costs[0].price} />
            <CostItem date = {props.costs[1].date} description = {props.costs[1].description} price = {props.costs[1].price} />
            <CostItem date = {props.costs[2].date} description = {props.costs[2].description} price = {props.costs[2].price} />
            <CostItem date = {props.costs[3].date} description = {props.costs[3].description} price = {props.costs[3].price} />
        </Card>
    )
}

export default Costs;