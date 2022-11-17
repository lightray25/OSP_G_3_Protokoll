<?php
include 'header.html'; ?>
    <div id="content">
        <div id="Protokoll">
            <div id="redBar"> <p>Stadt Köln</p> </div>
            <div id="gso_logo"><img src="img/gso_logo.jpg"></div>
            <form id="FormProtokoll">
                <div id="FixedInfo">
                    <input type="text" class="border-0" id="Info" name="" value="Berufskolleg –Sekundarstufe II" readonly><br>
                    <input type="text" class="border-0" id="Info2" name="" value="Berufliches Gymnasium" readonly><br>
                    <input type="text" class="border-0 pl-20" id="IT" name="" value="O Informationstechnik" readonly><br>   
                    <input type="text" class="border-0 pl-20" id="SYS" name="" value="O Systemtechnik" readonly><br>   
                    <input type="text" class="border-0 pl-20" id="MEDIA" name="" value="O Mediengestaltung" readonly>
                    <input type="text" class="border-0 pl-20 float-left w1k" id="Adress" name="country" value="Georg-Simon-Ohm-Berufskolleg, Westerwaldstr. 92, 51105 Köln" readonly><br>  
                    <input type="text" class="border-0 pl-20" id="TownDate" name="" value="Köln, Datum"><br>
                    <input type="text" class="border-0 pl-20 float-left w-230 Headline" id="Headline" name="" value="Protokoll (XX)">
                    <select id="Konferenz" class="border-0 padding-top3 float-left w-700 Headline" name="">
                        <option class="border-0 pl-20 float-left w-700 font-fix" value="der Bereichskonferenz IT-Berufe">der Bereichskonferenz IT-Berufe</option>
                        <option class="border-0 pl-20 float-left w-700 font-fix" value="der Bereichskonferenz System-Berufe">der Bereichskonferenz System-Berufe</option>
                        <option class="border-0 pl-20 float-left w-700 font-fix" value="der Bereichskonferenz Medien-Berufe">der Bereichskonferenz Medien-Berufe</option>
                        <option class="border-0 pl-20 float-left w-700 font-fix" value="zur Lehrerkonferenz">zur Lehrerkonferenz</option>
                        <option class="border-0 pl-20 float-left w-700 font-fix" value="zur Zeugnisskonferenz">zur Zeugnisskonferenz</option>
                    </select><br><br>
                </div>
                    <input type="text" class="border-0 float-left h-20 width-100 pl-20" id="DateLabel" name="" value="Datum:" readonly>
                    <input type="text" class="border-0 float-left h-20 width-100 " id="Date" name="" value=""><br>
                    <input type="text" class="border-0 float-left h-20 width-100 pl-20" id="LocationLabel" name="" value="Ort:" readonly>
                    <input type="text" class="border-0 float-left h-20 width-100 " id="Location" name="" value=""><br>
                    <input type="text" class="border-0 float-left h-20 width-100 pl-20" id="BeginLabel" name="" value="Beginn:" readonly>
                    <input type="text" class="border-0 float-left h-20 width-100 " id="Begin" name="" value=""><br>
                    <input type="text" class="border-0 float-left h-20 width-100 pl-20" id="EndLabel" name="" value="Ende:" readonly>
                    <input type="text" class="border-0 float-left h-20 width-100 " id="End" name="" value=""><br>
                    <div class="pt-5">
                        <input type="text" class="border-0 float-left h-20 width-100 pl-20" id="AdminsLabel" name="" value="Leitung:" readonly>
                        <input type="text" class="border-0 float-left h-20 width-100 " id="Admin" name="" value=""><br>
                        <input type="text" class="border-0 float-left h-20 w-150 pl-20" id="ParticipantsLabel" name="" value="Teilnehmer:innen:" readonly>
                        <input type="text" class="border-0 float-left h-20 width-100 " id="Participants" name="" value=""><br>
                    </div> 
                    <div id ="addedFields" class="addedFields"></div>
                    <div id ="addedFields1" class="addedFields1"></div>
                    <div class="pl-20">
                        <button type="submit" class="btn btn-primary float-left pl-20">Fertigstellen</button><div id ="showSnippets">Textbausteine</div><br>
                    </div>
            </form>
            <div id="snippets">
                <div id="addPoint" class="eachSnippet">Tagesordnungspunkt hinzufügen</div>
                <div id="invites" class="eachSnippet">Fristgerecht Eingeladen</div>
                <div id="vote" class="eachSnippet">Abstimmung zu Tagesordnung</div>
                <div id="pointVote" class="eachSnippet">Tagesordnung Abstimmung</div>
                <div id="voteLast" class="eachSnippet">Abstimmung letztes Protokoll</div>
                <div id="misc" class="eachSnippet">Verschiedenes Hinzufügen</div>
            </div>
        </div>
    </div>
<?php
include 'footer.html'; ?>
