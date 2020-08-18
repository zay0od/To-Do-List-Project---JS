//Get the elements 

const Input = document.querySelector('.toDO_Input') ;
const Add_Button = document.querySelector('.toDo_BTN') ;
const Todo_Container = document.querySelector('.toDo_Container') ;
const Todo_List = document.querySelector('.MyToDo_list') ;
const DropMenu = document.querySelector('#dropMenu') ;

//Events

Add_Button.addEventListener('click' , addNewTask) ;
DropMenu.addEventListener('click', Filter) ;

//functions
function addNewTask(event){

//prevent defualt behavior
event.preventDefault() ;
if(Input.value !== ''){

//create a div and li for new taskl
const NewDiv = document.createElement('div') ;
const NewLi = document.createElement('li') ;

// add new class's to design them

NewDiv.classList.add('todo') ;
NewLi.classList.add('todo_item') ;


//pass input to li as string value
NewLi.innerText = Input.value ;

// add the li to the div
NewDiv.appendChild(NewLi) ;







//now we add the done & delete buttons in each li-----

const btn_div = document.createElement('div') ;



const Done_btn = document.createElement('button') ;
Done_btn.innerHTML =  '<i class="fas fa-check"></i>' ;
Done_btn.classList.add('Done_btn');
btn_div.appendChild(Done_btn) ;


const Trash_btn = document.createElement('button') ;
Trash_btn.innerHTML =  '<i class="fas fa-trash"></i>' ;
Trash_btn.classList.add('Trash_btn');
btn_div.appendChild(Trash_btn) ;

btn_div.classList.add('btn_div') ;
NewLi.appendChild(btn_div) 


 // last add to the ul li
Todo_List.appendChild(NewDiv) 






//---- Here we will add events to bothe check and trash buttons

Trash_btn.addEventListener('click' , function(event){

//event.target.remove()
const item = event.target
// buttom > div btn > (Myitem to be deleted)
const todoItem = item.parentElement.parentElement ;
// add animation before deleting
todoItem.setAttribute('class','fall')
//this waits till the animation ends
todoItem.addEventListener('transitionend' , ()=>{
    todoItem.remove() ;

});


}) ;



Done_btn.addEventListener('click' , function(event){
    console.log('hiii')
    //event.target.remove()
    const item = event.target
    
    // buttom > div btn >  li > whole one item div
    const todoItem = item.parentElement.parentElement ;

    todoItem.classList.toggle('Done_item')
    if(item.id === ''){
    
    item.setAttribute('id','clicked');
    }else{
        
        item.setAttribute('id','');
    }

    
    }) ;






//Clear the input bar
Input.value = '';
}
}


function Filter(event){

    const All_Tasks = document.querySelectorAll('li'); //bring all child nodes


    if(DropMenu.value === 'all'){

          //loop through all elements
          All_Tasks.forEach(function(element){
           
                // display all
                element.style.display ='flex'

        }) ;  
       
    }else if(DropMenu.value === 'Completed'){

     
        
        //loop through all elements
        All_Tasks.forEach(function(element){
           
            if(element.classList.contains("Done_item")){
                element.style.display ='flex'
            }else{
                element.style.display ='none'
            }



        }) ;     

    }else if(DropMenu.value === 'Uncompleted'){
             //loop through all elements
             All_Tasks.forEach(function(element){
           
                if( !element.classList.contains("Done_item")){
                    element.style.display ='flex'
                }else{
                    element.style.display ='none'
                }
    
    
    
            }) ;  
       

    }

}

