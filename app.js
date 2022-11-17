var showSnippets = 0;
var addPointLimiter = 0;
var invitesLimiter= 0;
var voteLimiter= 0;
var pointVoteLimiter = 0;
var voteLastLimiter = 0;
var miscLimiter = 0;
var snippetTop = 60;
var test = "addedFields" + addPointLimiter;


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
    if (invitesLimiter == 0){
        document.getElementById('addedFields').innerHTML+='<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="invitesHeadline" name="" value="Zeitgerechte Einladung"> <br><br></div>'
        document.getElementById('addedFields').innerHTML+= '<div class="divtextareas"><textarea rows="10" col="500"  class="border-0 textareas pl-20 id="invitesText">Teilnehmer hier</textarea><br></div>';
        invitesLimiter =1;
        document.getElementById('invites').style.backgroundColor = "#abb8c3";
        document.getElementById('snippets').style.top = snippetTop+20+"%"
    }
});

document.getElementById('vote').addEventListener('click', function () {
    if (voteLimiter == 0){
        document.getElementById('addedFields').innerHTML+= '<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="votesHeadline" name="" value="Abstimmung zu Tagesordnungspunkt XX: "> <br><br></div>'
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="agreeLabel" name="" value="Zustimmung:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="agree" name="" value=""><br>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="againstLabel" name="" value="Gegenstimme:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="against" name="" value=""><br>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="abstentionLabel" name="" value="Enthaltung:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="abstention" name="" value=""><br></br>';
        voteLimiter = 1;
        document.getElementById('vote').style.backgroundColor = "#abb8c3";
    }
});

document.getElementById('pointVote').addEventListener('click', function () {
    if (pointVoteLimiter == 0){
        document.getElementById('addedFields').innerHTML+='<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="votesHeadline" name="" value="Tagesordnung Abstimmung: "> <br><br></div>'
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="pointagreeLabel" name="" value="Zustimmung:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="pointagree" name="" value=""><br>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="pointagainstLabel" name="" value="Gegenstimme:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="pointagainst" name="" value=""><br>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="pointabstentionLabel" name="" value="Enthaltung:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="pointabstention" name="" value=""><br></br>';
        pointVoteLimiter = 1;
        document.getElementById('pointVote').style.backgroundColor = "#abb8c3";
    }
});

document.getElementById('voteLast').addEventListener('click', function () {
    if (voteLastLimiter == 0){
        document.getElementById('addedFields').innerHTML+='<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="votesHeadline" name="" value="Abstimmung letztes Protokoll : "> <br><br></div>'
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="agreeLastLabel" name="" value="Zustimmung:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="agreeLast" name="" value=""><br>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="againstLastLabel" name="" value="Gegenstimme:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="againsLastt" name="" value=""><br>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 pl-20" id="abstentionLastLabel" name="" value="Enthaltung:" readonly>';
        document.getElementById('addedFields').innerHTML+= '<input type="text" class="border-0 h-20 w-150 " id="abstentionLast" name="" value=""><br></br>';
        voteLastLimiter = 1;
        document.getElementById('voteLast').style.backgroundColor = "#abb8c3";
    }
});



document.getElementById('addPoint').addEventListener('click', function () {
    if (addPointLimiter == 0){
        document.getElementById('addedFields').innerHTML+='<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 Headline" id="TOP" name="" value="Tagesordnungspunkte:" readonly><br></div>'
        addPointLimiter = 1;
    }
    document.getElementById('addedFields').insertAdjacentHTML("beforeend",'<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="'+addPointLimiter+'Top" name="" value="'+addPointLimiter+'. Tagesordnungspunkt"> <br><br></div><div class="divtextareas"><textarea rows="10" col="500"  class="border-0 textareas pl-20">Begrüßung der Anwesenden durch FR XXX Ordnungsgemäße Einladung wird festgestelltXXX Annahme der Tagesordnung</textarea><br></div>');
    addPointLimiter += 1;
});

document.getElementById('misc').addEventListener('click', function () {
    if (miscLimiter >= 0){
        document.getElementById('addedFields').innerHTML+='<div class="pt-5"><input type="text" class="border-0 pl-20 float-left w-700 subheadline" id="miscHeadline" name="" value="Verschiedenes/Notizen :"> <br><br></div>'
        document.getElementById('addedFields').innerHTML+= '<div class="divtextareas"><textarea rows="10" col="500"  class="border-0 textareas pl-20 id="miscText">Notizen hierr</textarea><br></div>';
        miscLimiter =1;
    }
});