import GridDisplay from './GridDisplay';
import { changeCurrentTarget } from './../actions';
import { useSelector, useDispatch } from 'react-redux';

function UI(){
    const currentTarget = useSelector(state => state.currentTarget);
    const dispatch = useDispatch();    
return(
        <div>
            <GridDisplay/>
        </div>
    );
}




