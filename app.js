const yargs = require('yargs')
const NoteUtils = require('./notes')

/* create yargs commands */
yargs.command({
    command : 'add',
    describe : 'Add new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        NoteUtils.addNote(argv.title, argv.body)
    }  
})

yargs.command({
    command : 'remove',
    describe : 'remove an existing note',
    builder: {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
    },
    handler(argv) {
        NoteUtils.removeNote(argv.title)
    }  
})

yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler() {
        NoteUtils.listNotes()
    }  
})

yargs.command({
    command : 'read',
    describe : 'read an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        NoteUtils.readNote(argv.title)
    }  
})


yargs.parse()
