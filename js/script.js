




function import_script(var URI){

    if(!empty(URI)){
        var script_tag = document.createElement("script");
        script_tag.src = URI;
        script_tag.async = false;
        document.head.appendChild(script_tag);
    }
}