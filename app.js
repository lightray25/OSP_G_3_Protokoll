var showSnippets = 0;
var addPointLimiter = 0;
var invitesLimiter= 0;
var voteLimiter= 0;
var pointVoteLimiter = 0;
var voteLastLimiter = 0;
var miscLimiter = 0;
var snippetTop = 60;
var test = "addedFields" + addPointLimiter;
var AreaTop= addPointLimiter + "TopArea";
var AreaMisc = miscLimiter+ "miscArea";
var activeTextarea;
var startPos;
var endPos;
var area;

function onMouseDown(e) {
    activeTextarea = document.activeElement;
    startPos = activeTextarea.selectionStart;
    endPos = activeTextarea.selectionEnd;
    area = activeTextarea.id;
}


document.getElementById('showSnippets').addEventListener('click', function () {
    if (showSnippets== 0){
        document.getElementById('snippets').classList.add('opened');
        console.log(test);
        showSnippets = 1;
    }
    else { showSnippets = 0;
            document.getElementById('snippets').classList.remove('opened');
         }

});

document.getElementById('invites').addEventListener('click', function () {
        activeTextarea.value = activeTextarea.value.substring(0, startPos)
            + "(XX) stellt fest, dass fristgerecht eingeladen wurde."
            + activeTextarea.value.substring(endPos, activeTextarea.value.length);
        document.getElementById('snippets').style.top = snippetTop+20+"%"
    
});

document.getElementById('vote').addEventListener('click', function () {
        activeTextarea.value = activeTextarea.value.substring(0, startPos)
        + "\nZustimmungen: \n"
        + "Gegenstimmen: \n"
        + "Enthaltungen: \n"
        + activeTextarea.value.substring(endPos, activeTextarea.value.length);
});

document.getElementById('addPoint').addEventListener('click', function () {
    if (addPointLimiter == 0){
        document.getElementById('addedFields').insertAdjacentHTML("beforeend",'<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 Headline" id="TOP" name="" value="Tagesordnungspunkte:" readonly><br></div>');
        addPointLimiter = 1;
    }
    AreaTop= addPointLimiter + "TopArea";
    document.getElementById('addedFields').insertAdjacentHTML("beforeend",'<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="'+addPointLimiter+'Top" name="" value="'+addPointLimiter+'. Tagesordnungspunkt"> <br><br></div><div class="divtextareas"><textarea rows="10" col="500" id="'+addPointLimiter+'TopArea" class="border-0 textareas pl-20"></textarea><br></div>');
    addPointLimiter += 1;
    document.getElementById(AreaTop).addEventListener('click', function () {
        onMouseDown(); 
    });
});

document.getElementById('misc').addEventListener('click', function () {
        document.getElementById('addedFields').insertAdjacentHTML("beforeend",'<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="miscHeadline" name="" value="Verschiedenes/Notizen :"> <br><br></div>');
        document.getElementById('addedFields').insertAdjacentHTML("beforeend",'<div class="divtextareas"><textarea rows="10" col="500" id="'+miscLimiter+'miscArea"  class="border-0 textareas pl-20">Notizen hierr</textarea><br></div>');
        AreaMisc = miscLimiter+ "miscArea";
        miscLimiter += 1;
        document.getElementById(AreaMisc).addEventListener('click', function () {
            onMouseDown(); 
        });
});


function GeneratePdf() {
    console.log('test');
    var element = document.getElementById('FormProtokoll');
    html2pdf(element);
}