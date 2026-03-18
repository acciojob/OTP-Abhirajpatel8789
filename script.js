let inputs = document.querySelectorAll(".code");

// ✅ Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        let value = e.target.value;

        // ❌ You forgot to clear invalid input
        if (isNaN(value)) {
            e.target.value = "";   // FIX
            return;
        }

        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});
// window.addEventListener("load",()=>{
// 	document.getElementById("code-1").style.focuse=true
// })