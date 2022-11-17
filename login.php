<?php
include 'header.html'; ?>
            <div id="content">
                <div class="Formbericht">
                    <div class="login">    
                        <form id="login" method="post" action="dashboard.php">  
                            <label><b>User Name</b></label>    
                            <input type="text" name="Uname" id="Uname" placeholder="Username">    
                            <br><br>    
                            <label><b>Password</b></label>    
                            <input type="Password" name="Pass" id="Pass" placeholder="Password">    
                            <br><br>    
                            <input type="submit" class="btn btn-primary" name="log" id="log" value="Log In Here">       
                            <br><br>    
                            <input type="checkbox" id="check">    
                            <span>Remember me</span>  
                            <br><br>  
                            <a href="#">Forgot Password?</a>    
                        </form>
                    </div>     
                </div>    
            </div>
<?php
include 'footer.html'; ?>

<script type="text/javascript">
    document.getElementById("schriftLogin").style.display = "none"; // Schrift oben links auf Login unsichtbar
    document.getElementById("greetingName").innerHTML = 'Sharepoint Protokolle'
</script>
