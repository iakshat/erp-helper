var lastState = ""
var tabState = "commons"

function startResumeHelper(){

    console.log("fucking things up!");

    var hu = document.createElement("script");
    hu.textContent = `
        function handleUpdate() {
            console.log("handling update...");
            setTimeout(() => {
                console.log("refitting after update");
                var resumeframe = document.getElementById("resumeIframe");
                resumeframe.src = resumeframe.src;
                const event = new Event('setup');
                document.dispatchEvent(event);
            }, 5000);
        }
    `;
    document.body.insertAdjacentElement('afterbegin',hu);
    document.addEventListener('setup', setupResumeForm);
    // window.handleUpdate = handleUpdate;
    addToggleButton();
    initFormShape();
    addResumeView();
    setTimeout(setupResumeForm, 3000);
}

function addToggleButton(){

    if(document.getElementsByClassName("onoffswitch").length){
        document.getElementsByClassName("onoffswitch")[0].remove();
    }

    var toggleButtonCSS = document.createElement("style");
    toggleButtonCSS.textContent = `
        .onoffswitch {
            position: relative; width: 81px;
            -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
            margin-left: 50%;
        }
        .onoffswitch-checkbox {
            position: absolute;
            opacity: 0; 
            pointer-events: none;
        }
        .onoffswitch-label {
            display: block; overflow: hidden; cursor: pointer;
            border: 2px solid #999999; border-radius: 20px;
        }
        .onoffswitch-inner {
            display: block; width: 200%; margin-left: -100%;
            transition: margin 0.3s ease-in 0s;
        }
        .onoffswitch-inner:before, .onoffswitch-inner:after {
            display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;
            font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
            box-sizing: border-box;
        }
        .onoffswitch-inner:before {
            content: "ON";
            padding-left: 10px;
            background-color: #34A7C1; color: #FFFFFF;
        }
        .onoffswitch-inner:after {
            content: "OFF";
            padding-right: 10px;
            background-color: #EEEEEE; color: #999999;
            text-align: right;
        }
        .onoffswitch-switch {
            display: block; width: 18px; margin: 6px;
            background: #FFFFFF;
            position: absolute; top: 0; bottom: 0;
            right: 47px;
            border: 2px solid #999999; border-radius: 20px;
            transition: all 0.3s ease-in 0s; 
        }
        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
            margin-left: 0;
        }
        .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
            right: 0px; 
        }
    `;
    document.head.appendChild(toggleButtonCSS);
    var toggleButton = document.createElement("div");
    toggleButton.innerHTML = `
        <div class="onoffswitch">
            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" tabindex="0" checked>
            <label class="onoffswitch-label" for="myonoffswitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
            </label>
        </div>
    `;
    toggleButton.style.width = "100%";
    toggleButton.onchange = handleToggle;
    document.getElementsByClassName("breadcrumb")[0].insertAdjacentElement('afterend',toggleButton);

}

function initFormShape() {
    //move cv form to 50% left
    var myframe = document.getElementById("myframe") || document.getElementById("changed");
    myframe.src = myframe.contentWindow.location.href;
    myframe.style.display = "inline";
    myframe.removeAttribute("style");
    myframe.style.width = "50vw";
    myframe.style.height = "100vh";
    myframe.style.display = "inline-block";
    myframe.setAttribute("scrolling", "yes");
    myframe.removeAttribute("width");
    myframe.setAttribute("id","changed");
}

function handleToggle() {
    var checked = document.getElementById("myonoffswitch").checked;
    if(checked){
        reshapeForm();
        addResumeView();
    }
    else{
        removeResumeView();
    }
}

