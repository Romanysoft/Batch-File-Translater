(function () {
    window.RTYConfig = {
        appName:"Batch File Translater",
        appID:"com.romanysoft.app.macos.FileTranslater",
        documentTitle:"BatchFileTranslater By Romanysoft",
        supportPlatforms:["Mac"],
        googleUA:"UA-76676167-7",
        gitHome:"//github.com/Romanysoft/Batch-File-Translater",
        reportIssueUrl:"//github.com/Romanysoft/Batch-File-Translater/issues",
        changeLogUrl:"//github.com/Romanysoft/Batch-File-Translater/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/Batch-File-Translater/wiki",
        jumpLocation:"https://www.romanysoft.net/batch-file-translater/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }
})();