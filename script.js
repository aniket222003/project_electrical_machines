const setVoltageField = () => {
    let polarity = document.getElementById('polarity').value;
    if (polarity == 'additive') {
        document.getElementById('voltageFinal').style.display = "block";
        document.getElementById('voltage').setAttribute("required","required");
    } else {
        document.getElementById('voltageFinal').style.display = "none";
        document.getElementById('voltage').removeAttribute("required");
    }
}

const checkValue = () => {
    event.preventDefault();

    let vp = document.getElementById('volP').value;
    let vs = document.getElementById('volS').value;
    let kva = document.getElementById('kva').value;
    let polarity = document.getElementById('polarity').value;
    let voltage = document.getElementById('voltage').value;
    let side = document.getElementById('side').value;


    let vf = 0;
    let kva_final = 0;
    let tranform_ratio = 0;
    let html = '';
    if (polarity == 'additive') {
        vf = Number(vp) + Number(vs);

        if (voltage == 'vp' && side == "hv") {

            kva_final = (kva * vf) / vs;
            tranform_ratio = vf / vp;

            html = `<div class = "backgroundwhite resultdiv">
                low voltage side voltage(in Volts) :  ${vp} <br>
                high voltage side voltage(in Volts) :  ${vf} <br>
                input side voltage(in Volts) :   ${vp} <br>
                output side voltage(in Volts) :  ${vf} <br>
                transformation ratio of auto-transformer :  ${tranform_ratio} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
        `;

        } else if (voltage == 'vs' && side == "hv") {

            kva_final = (kva * vf) / vp;
            tranform_ratio = vf / vs;

            html = `<div class = "backgroundwhite resultdiv">
                low voltage side voltage(in Volts) :  ${vs} <br>
                high voltage side voltage(in Volts) :  ${vf} <br>
                input side voltage(in Volts) :   ${vs} <br>
                output side voltage(in Volts) :  ${vf} <br>
                transformation ratio of auto-transformer :  ${tranform_ratio} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
        `;

        } else if (voltage == 'vp' && side == "lv") {

            kva_final = (kva * vf) / vs;
            tranform_ratio = vf / vp;

            html = `<div class = "backgroundwhite resultdiv">
                low voltage side voltage(in Volts) :  ${vp} <br>
                high voltage side voltage(in Volts) :  ${vf} <br>
                input side voltage(in Volts) :   ${vf} <br>
                output side voltage(in Volts) :  ${vp} <br>
                transformation ratio of auto-transformer :  ${tranform_ratio} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
        `;

        } else if (voltage == 'vs' && side == "lv") {

            kva_final = (kva * vf) / vp;
            tranform_ratio = vf / vs;

            html = `<div class = "backgroundwhite resultdiv">
                low voltage side voltage(in Volts) :  ${vs} <br>
                high voltage side voltage(in Volts) :  ${vf} <br>
                input side voltage(in Volts) :   ${vf} <br>
                output side voltage(in Volts) :  ${vs} <br>
                transformation ratio of auto-transformer :  ${tranform_ratio} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
        `;
        }

    } else if (polarity == 'subtractive') {
        vf = Number(vp) - Number(vs);

        if (side == "hv") {
            if (vp > vs && vp > vf) {

                kva_final = (kva * vf) / vs;

                html = `<div class = "backgroundwhite resultdiv">
                input side voltage(in Volts) :   ${vf} <br>
                output side voltage(in Volts) :  ${vp} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
                `;

            } else if (vs > vp && vs > vf) {
                kva_final = (kva * vf) / vp;

                html = `<div class = "backgroundwhite resultdiv">
                input side voltage(in Volts) :   ${vf} <br>
                output side voltage(in Volts) :  ${vs} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
                `;

            }else{
                html = `<div class = "backgroundwhite resultdiv">
                    Not possible for this input
                `;
            }

        } else if (side == "lv") {

            if (vp > vs && vp > vf){

                kva_final = (kva * vf) / vs;

                html = `<div class = "backgroundwhite resultdiv">
                input side voltage(in Volts) :   ${vp} <br>
                output side voltage(in Volts) :  ${vf} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
                `;

            }else if(vs > vp && vs > vf){

                kva_final = (kva * vf) / vp;

                html = `<div class = "backgroundwhite resultdiv">
                input side voltage(in Volts) :   ${vs} <br>
                output side voltage(in Volts) :  ${vf} <br>
                kva rating of auto-transformer(in kva) :  ${kva_final} <br>
                `;

            }else{
                html = `<div class = "backgroundwhite resultdiv">
                    Not possible for this input
                `;
            }
        }

    } 

    document.getElementsByClassName('formT')[0].style.display = "none";

    html += "<h1> KVA rating & efficiency of auto transformer is greater than two winding transformers</h1> </div>"

    document.getElementById('result').innerHTML = html;


}
