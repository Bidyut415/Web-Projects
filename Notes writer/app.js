const addbtn = document.querySelector("#addbtn");//fetch the button tag
const main=document.querySelector("#main");


// use to creat a note box in main section
addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

//describe the save note function here
function saveNote(){
    const notes=document.querySelectorAll(".note textarea");//fetch all text form text area
    const data=[];
    // push all the textarea node into data
    notes.forEach(
        (note)=>data.push(note.value)
    )


    if(data.length===0){
        localStorage.removeItem("notes")// if local storage emty then remove notebox
    }else{

    //store the all nodes into the local storage
    localStorage.setItem("notes",JSON.stringify(data))//using json data convert into string
    }
}


// here the add note function start
 function addNote(text=""){
    const note= document.createElement("div");// create a div box here 
    note.classList.add("note")// set the class note into the div 
    note.innerHTML=`
    <div class="tool">
                <i class=" save far fa-save"></i>
                <i class="trash far fa-trash-alt"></i>
            </div>
            <textarea>${text}</textarea>
    `;// create the notebox here 

    // this event work for delete the note
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            saveNote()
        }
    )

    // this event work for save the note 
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNote()// call here the save function
        }
    )

// use it for auto save
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNote()
        }
    )

    main.appendChild(note);// using this note add to the main box
    saveNote()
}


// self call function to ahow the firse note box
(
    function(){
        // fetch all the nodes form local storage
        const lsnotes=JSON.parse(localStorage.getItem("notes"));
        

        if(lsnotes===null){

            addNote()
        }
        else{

            lsnotes.forEach(
                (lsnotes)=>{
                    addNote(lsnotes)
                }
            )
        }

     }
)()
// end self call function