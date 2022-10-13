import { CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { CardSty } from "./CardStyle.css.ts";

export const CardCompo  = () => {
    return(     
        <CardSty>
            {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/Tree.jpeg" /> */}
            <CardContent>
                <Typography  variant='h4' gutterBottom>
                Choose the perfect design
                </Typography>
                <Typography variant='h5'>
                Create a beautiful blog that fits your style. Choose from a 
                selection of easy-to-use templates all with flexible layouts and 
                hundreds of background images or design something new.
                </Typography>
            </CardContent>
            <CardActions>
            <Button>Read More....</Button>
            </CardActions>
        </CardSty>
        
    )
}