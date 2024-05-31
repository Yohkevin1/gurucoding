import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchMentorsInMaps } from '../states/maps/action';

const SearchComponent = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [radius, setRadius] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        dispatch(searchMentorsInMaps({ search: searchInput, latitude, longitude, radius }));
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }
    }, []);

    const search_box = {
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={search_box} >
            <form id="search-form" onSubmit={handleSearch}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        name="search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Cari berdasarkan skill"
                    />
                    <input
                        type="hidden"
                        name="latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                    <input
                        type="hidden"
                        name="longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        name="radius"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
                        placeholder="Radius (km)"
                    />
                    <button className="btn btn-primary" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchComponent;
