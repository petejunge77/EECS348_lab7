<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $num = $_POST['size'];
    echo "<h2>Multiplication Table</h2>";
    echo "<table border ='1'>";
    echo "<tr><th>&nbsp;</th>";
    for($i=1; $i<=$num; $i++){
        echo "<th>$i</th>";
    }
    echo "</tr>";
    for($i=1; $i<=$num; $i++){
        echo "<tr><th>$i</th>";
        for($j=1; $j<= $num; $j++){
            echo "<td>" . ($i*$j) . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

}
?>