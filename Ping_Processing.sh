HighPingCounter=0
LowPingCounter=0
ping www.google.ca -t |
while read -r line
do
    
    echo "$line"

    #turn ping -t line into array (space separated)
    stringarray=(${line})
    #echo ${stringarray[4]:5:-2}

    #Strip fifth string down to ping as integer
    shortstring=`echo ${stringarray[4]} | sed -e 's/time=//g' | sed -e 's/ms//g'`




    #check
    if [[ "${stringarray[4]}" == *"time"* ]]; then

        if [[ "${shortstring}" -ge 100 ]]; then
        
            HighPingCounter=$((HighPingCounter+1))
            echo "ping high"
            echo ${shortstring}



        elif [[ ${shortstring} -lt 100 ]]; then

            LowPingCounter=$((LowPingCounter+1))

            echo "ping low"
            echo ${shortstring}

            
        fi
    else

        echo "non-ping"
        HighPingCounter=$((HighPingCounter+1))

    fi

    #Announce start time of high ping and reset low ping counter
    if [[ ${HighPingCounter} -eq 5 ]]; then

        echo "High ping started at "$(date +%Y_%m_%d_%H_%M_%S)

        LowPingCounter=0

    fi

    if [[ ${HighPingCounter} -gt 5 ]]; then
        LowPingCounter=0
    fi


    #Announce start of low ping and reset high ping counter
    if [[ ${LowPingCounter} -eq 5 ]]; then

        echo "Low ping started at "$(date +%Y_%m_%d_%H_%M_%S)

        HighPingCounter=0

    fi

     if [[ ${LowPingCounter} -gt 5 ]]; then
        HighPingCounter=0
    fi


        echo ""
        echo Low ping counter ${LowPingCounter}
        echo High ping counter ${HighPingCounter}
        echo ""



done

# ping www.google.ca >> ping.txt
# timestamp() {
#   date +"%T"
# }
# date +%s >> ping.txt
