import { IconButton, Dialog, Grid, DialogTitle, DialogActions, Button } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useState } from "react";

export default function ImageResult({ images }) {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickOpen = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <Grid container spacing={2} justifyContent="center">
                {images.map((img) => (
                    <Grid item xs={12} sm={6} md={4} key={img.id}>
                        <div>
                            <img
                                src={img.webformatURL}
                                alt={img.tags}
                                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", cursor: "pointer" }}
                                onClick={() => handleClickOpen(img)}
                            />
                            <IconButton sx={{
                                position: "absolute", top: 10, right: 10, backgroundColor: "rgba(0, 0, 0, 0.6)",
                                borderRadius: "50%",
                                padding: "8px",
                            }}>
                                <ZoomInIcon color="primary" />
                            </IconButton>
                        </div>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog for image enlargement */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Image Details</DialogTitle>
                <img src={selectedImage?.largeImageURL} alt="" style={{ width: "100%", objectFit: "contain", borderRadius: "5px" }} />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
