document.querySelector('#push').onclick = function(){
    if(document.querySelector('#list input').value.length == 0){
        alert("Add a new Task")
    }
    else{
        document.querySelector('#newtask').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#list input').value}
                </span>
                <button class="delete">
                       <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var recent_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<recent_tasks.length; i++){
            recent_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";

    }
}