function addResumeView(){

    var myframe = document.getElementById("myframe") || document.getElementById("changed");

    //if elements already exists, delete for no errors
    if(document.getElementById("resumeIframe")){
        document.getElementById("resumeIframe").remove();
    }
    if(document.getElementById("resumeId")){
        document.getElementById("resumeId").remove();
    }
    if(document.getElementById("refresher")){
        document.getElementById("refresher").remove();
    }

    //selector to select cv 1/2/3
    var resumeIdSelector = document.createElement("select");
    resumeIdSelector.id = "resumeId";
    resumeIdSelector.style.display = "block";

    // resumeIdSelector.style.width = "1vw";
    resumeIdSelector.style.height = "28px";
    resumeIdSelector.style.float = "right";
    resumeIdSelector.onchange = () => {
        var resumeId = resumeIdSelector.value;
        resumeFrame.src = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/cvGenerate.jsp?resume_no="+resumeId;
    }
    for(var i of Array(1,2,3)){
        var op = document.createElement("option");
        op.value = i;
        op.text = "Resume "+i;
        resumeIdSelector.appendChild(op);
    }

    //reload CV button
    var reloader = document.createElement("button");
    reloader.textContent = "Refresh CV";
    reloader.id = "refresher";
    reloader.style.float = "right";
    reloader.style.height = "28px";
    reloader.onclick = () => {reloadIframe(resumeFrame);}

    //add reload button and cv selector to breadcrumb row
    document.getElementsByClassName("breadcrumb")[0].insertAdjacentElement('beforeend',reloader);
    document.getElementsByClassName("breadcrumb")[0].insertAdjacentElement('beforeend',resumeIdSelector);

    //resume preview frame to 50% right
    var resumeFrame = document.createElement("iframe");
    resumeFrame.id = "resumeIframe"
    resumeFrame.src = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/cvGenerate.jsp?resume_no=1"
    resumeFrame.style.width = "48vw";
    resumeFrame.style.height = "100vh";
    resumeFrame.style.display = "inline-block";
    resumeFrame.style.float = "right";
    myframe.insertAdjacentElement('afterend',resumeFrame);

}

function removeResumeView() {
    var myframe = document.getElementById("myframe") || document.getElementById("changed");
    myframe.style.paddingBottom = "500px";
    myframe.style.width = "100vw";
    myframe.style.height = "100vh";
    myframe.parentElement.style.height = "100vh";
    if(document.getElementById("resumeIframe")){
        document.getElementById("resumeIframe").remove();
    }
    if(document.getElementById("resumeId")){
        document.getElementById("resumeId").remove();
    }
    if(document.getElementById("refresher")){
        document.getElementById("refresher").remove();
    }
}

function reshapeForm() {
    var myframe = document.getElementById("myframe") || document.getElementById("changed");
    myframe.style.paddingBottom = "0";
    myframe.style.width = "50vw";
}

function reloadIframe(frame) {
    console.log("refreshing frame", frame);
    frame.src = frame.src;
}

