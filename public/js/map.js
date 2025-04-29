
	// mapboxgl.accessToken = mapToken;
    // console.log(mapToken);
    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v9',
    //     // projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    //     zoom: 8,
    //     center: listing.geometry.coordinates,
    // });

    // const marker1 = new mapboxgl.Marker({color : "red"})
    //     .setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinates
    //     .setPopup(new mapboxgl.Popup({offset: 25})
    //     .setHTML(`<h4>${listing.title}</h4><p>Exacy Location will be provided after booking </p>`))
    //     .addTo(map);


    mapboxgl.accessToken = mapToken;
    console.log(mapToken);
    
    window.onload = function () {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 8,
            center: listing.geometry.coordinates,
        });
    
        const marker1 = new mapboxgl.Marker({ color: 'red' })
            .setLngLat(listing.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
            .addTo(map);
    };