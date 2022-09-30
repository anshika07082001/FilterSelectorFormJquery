$(document).ready(function(){
    // $months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    // $days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturady","Sunday"];
    
    $hrs = $min = $sec =0,$mil =99,$collect='',$interval='';
    function $check(){
        if($mil<99){
            $mil++;
        }
        else{
            $mil=0;
            if($sec<59){
                $sec++;
            }
            else{
                $min=0;
                if($min<59){
                    $min++;
                }
                else{
                    $min=0;
                    if($hrs<59){
                        $hrs++;
                    }
                }
            }
        }
        $("#hours").html($hrs);
        $("#minutes").html($min);
        $("#seconds").html($sec);
        $("#milliseconds").html($mil);
    }
    $("#btnStart").click(function(){
        clearInterval($interval);
        $interval = setInterval($check,10)
    })
    $("#btnStop").click(function(){
        clearInterval($interval);
    })
    $("#btnReset").click(function(){
        clearInterval($interval)
        $("#hours").html("00");
        $("#minutes").html("00");
        $("#seconds").html("00");
        $("#milliseconds").html("00");
    })    
})