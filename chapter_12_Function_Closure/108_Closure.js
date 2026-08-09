function startBrowser() {
    let name = "edge";

    function installBrowser(){
        console.log(name);
        let fail = true;
        if(fail) {
            console.log("Failed!");
        }
    }

    return installBrowser; // This startBrowser() function is returning installBrowser function.
}

const browser = startBrowser();
browser();

// installBrowser(); // ReferenceError: installBrowser is not defined ? - because I can not call this because this is under function.
