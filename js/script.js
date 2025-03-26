
"use strict";



function import_script(let URI){

        var script_tag = document.createElement("script");
        script_tag.src = URI;
        script_tag.async = false;
        document.head.appendChild(script_tag);
    
}