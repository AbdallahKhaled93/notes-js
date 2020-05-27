const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes ...'
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return (JSON.parse(dataJSON))
    } catch (error) {
        return []
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()

    /* check if the title already exists */
    const duplicateNote = notes.find( (note) => note.title === title )

    if(duplicateNote === undefined)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note is added successfully'))
    }
    else
    {
        console.log(chalk.red('Title already in use'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !== title )

    if(notes.length > notesToKeep.length)
    {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note is removed successfully'))
    }
    else
    {
        console.log(chalk.red('Note not found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.bold.blue('Your notes :'))
    notes.forEach(note => {
        console.log(chalk.bold(note.title))
        console.log(note.body)
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteToBeRead = notes.find( (note) => note.title === title )

    if(noteToBeRead)
    {
        console.log(chalk.inverse.blue(noteToBeRead.title))
        console.log(noteToBeRead.body)
    }
    else
    {
        console.log(chalk.red('Note not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}