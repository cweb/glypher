
// Process the action
function process(action) {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    if (action == "confuse") {
        output.value = confuse(input.value);
    }
    if (action == "shrink") {
        output.value = submit("shrink");
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
});