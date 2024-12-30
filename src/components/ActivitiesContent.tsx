import React from 'react';
import { Typography, Box, Paper, Grid, Link } from '@mui/material';
import Map from './Map';
import LocationCard from './LocationCard';
import type { Location } from './Map';

const touristLocations: Location[] = [
    {
        name: "Hagia Sophia",
        description: "A magnificent structure that served as a church, mosque, museum, and now a mosque again. This architectural marvel showcases Byzantine and Ottoman influences.",
        coordinates: [41.0086, 28.9802]
    },
    {
        name: "AKM (Atatürk Cultural Center)",
        description: "Modern cultural complex featuring opera, theatre, art galleries, and events. Home to Türk Telekom Opera Hall, multiple performance venues, and a cultural street with cafes and exhibitions.",
        coordinates: [41.0370, 28.9881]
    },
    {
        name: "Yedikule Zindanları (Dungeons)",
        description: "Historic fortress and former prison with dark history. Part of the ancient city walls, this fortress-prison offers a glimpse into Ottoman and Byzantine history.",
        coordinates: [40.9933, 28.9225]
    },
    {
        name: "Topkapi Palace",
        description: "Former residence of Ottoman sultans, now a museum showcasing imperial collections, sacred relics, and stunning architecture with views of the Bosphorus.",
        coordinates: [41.0115, 28.9833]
    },
    {
        name: "Blue Mosque",
        description: "Famous for its blue tile interior and six minarets, this iconic mosque is a masterpiece of Ottoman architecture.",
        coordinates: [41.0054, 28.9768]
    },
    {
        name: "Grand Bazaar",
        description: "One of the world's oldest and largest covered markets with over 4,000 shops selling carpets, jewelry, ceramics, and more.",
        coordinates: [41.0108, 28.9680]
    },
    {
        name: "Egyptian Bazaar (Spice Bazaar)",
        description: "Historic market filled with aromatic spices, Turkish delight, teas, and traditional goods. A feast for all senses.",
        coordinates: [41.0165, 28.9707]
    },
    {
        name: "Galatasaray Hamamı (Turkish Bath)",
        description: "Historic Turkish bath from the 1400s offering traditional hammam experience. Located on İstiklal Avenue, it's one of the oldest hammams in Istanbul.",
        coordinates: [41.0331, 28.9773]
    },
    {
        name: "Basilica Cistern",
        description: "Ancient underground water reservoir with stunning architecture and mystical atmosphere.",
        coordinates: [41.0084, 28.9779]
    },
    {
        name: "Galata Tower",
        description: "Medieval stone tower offering panoramic views of Istanbul's historic peninsula and the Bosphorus.",
        coordinates: [41.0256, 28.9741]
    },
    {
        name: "Dolmabahce Palace",
        description: "19th-century Ottoman palace showcasing European architecture and luxurious interiors.",
        coordinates: [41.0391, 29.0007]
    },
    {
        name: "Suleymaniye Mosque",
        description: "Ottoman imperial mosque with stunning architecture and panoramic views of the city.",
        coordinates: [41.0163, 28.9634]
    }
];

const ActivitiesContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Must-Visit Places in Istanbul 🏛️
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Map locations={touristLocations} />
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    Istanbul is a city where East meets West, blending centuries of history with modern attractions.
                    Here are the must-visit places that showcase the city's rich cultural heritage and vibrant atmosphere.
                </Typography>

                <Grid container spacing={3}>
                    {touristLocations.map((location, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <LocationCard
                                location={location}
                                extraInfo={
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                        {location.name === "AKM (Atatürk Cultural Center)" && (
                                            <>
                                                ⏰ Hours vary by event | 🎭 Opera, theatre, exhibitions | 🎫 Check events and book tickets at{' '}
                                                <Link
                                                    href="https://akmistanbul.gov.tr/events"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{ color: 'primary.main' }}
                                                >
                                                    akmistanbul.gov.tr/events
                                                </Link>
                                            </>
                                        )}
                                        {location.name === "Hagia Sophia" && "⏰ Open daily for visits (except prayer times) | 🎫 Free entrance"}
                                        {location.name === "Yedikule Zindanları (Dungeons)" && "⏰ 9:00 AM - 5:00 PM (Closed on Mondays) | 🎫 Paid entrance | 🚶‍♂️ Wear comfortable shoes"}
                                        {location.name === "Topkapi Palace" && "⏰ 9:00 AM - 6:00 PM (Closed on Tuesdays) | 🎫 Paid entrance"}
                                        {location.name === "Blue Mosque" && "⏰ Open daily (except prayer times) | 🎫 Free entrance"}
                                        {location.name === "Grand Bazaar" && "⏰ 8:30 AM - 7:00 PM (Closed on Sundays) | 🛍️ Bring cash"}
                                        {location.name === "Egyptian Bazaar (Spice Bazaar)" && "⏰ 8:30 AM - 7:00 PM (Open daily) | 🛍️ Bring cash for best deals"}
                                        {location.name === "Galatasaray Hamamı" && "⏰ 7:00 AM - 10:00 PM | 🎫 Paid service | 🧖‍♂️ Bring swimwear"}
                                        {location.name === "Basilica Cistern" && "⏰ 9:00 AM - 7:00 PM | 🎫 Paid entrance"}
                                        {location.name === "Galata Tower" && "⏰ 8:30 AM - 11:00 PM | 🎫 Paid entrance"}
                                        {location.name === "Dolmabahce Palace" && "⏰ 9:00 AM - 4:00 PM (Closed on Mondays) | 🎫 Paid entrance"}
                                        {location.name === "Suleymaniye Mosque" && "⏰ Open daily (except prayer times) | 🎫 Free entrance"}
                                    </Typography>
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default ActivitiesContent;