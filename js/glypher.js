
// Process the action
function process(action) {
    var input = document.getElementById("input").value;
	alert(action + " " + data.length);
}

// Add event listeners once the DOM has fully loaded.
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
});