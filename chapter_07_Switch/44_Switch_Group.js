let browser = "Brave";

switch(browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
                console.log("Chromium Projects!");
                break;
    case "Firefox":
                console.log("Mozilla Project!");
                break;
    case "Safari":
                console.log("Apple Browser - uses Javascript Engine");
                break;
    default:
                console.log("Unknown Browser Found - need manual testing");
}