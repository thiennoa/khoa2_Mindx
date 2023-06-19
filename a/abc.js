// Javascript program for the above approach
 
// Function to print all the pendant
// vertices
function printPendantVertices(graph) {
  // All the vectors which contain only 1
  // vertex i.e, size 1 has only 1 edge
  // hence a pendant vertex.
  for (x of graph) {
    if (x[1].length == 1) {
      document.write(x[0] + " ");
    }
  }
}
 
// Driver Code
 
let graph = new Map();
graph.set("A", ["B"]);
graph.set("B", ["A"]);
graph.set("C", ["B"]);
graph.set("B", [...graph.get("B")].push("A"));
 
console.log(printPendantVertices(graph));
 
// This code is contributed by saurabh_jaiswal.