import { useEffect, useState } from "react";
import { TextField, Select, MenuItem, Box, Typography } from "@mui/material";
import axios from "axios";
import ImageResult from "../image-results/ImageResult";

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [amount, setAmount] = useState(15);
    const [images, setImages] = useState([]);
    const apiUrl = "https://pixabay.com/api";
    const apiKey = "46928046-865982fc22d15d4db400c45d6";
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImages = () => {
        if (!searchText) return;
        setLoading(true);
        setError(null);
        axios
            .get(
                `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
            )
            .then((res) => {
                setImages(res.data.hits);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch images");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchImages();
    }, [searchText, amount]);

    const onTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const onAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>

                <TextField
                    name="searchText"
                    value={searchText}
                    onChange={onTextChange}
                    label="Search for images"

                />
                <Typography variant="h6">
                    Amount:
                </Typography>
                <Select
                    name="amount"
                    value={amount}
                    onChange={onAmountChange}
                    displayEmpty
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </Box>


            {loading && <p>Loading images...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}


            <Box sx={{ mt: 4 }}>
                {images.length > 0 && <ImageResult images={images} />}
            </Box>
        </div>
    );
}
