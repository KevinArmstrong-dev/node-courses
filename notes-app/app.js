const chalk = require('chalk');
const { describe, demandOption } = require('yargs');
const yargs= require('yargs'); //usful for args parsing
const notes = require('./notes.js');


//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true, //required
            type: 'string'
        },
        body:{
            describe:'Note Content',
            demandOption:true, //required
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body);
        // console.log('Title: '+ argv.title);
        // console.log('Body: '+argv.body);
    }
})

//create remove command

yargs.command({
    command:'remove',
    describe : 'Remove a note',
    handler: function(){
        console.log("Removing a note");
    }
})

//create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function(){
        console.log("Reading a note !!");
    }
})

//create a list command

yargs.command({
    command:'list',
    describe: 'Print the list of notes',
    handler: function(){
        console.log('Printing list')
    }
})


yargs.parse();
//console.log(yargs.argv);
