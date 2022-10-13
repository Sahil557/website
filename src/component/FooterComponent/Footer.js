import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Container, Grid, Box, Link, Divider, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    button: {
        width: 5,
        marginTop: 10,
        borderRadius: 20,
        height: 40,
        zIndex: 1,
    }
});
export const Footer = () => {
    const classes = useStyles();
    return (
        <Box style={{ backgroundColor: 'darkgray', marginTop: '50px', padding: '140px' }}>
            <Container maxWidth='lg'>
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} color='black'>Help</Box>
                        <Divider />
                        <Box>
                            <Link href='/' color='inherit'>
                                contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Privacy policy
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} color='black'>Account</Box>
                        <Divider />
                        <Box>
                            <Link href='/' color='inherit'>
                                Register
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Login
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} color='black'>Support</Box>
                        <Divider />
                        <Box>
                            <Link href='/' color='inherit'>
                                FAQ
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Forgot Password
                            </Link>
                        </Box>

                    </Grid>
                </Grid>
            </Container>


            <Grid style={{ marginTop: '20px' }}>
                <Container>
                    <Button href='https://www.facebook.com/'
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<FacebookIcon style={{ mardinLeft: 20, fontSize: '25px', marginLeft: '11px' }} />}
                    />
                    <Button href='https://twitter.com/search?q=%23twitter'
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<TwitterIcon style={{ mardinLeft: 20, fontSize: '25px', marginLeft: '11px' }} />}
                    /><Button href='https://www.instagram.com/accounts/login/'
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<InstagramIcon style={{ mardinLeft: 20, fontSize: '25px', marginLeft: '11px' }} />}
                    /><Button href='https://www.youtube.com/'
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<YouTubeIcon style={{ mardinLeft: '12px', fontSize: '25px', marginLeft: '11px' }} />}
                    />




                </Container>
            </Grid>

        </Box>
    )
}