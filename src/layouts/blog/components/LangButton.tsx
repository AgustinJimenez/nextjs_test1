import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '@material-ui/core/Container'

const defaultLang: string = 'es'
const languages: any = {
    es: {
        label: 'Español',
    },
    eng: {
        label: 'Ingles',
    },
    pr: {
        label: 'Portugues',
    },
    fr: {
        label: 'Frances',
    },
}

const LangButton = (props: any) => {
    const [langDialogIsOpen, changeLangDialogState] = React.useState(false)
    const [pageLang, changePageLange] = React.useState(defaultLang)

    return (
        <Container disableGutters>
            <Button fullWidth variant='outlined' /* color='secondary' */ size='small' onClick={() => changeLangDialogState(true)}>
                Language
            </Button>
            <Dialog open={langDialogIsOpen} onClose={() => changeLangDialogState(false)}>
                <DialogTitle>Cambiar Idioma</DialogTitle>
                <List>
                    {Object.keys(languages).map((lang_id: string, key: number) => (
                        <ListItem button selected={pageLang === lang_id} key={key} onClick={() => changePageLange(lang_id)}>
                            <ListItemText primary={languages[lang_id]['label']} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </Container>
    )
}

export default LangButton
