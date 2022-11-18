<?php
include 'header.html'; ?>
            <div id="content">
                <h2> Dashboard </h2>
                <div id="dashboard">
                    <div id ="createNew"><a href="create_new.php">+</a></div>
                    <div id ="search"><img src="img/lupe.png" width="35px" height="35px" style="padding-top: 5px;"></div>
                    <form id="FormSearch">
                        <label class="float-left">Kürzel</label>
                        <label class="">Konferenz</label>
                        <label  class="float-right">Datum</label><br>
                        <select id="AutorSearch" class="pl-20 border-0 padding-top3 Headlinesmall" name="">
                            <option class="border-0 pl-20 float-left w-500 font-fix" value="--">--</option>
                            <option class="border-0 pl-20 float-left w-500 font-fix" value="HK">HK</option>
                            <option class="border-0 pl-20 float-left w-500 font-fix" value="SO">SO</option>
                            <option class="border-0 pl-20 float-left w-500 font-fix" value="DP">DP</option>
                        </select>
                        <select id="KonferenzSearch" class="border-0 padding-top3 Headlinesmall w-400" name="">
                            <option class="border-0 pl-20 float-left w-400 font-fix" value="--">--</option>
                            <option class="border-0 pl-20 float-left w-400 font-fix" value="der Bereichskonferenz IT-Berufe">der Bereichskonferenz IT-Berufe</option>
                            <option class="border-0 pl-20 float-left w-400 font-fix" value="der Bereichskonferenz System-Berufe">der Bereichskonferenz System-Berufe</option>
                            <option class="border-0 pl-20 float-left w-400 font-fix" value="der Bereichskonferenz Medien-Berufe">der Bereichskonferenz Medien-Berufe</option>
                            <option class="border-0 pl-20 float-left w-400 font-fix" value="zur Lehrerkonferenz">zur Lehrerkonferenz</option>
                            <option class="border-0 pl-20 float-left w-400 font-fix" value="zur Zeugnisskonferenz">zur Zeugnisskonferenz</option>
                        </select>
                        <input name="date" class="ml-20" type="date">
                    </form>
                </div>
                <div id="dashboardTable">
                        <table>
                            <tr class="border_bottom">
                                <th>Dokument Name</th>
                                <th>Konferenzart</th>
                                <th>Autor</th>
                                <th>Datum</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            <tr class="border_bottom">
                                <td>Protokoll 1</td>
                                <td>Konferenzart 1</td>
                                <td>Autor 1</td>
                                <td>Datum 1</td>
                                <td id="status2">Status 1</td>
                                <td><div id ="editStatus"><img src="img/checkmark.png" width="35px" height="35px" style="padding-top: 5px;"></div></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>Protokoll 1</td>
                                <td>Konferenzart 1</td>
                                <td>Autor 1</td>
                                <td>Datum 1</td>
                                <td >Status 1</td>
                                <td><div id ="editStatus"><img src="img/checkmark.png" width="35px" height="35px" style="padding-top: 5px;"></div></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>Protokoll 1</td>
                                <td>Konferenzart 1</td>
                                <td>Autor 1</td>
                                <td>Datum 1</td>
                                <td>Status 1</td>
                                <td><div id ="editStatus"><img src="img/checkmark.png" width="35px" height="35px" style="padding-top: 5px;"></div></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>Protokoll 1</td>
                                <td>Konferenzart 1</td>
                                <td>Autor 1</td>
                                <td>Datum 1</td>
                                <td>Status 1</td>
                                <td><div id ="editStatus"><img src="img/checkmark.png" width="35px" height="35px" style="padding-top: 5px;"></div></td>
                            </tr>
                            <tr class="border_bottom">
                                <td>Protokoll 1</td>
                                <td>Konferenzart 1</td>
                                <td>Autor 1</td>
                                <td>Datum 1</td>
                                <td>Status 1</td>
                                <td><div id ="editStatus"><img src="img/checkmark.png" width="35px" height="35px" style="padding-top: 5px;"></div></td>
                            </tr>
                        </table>
                    </div>
            </div>
<?php
include 'footer.html'; ?>

<script type="text/javascript">
    document.getElementById('editStatus').addEventListener('click', function () {
        console.log("test");
        document.getElementById('status2').innerHTML ="gesichtet";
    });
</script>