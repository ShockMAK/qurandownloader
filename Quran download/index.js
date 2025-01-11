
document.getElementById("dwn1").addEventListener("click", function() {
    var zipFilePath = "QURAN/SHEIKH YASSER AL DOSARI COMPLETE QURAN.zip";
    var link = document.createElement("a");
    link.href = zipFilePath;
    link.download = "SHEIKH_YASSER_AL_DOSARI_COMPLETE_QURAN.zip";    
    link.click();
  
});
