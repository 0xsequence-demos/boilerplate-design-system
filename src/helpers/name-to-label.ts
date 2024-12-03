export function nameToLabel(input) {
  if (!input || typeof input !== "string") {
    throw new Error("Input must be a non-empty string");
  }

  let result = "";

  if (/^[a-z]+(_[a-z]+)*$/.test(input)) {
    // Snake case: "hello_world" -> "hello world"
    result = input.replace(/_/g, " ");
  } else if (/^[a-z]+(-[a-z]+)*$/.test(input)) {
    // Kebab case: "hello-world" -> "hello world"
    result = input.replace(/-/g, " ");
  } else if (
    /^[A-Z][a-zA-Z]*$/.test(input) ||
    /^[a-z]+([A-Z][a-z]*)*$/.test(input)
  ) {
    // PascalCase or camelCase: "HelloWorld" or "helloWorld" -> "hello world"
    result = input
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Handle acronyms like "HTTPResponse"
  } else {
    throw new Error(
      "String format not recognized as snake, kebab, Pascal, or camel case"
    );
  }

  // Convert to sentence case
  result = result.trim().toLowerCase();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
