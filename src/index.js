import "./styles.css";
import { runCode } from "./exercise";

(() => {
  const array = [1, 2, 3, 4];
  
  document.getElementById("app").innerHTML = `
  <h1>Multiplicar elementos</h1>
  <p>Array de prueba <code>${array}</code></p>
  <p>
    <button id="button">Run Code</button>
  </p>
  <p>Response from <code>runCode</code></p>
  <p><pre><code id="rta"></code></pre></p>
  `;
  document.getElementById("button").addEventListener("click", () => {
    const rta = runCode(array);
    document.getElementById("rta").innerHTML=rta;
  }
  )

})();
