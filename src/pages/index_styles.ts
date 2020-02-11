import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme: any) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}))
