import { IconButton } from "@mui/material"
import ZoomIn from "@mui/icons-material/ZoomIn"
import Dialog from "@mui/material"
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';

export default function ImageResult(){
    return(
        let imageListContent;
        const {images} = this.props;
        if(images){
imageListContent = (
    <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>xs=8</Item>
          {images.map(img => (
            <GridTile>
                title={img.tags}
                key={img.id}
                subtitle={
                    <span>
                        by <strong>{img.user}</strong>
                    </span>
                }
                actionIcon={
                    <IconBUtton>
                        <ZoomIn color="white"/>
                    </IconBUtton>
                }
                </
            </GridTile>
          ))}
        </Grid>
      </Grid>
)
        }

        <div>

        </div>
    )
}