function setupResumeForm(){
    var sc = document.createElement("script")
    sc.text = `
        var itemId = "profTr";
        var tabState = "commons";
        var tabMap = {
            "commons": {
                "ids": [
                    
                ],
                "xpaths": [
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[1]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[2]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[2]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[4]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[5]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[6]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[1]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[2]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[1]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[2]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[3]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[4]",
        
                ]
            },
            "cv1": {
                "ids": [
                    
                    "profTab",
                    
                ],
                "xpaths": [
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[4]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[7]/td[4]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[1]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[2]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[5]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[1]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[2]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[7]"
                ]
            },
            "cv2": {
                "ids": [
                    
                    "profTab",
                    
                ],
                "xpaths": [
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[4]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[1]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[2]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[9]/td[4]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[5]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[3]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[4]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[7]"
                ]
            },
            "cv3": {
                "ids": [
                    
                    "profTab",
        
                ],
                "xpaths": [
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[1]/td[4]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[3]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[8]/td[4]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[10]/td[1]",
                    "/html/body/div/form/table/tbody/tr[5]/td/table/tbody/tr[10]/td[2]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[5]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[5]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td[6]",
                    "/html/body/div/form/table/tbody/tr[6]/td/table/tbody/tr/td/table/tbody/tr[7]",
                ]
            }
        }
        
        var allotedBlocks = {
            "cv1": [],
            "cv2": [],
            "cv3": [],
            "extras": [],
        }
        
        function initResumeForm(){
        
            if(confirm("We need to make changes to individual cv visibility of blocks. Continue?")){
                var blocks = document.querySelectorAll(\`[id=\${itemId}]\`);
                for(var i = 0; i < 10; i++){
                    allotedBlocks.cv1.push(blocks[i]);
                    allotedBlocks.cv2.push(blocks[10+i]);
                    allotedBlocks.cv3.push(blocks[20+i]);
                }
                for(var i = 30; i < 50; i++){
                    allotedBlocks.extras.push(blocks[i]);
                }
        
                for(var j = 0; j < 10; j++){
                    var i=j+1;
                    document.getElementById(\`\${i+6}resume1\`).value = "Y";
                    document.getElementById(\`\${i+6}resume2\`).value = "N";
                    document.getElementById(\`\${i+6}resume3\`).value = "N";
        
                    document.getElementById(\`\${i+16}resume1\`).value = "N";
                    document.getElementById(\`\${i+16}resume2\`).value = "Y";
                    document.getElementById(\`\${i+16}resume3\`).value = "N";
        
                    document.getElementById(\`\${i+26}resume1\`).value = "N";
                    document.getElementById(\`\${i+26}resume2\`).value = "N";
                    document.getElementById(\`\${i+26}resume3\`).value = "Y";
                }
                for(var i = 31; i <= 50; i++){
                    document.getElementById(\`\${i+6}resume1\`).value = "N";
                    document.getElementById(\`\${i+6}resume2\`).value = "N";
                    document.getElementById(\`\${i+6}resume3\`).value = "N";
                }
                addResumeTabs();

                document.getElementById("saveprdata").addEventListener("click", handleSubmit);
                window.addResumeTabs = addResumeTabs;

            }

        }

        function handleSubmit() {
            window.parent.handleUpdate();
        }
        
        function handleTabChange(){
            tabState = document.querySelector('input[name="tab"]:checked').value
            console.log("tabstate")
            refreshTab();
        }
        
        function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        
        function refreshTab(){
            console.log("refreshing tabs with state", tabState);
            for(var t in tabMap) {
                var show = "none";
                for(var elem of tabMap[t].ids){
                    console.log(elem)
                    document.getElementById(elem).style.display = show;
                }
                for(var elem of tabMap[t].xpaths){
                    getElementByXpath(elem).style.display = show;
                }
            }
            var show = "";
            for(var elem of tabMap[tabState].ids){
                document.getElementById(elem).style.display = show;
            }
            for(var elem of tabMap[tabState].xpaths){
                getElementByXpath(elem).style.display = show;
            }
        
            for(var t in allotedBlocks) {
                var show = "none";
                if(t === tabState){
                    show = "";
                }
                for(var elem of allotedBlocks[t]){
                    elem.style.display = show;
                }
            }
            getElementByXpath("/html/body/div/form/table").removeAttribute("style");
            beautifyTab();
        }
        
        function addResumeTabs(){
        
            var css = document.createElement("style");
            css.textContent = \`
                .stv-radio-tabs-wrapper {
                    clear: both;
                    display: inline-block;
                    width: 100%;
                    border-bottom: 1px solid #428bca;
                    padding: 0 10px;
                    position: relative;
                }
        
                input.stv-radio-tab {
                    position: absolute;
                    left: -99999em;
                    top: -99999em;
                }
                input.stv-radio-tab + label {
                    cursor: pointer;
                    float: left;
                    border: 1px solid #aaa;
                    border-bottom: 0;
                    background-color: #fff;
                    margin-right: -1px;
                    padding: 0.5em 1em;
                    position: relative;
                }
                input.stv-radio-tab + label:hover {
                    background-color: #eee;
                }
                input.stv-radio-tab:checked + label {
                    box-shadow: 0 3px 0 -1px #fff, inset 0 5px 0 -1px #13CD4A;
                    background-color: #fff;
                    border-color: #428bca;
                    z-index: 1;
                }
            \`
            document.head.appendChild(css);
        
            var bar = document.createElement("div");
            bar.style.width = "100%"
            bar.id = "bar";
            bar.className = "stv-radio-tabs-wrapper";
        
            var c = document.createElement("input");
            c.type = "radio";
            c.value = "commons";
            c.name = "tab";
            c.id = "commons";
            c.onchange = handleTabChange;
            c.checked = true;
            c.className = "stv-radio-tab";
            bar.appendChild(c);
            var l = document.createElement("label");
            l.setAttribute("for", "commons");
            l.textContent = "commons";
            bar.appendChild(l);
            var c = document.createElement("input");
            c.type = "radio";
            c.value = "cv1";
            c.name = "tab";
            c.id = "cv1";
            c.onchange = handleTabChange;
            c.className = "stv-radio-tab";
            bar.appendChild(c);
            var l = document.createElement("label");
            l.setAttribute("for", "cv1");
            l.textContent = "cv1";
            bar.appendChild(l);
            var c = document.createElement("input");
            c.type = "radio";
            c.value = "cv2";
            c.name = "tab";
            c.id = "cv2";
            c.onchange = handleTabChange;
            c.className = "stv-radio-tab";
            bar.appendChild(c);
            var l = document.createElement("label");
            l.setAttribute("for", "cv2");
            l.textContent = "cv2";
            bar.appendChild(l);
            var c = document.createElement("input");
            c.type = "radio";
            c.value = "cv3";
            c.name = "tab";
            c.id = "cv3";
            c.onchange = handleTabChange;
            c.className = "stv-radio-tab";
            bar.appendChild(c);
            var l = document.createElement("label");
            l.setAttribute("for", "cv3");
            l.textContent = "cv3";
            bar.appendChild(l);
        
            if(document.getElementById("bar"))
                document.getElementById("bar").remove();
            document.getElementById("from2_stu").insertAdjacentElement('afterbegin', bar);
        
            refreshTab();
        
        }
        
        function beautifyTab() {
            
            console.log("beautifying for", tabState);
            if(tabState == "commons")
                beautifyCommons();
            if(tabState == "cv1")
                beautifyCV1();
            if(tabState == "cv2")
                beautifyCV2();
            if(tabState == "cv3")
                beautifyCV3();
        }
        
        function temp(x){
            x.setAttribute("style","display:flex;justify-content:space-between")
            var td = x.getElementsByTagName("td")
            td[0].setAttribute("style","width:110px;text-align:left")
            td[1].setAttribute("style","width:230px")
            td[2].setAttribute("style","width:110px;text-align:left")
            td[3].setAttribute("style","width:230px")
        }
        
        function beautifyCommons() {
            var table = document.getElementById("tab1")
            var tbody = table.getElementsByTagName("tbody")[0]
            var tr = tbody.getElementsByTagName("tr")
            console.log(tr)
            tr[0].setAttribute("style","display:flex;justify-content:space-around;padding:15px")
            var td1 = tr[0].getElementsByTagName("td")
            td1[2].setAttribute("style","display:none")
            td1[3].setAttribute("style","display:none")
        
            for( var j=1;j<=5;j++){
                temp(tr[j])
            }
        }
        
        function beautifyCV1() {
            var table = document.getElementById("tab1")
            var tbody = table.getElementsByTagName("tbody")[0]
            var tr = tbody.getElementsByTagName("tr")[0]
            var td = tr.getElementsByTagName("td")
            console.log(td)
            td[2].innerHTML=" Show Minor <br>CV1&nbsp;<select name='showminor1' id='showminor1' ><option value='Y' selected=''>Y</option><option value='N'>N</option></select>"
            td[3].innerHTML='Show Micro <br>CV1&nbsp;<select name="showmicro1" id="showmicro1"><option value="Y" selected="">Y</option><option value="N">N</option></select>'
            var elms = document.querySelectorAll("[id='profTr']");
            for(var i=0;i<=9;i++){
                var td = elms[i].getElementsByTagName("td")
                td[4].style.display = "none";
                td[5].style.display = "none";
                td[6].style.display = "none";
            }
            table = document.getElementById("profTab")
            tbody = table.getElementsByTagName("tbody")[0]
            tr = tbody.getElementsByTagName("tr")[0]
            var th = tr.getElementsByTagName("th")
            th[4].style.display = "none";
            th[5].style.display = "none";
            th[6].style.display = "none";
        }
        
        function beautifyCV2() {
            var table = document.getElementById("tab1")
            var tbody = table.getElementsByTagName("tbody")[0]
            var tr = tbody.getElementsByTagName("tr")[0]
            var td = tr.getElementsByTagName("td")
            td[2].innerHTML=" Show Minor <br>CV2&nbsp;<select name='showminor2' id='showminor2' ><option value='Y' selected=''>Y</option><option value='N'>N</option></select>"
            td[3].innerHTML='Show Micro <br>CV2&nbsp;<select name="showmicro2" id="showmicro2"><option value="Y" selected="">Y</option><option value="N">N</option></select>'
            var elms = document.querySelectorAll("[id='profTr']");
            for(var i=10;i<=22;i++){
                var td = elms[i].getElementsByTagName("td")
                td[4].style.display = "none";
                td[5].style.display = "none";
                td[6].style.display = "none";
            }
        }
        
        function beautifyCV3() {
            var table = document.getElementById("tab1")
            var tbody = table.getElementsByTagName("tbody")[0]
            var tr = tbody.getElementsByTagName("tr")[0]
            var td = tr.getElementsByTagName("td")
            td[2].innerHTML=" Show Minor <br>CV3&nbsp;<select name='showminor3' id='showminor3' ><option value='Y' selected=''>Y</option><option value='N'>N</option></select>"
            td[3].innerHTML='Show Micro <br>CV3&nbsp;<select name="showmicro3" id="showmicro3"><option value="Y" selected="">Y</option><option value="N">N</option></select>'
            var elms = document.querySelectorAll("[id='profTr']");
            for(var i=21;i<=31;i++){
                var td = elms[i].getElementsByTagName("td")
                td[4].style.display = "none";
                td[5].style.display = "none";
                td[6].style.display = "none";
            }
        }
        
        initResumeForm();
        
    `
    document.getElementById("changed").contentDocument.body.insertAdjacentElement('afterbegin',sc);
}