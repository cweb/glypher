
// Process the action
function process(action) {
    var input = document.getElementById("input");
    if (action == "confuse") {
        output.innerHTML = confuse(input.value);
    }
    if (action == "mirror") {
        output.innerHTML = mirror(input.value);
    }
    if (action == "reverse") {
        output.innerHTML = reverse(input.value);
    }
    if (action == "shrink") {
        output.innerHTML = shrink(input.value);
    }
    if (action == "bold") {
        output.innerHTML = bold(input.value);
    }
    if (action == "clear") {
        input.value = "";
    }
}


// Add event listeners once the DOM has fully loaded.

// Add button click actions here
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit-confuse').addEventListener('click', 
        function() {
            process("confuse");
        }
    );
    document.getElementById('submit-mirror').addEventListener('click', 
        function() {
            process("mirror");
        }
    );
    document.getElementById('submit-reverse').addEventListener('click', 
        function() {
            process("reverse");
        }
    );
    document.getElementById('submit-shrink').addEventListener('click', 
        function() {
            process("shrink");
        }
    );
    document.getElementById('submit-clear').addEventListener('click', 
        function() {
            process("clear");
        }
    );
});