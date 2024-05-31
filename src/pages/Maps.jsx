import { useDispatch, useSelector } from 'react-redux';
import MapComponent from '../components/MapComponent';
import SearchComponent from '../components/SearchComponent';
import { useEffect } from 'react';
import { getDataMaps } from '../states/maps/action';

function Maps() {
    const dispatch = useDispatch();
    const maps = useSelector(state => state.maps);
    useEffect(() => {
        dispatch(getDataMaps());
    }, [dispatch]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <SearchComponent />
            <MapComponent mentors={maps}/>
        </div>
    );
}

export default Maps;