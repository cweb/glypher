
// Process the action
function process(action) {
    var input = document.getElementById("input");
    if (action == "confuse") {
        input.value = confuse(input.value);
    }
    if (action == "shrink") {
        input.value = submit("shrink");
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