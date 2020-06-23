ping www.google.ca -t |
while read -r line
do
    echo "$line"

    #echo method1
    stringarray=(${line})
    #echo ${stringarray[4]:5:-2}

    shortstring=`echo ${stringarray[4]} | sed -e 's/time=//g' | sed -e 's/ms//g'`
    #echo ${shortstring}

    if [[ "${stringarray[4]}" == *"time"* ]]; then

        echo method2

        if [[ "${shortstring}" -ge 30 ]]; then
        
            echo ping high
            echo ${shortstring}

        elif [[ ${shortstring} -lt 30 ]]; then

            echo "ping low"
            echo ${shortstring}

        fi

    fi

    echo ""

done

# ping www.google.ca >> ping.txt
# timestamp() {
#   date +"%T"
# }
# date +%s >> ping.txt
